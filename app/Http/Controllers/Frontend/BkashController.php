<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\CartManagerController;
use App\Http\Controllers\Controller;
use App\Models\Coupon;
use App\Models\Customer;
use App\Models\Order;
use App\Models\OrderAttribute;
use App\Models\OrderDetail;
use App\Models\Product;
use App\Models\ProductVariation;
use App\Models\Shipping;
use App\Models\ShippingCharge;
use App\Models\StockLedger;
use App\Models\User;
use Carbon\Carbon;
use DateTime;
use Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class BkashController extends Controller
{
    private $cart_handler;

    
    public function visit(Request $request)
    {

        $products                  = \Cart::getContent();

        if($request->session()->has('shipping_charge')) {
            $shipping_cost = $request->session()->get('shipping_charge');
        }else {
            $shipping_cost = 0;
        }
        $invoice = Helper::autoOrderNewInvoiceNoGenereate();


        $request->session()->put('invoice',$invoice);

        $cart_total      = \Cart::getTotal();

        $total = $cart_total + $shipping_cost;
        $token = $this->bkash_Get_Token();

        $request->session()->put('token', $token);

        return view('frontend.bkash_payment', compact('products', 'shipping_cost', 'total', 'cart_total', 'invoice'));
    }

    public function order_data(Request $request)
    {
        if($request->has('name') && $request->name != null || $request->name != 'null') {
            $request->session()->put('customer_name',$request->name);
        }
        if($request->has('address') && $request->address != null || $request->address != 'null') {
            $request->session()->put('customer_address',$request->address);
        }
        if($request->has('phone') && $request->phone != null || $request->phone != 'null') {
            $request->session()->put('customer_phone',$request->phone);
        }
        if($request->has('email') && $request->email != null || $request->email != 'null') {
            $request->session()->put('customer_email',$request->email);
        }
        if($request->has('shipping_name') && $request->shipping_name != null || $request->shipping_name != 'null') {
            $request->session()->put('shipping_name',$request->shipping_name);
        }
        if($request->has('shipping_address') && $request->shipping_address != null || $request->shipping_address != 'null') {
            $request->session()->put('shipping_address',$request->shipping_address);
        }
        if($request->has('shipping_phone') && $request->shipping_phone != null || $request->shipping_phone != 'null') {
            $request->session()->put('shipping_phone',$request->shipping_phone);
        }
        if($request->has('shippingDisplay') && $request->shipping_email != null || $request->shipping_email != 'null') {
            $request->session()->put('shipping_email',$request->shipping_email);
        }
        if($request->has('shippingDisplay') && $request->shippingDisplay != null || $request->shippingDisplay != 'null') {
            $request->session()->put('shippingDisplay',$request->shippingDisplay);
        }
        if($request->has('payment_method') && $request->payment_method != null || $request->payment_method != 'null') {
            $request->session()->put('payment_method',$request->payment_method);
        }
        if($request->has('transaction_id') && $request->transaction_id != null || $request->transaction_id != 'null') {
            $request->session()->put('transaction_id',$request->transaction_id);
        }
        if($request->has('cashOnDelivery') && $request->cashOnDelivery != null || $request->cashOnDelivery != 'null') {
            $request->session()->put('cashOnDelivery',$request->cashOnDelivery);
        }
        if($request->has('createAccount') && $request->createAccount != null || $request->createAccount != 'null') {
            $request->session()->put('createAccount',$request->createAccount);
        }
        if($request->has('notes') && $request->notes != null || $request->notes != 'null') {
            $request->session()->put('notes',$request->notes);
        }
        if($request->has('shipping_charge_id') && $request->shipping_charge_id != null || $request->shipping_charge_id != 'null') {
            $request->session()->put('shipping_charge_id',$request->shipping_charge_id);
        }
        if($request->has('shipping_charge') && $request->shipping_charge != null || $request->shipping_charge != 'null') {
            $request->session()->put('shipping_charge',$request->shipping_charge);
        }
        if($request->has('delivery_date') && $request->delivery_date != null || $request->delivery_date != 'null') {
            $request->session()->put('delivery_date',$request->delivery_date);
        }
        if($request->has('payment_type') && $request->payment_type != null || $request->payment_type != 'null') {
            $request->session()->put('payment_type',$request->payment_type);
        }
        if($request->has('coupon_code') && $request->coupon_code != null || $request->coupon_code != 'null') {
            $request->session()->put('coupon_code',$request->coupon_code);
        }
        if($request->has('coupon_amount') && $request->coupon_amount != null || $request->coupon_amount != 'null') {
            $request->session()->put('coupon_amount',$request->coupon_amount);
        }
        if($request->has('personal_notes') && $request->personal_notes != null || $request->personal_notes != 'null') {
            $request->session()->put('personal_notes',$request->personal_notes);
        }
        if($request->has('packaging_price') && $request->packaging_price != null || $request->packaging_price != 'null') {
            $request->session()->put('packaging_price',$request->packaging_price);
        }
        if($request->has('card_id') && $request->card_id != null || $request->card_id != 'null') {
            $request->session()->put('card_id',$request->card_id);
        }
        if($request->has('card_price') && $request->card_price != null || $request->card_price != 'null') {
            $request->session()->put('card_price',$request->card_price);
        }
        if($request->has('user_id') && $request->user_id != null || $request->user_id != 'null') {
            $request->session()->put('user_id',$request->user_id);
        }

        $carts                  = \Cart::getContent();
        $request->session()->put('carts', $carts);

        $cart_total_amount      = \Cart::getTotal();
        $request->session()->put('cart_total_amount', $carts);

        return response()->json([
            "order data stored successfully"
        ], 200);
    }



    // public function token() {
    //     session_start();

    //     $request_token = $this->bkash_Get_Token();
    //     $idtoken = $request_token['id_token'];

    //     $_SESSION['token']=$idtoken;

    //     // $strJsonFileContents = file_get_contents("config.json");
    //     // $array = json_decode($strJsonFileContents, true);
    //     $array = $this->_get_config_file();

    //     $array['token']=$idtoken;

    //     $newJsonString = json_encode($array);
    //     // file_put_contents('config.json',$newJsonString);
    //     File::put(storage_path() . '/app/public/config.json', $newJsonString);

    //     echo $idtoken;
    // }

    protected function bkash_Get_Token()
    {
        /*$strJsonFileContents = file_get_contents("config.json");
        $array = json_decode($strJsonFileContents, true);*/

        $array = $this->_get_config_file();

        $post_token=array(
            'app_key'=>$array["app_key"],
            'app_secret'=>$array["app_secret"]
        );

        $url=curl_init($array["tokenURL"]);
        $proxy = $array["proxy"];
        $posttoken=json_encode($post_token);
        $header=array(
            'Content-Type:application/json',
            'password:'.$array["password"],
            'username:'.$array["username"]
        );

        curl_setopt($url,CURLOPT_HTTPHEADER, $header);
        curl_setopt($url,CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($url,CURLOPT_RETURNTRANSFER, true);
        curl_setopt($url,CURLOPT_POSTFIELDS, $posttoken);
        curl_setopt($url,CURLOPT_FOLLOWLOCATION, 1);
        //curl_setopt($url, CURLOPT_PROXY, $proxy);
        $resultdata=curl_exec($url);
        curl_close($url);
        $arr = json_decode($resultdata, true);
        return $arr['id_token'];
    }

    protected function _get_config_file()
    {
        $path = storage_path() . "/app/public/config.json";
        return json_decode(file_get_contents($path), true);
    }

    public function createpayment(Request $request) {
        // dd(request()->shoppingID);
        session_start();
        $this->cart_handler = new CartManagerController();  
        // $strJsonFileContents = file_get_contents("config.json");
        // $array = json_decode($strJsonFileContents, true);
        $array = $this->_get_config_file();

        $get_shipping_charge = ShippingCharge::where('id', $request->shipping_id)->first();
    
        $shipping_cost = $get_shipping_charge->shipping_charge;
        $cart_total    = floatval($this->cart_handler->cart_total());

        $amount = $shipping_cost+$cart_total;
        $invoice = Helper::autoOrderNewInvoiceNoGenereate(); // must be unique

        $token = $this->bkash_Get_Token();
        $request->session()->put('token',$token);

        $intent = "sale";

        $proxy = $array["proxy"];
        $createpaybody = array('amount' => $amount, 'currency' => 'BDT', 'merchantInvoiceNumber' => $invoice, 'intent' => $intent);
        
            $url = curl_init($array["createURL"]);

            $createpaybodyx = json_encode($createpaybody);

            $header=array(
                'Content-Type:application/json',
                'authorization:'.$token,
                'x-app-key:'.$array["app_key"]
            );

            
            curl_setopt($url,CURLOPT_HTTPHEADER, $header);
            curl_setopt($url,CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($url,CURLOPT_RETURNTRANSFER, true);
            curl_setopt($url,CURLOPT_POSTFIELDS, $createpaybodyx);
            curl_setopt($url,CURLOPT_FOLLOWLOCATION, 1);
            //curl_setopt($url, CURLOPT_PROXY, $proxy);

            $resultdata = curl_exec($url);
            curl_close($url);
            $arr = json_decode($resultdata, true);
            
            $paymentID = $arr['paymentID'];

            $request->session()->put('paymentID',$paymentID);

            return json_decode($resultdata);
    }
    public function executepayment(Request $request) {
        session_start();

        $array = $this->_get_config_file();

        $paymentID = $request->session()->get('paymentID');
        $token = $request->session()->get('token');
        // $proxy = $array["proxy"];

        $url = curl_init($array["executeURL"].$paymentID);

        $header=array(
            'Content-Type:application/json',
            'authorization:'.$token,
            'x-app-key:'.$array["app_key"]
        );

        curl_setopt($url,CURLOPT_HTTPHEADER, $header);
        curl_setopt($url,CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($url,CURLOPT_RETURNTRANSFER, true);
        curl_setopt($url,CURLOPT_FOLLOWLOCATION, 1);
        //curl_setopt($url, CURLOPT_PROXY, $proxy);

        $resultdatax=curl_exec($url);
        curl_close($url);

        $arr = json_decode($resultdatax, true);
        if(array_key_exists("errorCode",$arr) && $arr['errorCode'] != '0000'){
            $request->session()->put('errorMessage', $arr['errorMessage']);

        }

        $this->updateOrderStatus($resultdatax, $request);

        // return redirect('/thank-you');

    }
    protected function updateOrderStatus($resultdatax, Request $request) {

        $resultdatax = json_decode($resultdatax);
        // dd($resultdatax);
        if($resultdatax && isset($resultdatax->trxID)) {
            if($request->session()->has('coupon_code')) {
                $coupon_code = $request->session()->get('coupon_code');
            }else {
                $coupon_code = null;
            }
            if($request->session()->has('coupon_amount')) {
                $coupon_amount = $request->session()->get('coupon_amount');
            }else {
                $coupon_code = null;
            }
            if($request->session()->has('shippingDisplay')) {
                $shippingStatus = $request->session()->get('shippingDisplay') == 'false' ? 0: 1;
            }else {
                $shippingStatus = null;
            }


            $current_date           = date('d/m/Y');
            $invoice_date           = DateTime::createFromFormat('d/m/Y', $current_date)->format('Y-m-d');

            // if ($resultdatax && $resultdatax->paymentID != null && $resultdatax->transactionStatus == 'Completed') {
            //     DB::table('bkashtests')->where([
            //         'invoice' => $resultdatax->merchantInvoiceNumber
            //     ])->update([
            //         'status' => 'Processing', 'trxID' => $resultdatax->trxID
            //     ]);
            // }
            if($request->session()->has('user_id')) {
                $user_id = $request->session()->get('user_id');
            }else {
                $user_id = null;
            }
            if($request->session()->has('customer_name')) {
                $customer_name = $request->session()->get('customer_name');
            }else {
                $customer_name = null;
            }

            if($request->session()->has('customer_phone')) {
                $customer_phone = $request->session()->get('customer_phone');
            }else {
                $customer_phone = null;
            }

            if($request->session()->has('customer_email')) {
                $customer_email = $request->session()->get('customer_email');
            }else {
                $customer_email = null;
            }

            if($request->session()->has('customer_address')) {
                $customer_address = $request->session()->get('customer_address');
            }else {
                $customer_address = null;
            }


            if(!empty($user_id)){
                $userID             = Auth::user()->id;
            }else{
                $username = explode(" ", $customer_name);
                $ex_email = User::where('email', $customer_email)->first();
                $ex_phone = User::where('phone', $customer_phone)->first();
                if(isset($ex_email) && isset($ex_phone)){
                    $userID = $ex_email->id;
                }elseif (isset($ex_email)){
                    $userID = $ex_email->id;
                }elseif (isset($ex_phone)){
                    $userID = $ex_phone->id;
                }else{
                    $user = User::create([
                        'name'          => $request->name,
                        'username'      => $username[0],
                        'email'         => $customer_email,
                        'phone'         => $customer_phone,
                        'address'       => $customer_address,
                        'password'      => (!empty($request->account_password))?Hash::make($request->account_password):Hash::make($request->phone),
                        'status'        => 1
                    ]);
                    $userID = $user->id;
                }
            }

            //User Update after OTP Verify
            /*$userUpdate = User::where('id', $userID)->first();
            if(isset($userUpdate)){
                $username = explode(" ", $request->name);
                $userUpdate->update([
                    'name'          => $request->name,
                    'username'      => $username[0],
                    'email'         => (!empty($request->email))?$request->email:NULL,
                    'address'       => (!empty($request->address))?$request->address:NULL,
                ]);
            }*/

            if($request->session()->has('shipping_name')) {
                $shipping_name = $request->session()->get('shipping_name');
            }else {
                $shipping_name = null;
            }
            if($request->session()->has('shipping_email')) {
                $shipping_email = $request->session()->get('shipping_email');
            }else {
                $shipping_email = null;
            }
            if($request->session()->has('shipping_phone')) {
                $shipping_phone = $request->session()->get('shipping_phone');
            }else {
                $shipping_phone = null;
            }
            if($request->session()->has('shipping_address')) {
                $shipping_address = $request->session()->get('shipping_address');
            }else {
                $shipping_address = null;
            }
            if($request->session()->has('delivery_date')) {
                $delivery_date = $request->session()->get('delivery_date');
            }else {
                $delivery_date = null;
            }

            if($request->session()->has('notes')) {
                $notes = $request->session()->get('notes');
            }else {
                $notes = null;
            }
            if($request->session()->has('shipping_charge_id')) {
                $shipping_charge_id = $request->session()->get('shipping_charge_id');
            }else {
                $shipping_charge_id = null;
            }
            if($request->session()->has('shipping_charge')) {
                $shipping_charge = $request->session()->get('shipping_charge');
            }else {
                $shipping_charge = 60;
            }

            $carts                  = \Cart::getContent();
            if(!$carts && $carts == null) {
                $carts = $request->session()->get('carts');
            }

            $cart_count             = count($carts);
            $current_date           = date('d/m/Y');
            $invoice_date           = DateTime::createFromFormat('d/m/Y', $current_date)->format('Y-m-d');

            $cart_total_amount      = \Cart::getTotal();

            if(!$cart_total_amount && $cart_total_amount == null) {
                $cart_total_amount = $request->session()->get('cart_total_amount');
            }

            if($cart_total_amount < 0) {
                $total_amount = 0;
            }
            else {
                $total_amount       = $cart_total_amount + $shipping_charge;
            }

            $model                  = DB::table('stock_ledgers');
            $ledgerType             = 4;
            $invoice_no             = Helper::autoInvoiceNoGenereateBasicUser($model, $ledgerType, $userID);

            if($shippingStatus == 1) {
                $shipping = Shipping::create([
                    'company_id'        => 0,
                    'shipping_name'     => $shipping_name,
                    'shipping_email'    => $shipping_email,
                    'shipping_phone'    => $shipping_phone,
                    'shipping_address'  => $shipping_address,
                    'status'            => 1,
                    'created_by'        => $userID,
                ]);
            } else {
                $shipping = Shipping::create([
                    'company_id'        => 0,
                    'shipping_name'     => $customer_name,
                    'shipping_email'    => $customer_email,
                    'shipping_phone'    => $customer_phone,
                    'shipping_address'  => $customer_address,
                    'status'            => 1,
                    'created_by'        => $userID,
                ]);
            }

            $customer = Customer::create([
                'company_id'        => 0,
                'customer_name'     => $customer_name,
                'customer_email'    => $customer_email,
                'customer_phone'    => $customer_phone,
                'customer_address'  => $customer_address,
                'status'            => 1,
                'created_by'        => $userID,
            ]);

            $order = Order::create([
                'orderId'                   => Helper::autoOrderIdGenereate(),
                'shipping_id'               => $shipping->id,
                'user_id'                   => $userID,
                'customer_id'               => $customer->id,
                'ship_to_gift'              => $shippingStatus,
                'shipping_agent_id'         => 0,
                'invoice_last_digit'        => Helper::autoInvoiceLastDigit(),
                'invoice_no_old'            => Helper::autoOrderInvoiceNoGenereate(),
                'invoice_no'                => Helper::autoOrderNewInvoiceNoGenereate(),
                'invoice_date'              => $invoice_date,
                'delivery_date'             => $delivery_date,
                'payment_type'              => 1,
                'name'                      => $customer_name,
                'phone'                     => $customer_phone,
                'email'                     => $customer_email,
                'address'                   => $customer_address,
                'notes'                     => $notes,
                'total_amount'              => $total_amount,
                'discount_amount'           => 0,
                'shipping_charge_id'        => $shipping_charge_id,
                'shipping_charge'           => $shipping_charge,
                'net_receiveable_amount'    => $total_amount,
                'collect_amount'            => 0,
                'return_amount'             => 0,
                'total_vat'                 => 0,
                'due_amount'                => $total_amount,
                'transaction_id'            => $resultdatax->trxID,
                'bkash_transaction'         => $resultdatax->trxID,
                'bkash_payment_id'          => $resultdatax->paymentID,
                'currency'                  => 'BDT',
                'status'                    => 'Paid',
                'created_by'                => $userID,
            ]);

            if($order) {
                $discount_price = 0;
                $total_vat      = 0;

                foreach ($carts as $cart) {

                    $discount_price += $cart->attributes['discount_price'];
                    $total_vat      += $cart->attributes['vat'];

                    $company_id = Product::where('id', $cart->id)->first()->company_id;
                    $order_details = OrderDetail::create([
                        'company_id'        => $company_id,
                        'order_id'          => $order->id,
                        'product_id'        => $cart->id,
                        'price'             => $cart->price,
                        'quantity'          => $cart->quantity,
                        'total_amount'      => $cart->price * $cart->quantity,
                        'transaction_id'    => $order->transaction_id,
                        'status'            => 'Pending',
                        'created_by'        => $userID
                    ]);

                    if(!empty($cart->attributes['color']) || !empty($cart->attributes['size']) || !empty($cart->attributes['weight'])){
                        $order_attributes = OrderAttribute::create([
                            'company_id'         => $company_id,
                            'order_id'           => $order->id,
                            'product_id'         => $cart->id,
                            'color'              => $cart->attributes['color'],
                            'size'               => $cart->attributes['size'],
                            'weight'             => $cart->attributes['weight'],
                            'status'             => 1,
                        ]);
                    }

                    $variationId = $cart->attributes['variation_id'];
                    if(!empty($variationId)){
                        $prev_stock = ProductVariation::where('status', 1)->where('id', $variationId)->first();
                        if(isset($prev_stock)){
                            $new_stock = ($prev_stock->attribute_stock) - ($cart->quantity);
                            $prev_stock->update(['attribute_stock' => $new_stock]);
                        }

                        $stock_ledger = StockLedger::create([
                            'company_id'  => $company_id,
                            'invoice_no'  => $invoice_no,
                            'invoice_date'=> $invoice_date,
                            'product_id'  => $cart->id,
                            'variation_id'=> $variationId,
                            'stock_in'    => 0,
                            'stock_out'   => $cart->quantity,
                            'ledger_type' => 2,
                            'status'      => 1,
                            'created_by'  => $userID
                        ]);
                    }else{
                        $stock_ledger = StockLedger::create([
                            'company_id'  => $company_id,
                            'invoice_no'  => $invoice_no,
                            'invoice_date'=> $invoice_date,
                            'product_id'  => $cart->id,
                            'variation_id'=> NULL,
                            'stock_in'    => 0,
                            'stock_out'   => $cart->quantity,
                            'ledger_type' => 2,
                            'status'      => 1,
                            'created_by'  => $userID
                        ]);
                    }

                }

                //Order Update
                // $discount_price = (!empty($discount_price))?$discount_price:0;
                $coupon_amount = (!empty($coupon_amount))?$coupon_amount:0;

                $net_receiveable_amount = ($order->net_receiveable_amount) - $coupon_amount;
                if(isset($coupon_code)) {
                    $coupon = Coupon::where('code', $coupon_code)->where('status', 1)->first();
                    if($coupon->coupon_type != 'permanent') {
                        $coupon->update([
                            'coupon_spent' => 1,
                            'spent_at' => Carbon::now()
                        ]);
                    }
                }

                $order_update = Order::where('id', $order->id)->update([
                    'coupon_code'               => $coupon_code,
                    'coupon_amount'             => $coupon_amount,
                    'discount_type'             => (!empty($coupon_amount))?2:0,
                    'discount_amount'           => $coupon_amount,
                    'net_receiveable_amount'    => $net_receiveable_amount,
                    'due_amount'                => $net_receiveable_amount,
                    'total_amount'              => $net_receiveable_amount
                ]);


                if(!empty($total_vat)){
                    $orderInfo = Order::find($order->id);
                    $orderUpdate = $orderInfo->update([
                        'net_receiveable_amount'    => $orderInfo->net_receiveable_amount + $total_vat,
                        'due_amount'                => $orderInfo->net_receiveable_amount + $total_vat,
                        'total_vat'                 => $total_vat,
                        'total_amount'              => $orderInfo->net_receiveable_amount + $total_vat
                    ]);
                }


                //Send Mail Start---------------------------------------
                $data['order'] = $orderInfo = Order::find($order->id);
                //To Admin----------------------------------------------------------------------------------------------------
                $admin_data['info'] = [
                    'name'              => $orderInfo->name,
                    'email'             => $orderInfo->email,
                    'phone'             => $orderInfo->phone,
                    'orderId'           => $orderInfo->orderId,
                    'total'             => $orderInfo->total_amount,
                    'total_vat'         => $orderInfo->total_vat,
                    'shipping_charge'   => $orderInfo->shipping_charge,
                    'card_price'        => $orderInfo->card_price,
                    'packaging_price'   => $orderInfo->packaging_price,
                    'discount_amount'   => $orderInfo->discount_amount,
                    'net_receivable'    => $orderInfo->net_receiveable_amount,
                ];
                $admin_data['orderdetails'] = OrderDetail::join('products','products.id','=','order_details.product_id')
                    ->select('order_details.*','products.product_name','products.product_sku')
                    ->where('order_details.order_id', $order->id)
                    ->get();

                $admin_email = ['sagorace.017@gmail.com','info@stygen.gift'];
                \Mail::send(['html'=>'email.order_admin'], $admin_data, function($message) use ($admin_email) {
                    $message->to($admin_email)->subject('New Order Confirmation');
                    $message->from('order@stygen.gift','STYGEN');
                });
                //To Admin----------------------------------------------------------------------------------------------------


                //TO User-----------------------------------------------------------------------------------------------------
                $userDetails    = User::where('id', $userID)->first();
                $orderID        = $order->id;
                $customer_email_send = $order->email;

                if(!blank($customer_email_send) && $customer_email_send != 'null' && $customer_email_send != NULL){
                    $user_email = $customer_email_send;
                    $data['order_details'] = $order_details = OrderDetail::join('products','products.id','=','order_details.product_id')
                        ->select('order_details.*','products.product_name','products.product_sku')
                        ->where('order_details.order_id', $order->id)
                        ->get();
                    $data['user'] = $user = User::where('id', $userID)->first();


                    \Mail::send(['html'=>'email.order'], $data, function($message) use ($user_email, $orderID,
                        $orderInfo, $order_details, $user) {
                        $message->to($user_email)->subject('New Order Confirmation');
                        $message->from('order@stygen.gift','STYGEN');
                        // PDF Send

                        // $allData['order'] = $orderInfo;
                        // $allData['order_details'] = $order_details;
                        // $allData['user'] = $user;
                        // $userInfo = $user;
                        // $allData['customerInfo'] = Customer::where('id', $orderInfo->customer_id)->first();
                        // $allData['shippingInfo'] = Shipping::where('id', $orderInfo->shipping_id)->first();
                        // $pdf = PDF::loadView('pdf.order', $allData);
                        // $message->attachData($pdf->output(), 'Order.pdf');
                    });
                }
                //TO User-----------------------------------------------------------------------------------------------------
                //Send Mail End-----------------------------------------
                \Cart::clear();
            }


            $resultdatax = json_encode($resultdatax);
            echo $resultdatax;
        }else {
            $resultdatax = json_encode($resultdatax);
            echo $resultdatax;
        }

    }
    public function refund(Request $request)
    {
        $paymentID = $request->order['bkash_payment_id'];
        $transaction_id = $request->order['bkash_transaction'];
        $amount = $request->order['total_amount'] - $request->order['shipping_charge'];
        $sku = 'sku-123';
        $reason = 'Refund';
        // dd($paymentID, $transaction_id);
        session_start();
        $token = $this->bkash_Get_Token();
        // $strJsonFileContents = file_get_contents("config.json");
        // $array = json_decode($strJsonFileContents, true);
        $array = $this->_get_config_file();

        $proxy = $array["proxy"];
            $createpaybody = array('paymentID' => $paymentID, 'trxID' => $transaction_id, 'amount' => $amount, 'sku' => $sku, 'reason' => $reason);
            $url = curl_init('https://checkout.pay.bka.sh/v1.2.0-beta/checkout/payment/refund');

            $createpaybodyx = json_encode($createpaybody);

            $header=array(
                'Content-Type:application/json',
                'authorization:'.$token,
                'x-app-key:'.$array["app_key"]
            );

            curl_setopt($url,CURLOPT_HTTPHEADER, $header);
            curl_setopt($url,CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($url,CURLOPT_RETURNTRANSFER, true);
            curl_setopt($url,CURLOPT_POSTFIELDS, $createpaybodyx);
            curl_setopt($url,CURLOPT_FOLLOWLOCATION, 1);
            //curl_setopt($url, CURLOPT_PROXY, $proxy);

            $resultdata = curl_exec($url);
            curl_close($url);
            // echo $resultdata;

            return response()->json($resultdata);
    }

    public function refund_status(Request $request)
    {
        $paymentID = $request->order['bkash_payment_id'];
        $transaction_id = $request->order['bkash_transaction'];

        // dd($paymentID, $transaction_id);
        session_start();
        $token = $this->bkash_Get_Token();
        // $strJsonFileContents = file_get_contents("config.json");
        // $array = json_decode($strJsonFileContents, true);
        $array = $this->_get_config_file();

        $proxy = $array["proxy"];
            $createpaybody = array('paymentID' => $paymentID, 'trxID' => $transaction_id);
            $url = curl_init('https://checkout.pay.bka.sh/v1.2.0-beta/checkout/payment/refund');

            $createpaybodyx = json_encode($createpaybody);

            $header=array(
                'Content-Type:application/json',
                'authorization:'.$token,
                'x-app-key:'.$array["app_key"]
            );

            curl_setopt($url,CURLOPT_HTTPHEADER, $header);
            curl_setopt($url,CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($url,CURLOPT_RETURNTRANSFER, true);
            curl_setopt($url,CURLOPT_POSTFIELDS, $createpaybodyx);
            curl_setopt($url,CURLOPT_FOLLOWLOCATION, 1);
            //curl_setopt($url, CURLOPT_PROXY, $proxy);

            $resultdata = curl_exec($url);
            curl_close($url);
            // echo $resultdata;

            return response()->json($resultdata);
    }
    public function thank_you()
    {
        return redirect('/thank-you');
    }
    public function failed(Request $request)
    {

        return view('frontend.fail')->with([
            'errorMessage' => $request->session()->get('errorMessage')
        ]);
    }
}
