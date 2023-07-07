<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use App\Models\Coupon;
use App\Models\Customer;
use App\Models\Order;
use App\Models\OrderAttribute;
use App\Models\OrderDetail;
use App\Models\Product;
use App\Models\ProductVariation;
use App\Models\Seller;
use App\Models\Shipping;
use App\Models\StockLedger;
use App\Models\User;
use Carbon\Carbon;
use DateTime;
use Exception;
use Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Mail;
use PDF;
Use MailchimpMarketing;

class CashOnDeliveryController extends Controller
{
    public function cashOnDelivery(Request $request) {
        $coupon_code            = $request->coupon_code;
        $coupon_amount          = $request->coupon_amount;
        $shippingStatus         = $request->shippingDisplay == 'false' ? 0: 1;
        $paymentType            = $request->cashOnDelivery;
        $createAccountStatus    = $request->createAccount;
        $carts                  = \Cart::getContent();
        $cart_count             = count($carts);
        $current_date           = date('d/m/Y');
        $invoice_date           = DateTime::createFromFormat('d/m/Y', $current_date)->format('Y-m-d');
        $cart_total_amount      = \Cart::getTotal();
        $card_id                = (!empty($request->card_id)?$request->card_id:NULL);
        $card_price             = (!empty($request->card_price)?$request->card_price:0);
        $packaging_id           = (!empty($request->packaging_id)?$request->packaging_id:NULL);
        $packaging_price        = (!empty($request->packaging_price)?$request->packaging_price:0);
        $personal_notes         = (!empty($request->personal_notes)?$request->personal_notes:NULL);
        $shipping_charge        = floatval($request->shipping_charge);
        if($cart_total_amount < 0) {
            $total_amount = 0;
        }
        else {
            $total_amount       = $cart_total_amount + $shipping_charge + $card_price + $packaging_price;
        }
        $current_date           = date('d/m/Y');
        $invoice_date           = DateTime::createFromFormat('d/m/Y', $current_date)->format('Y-m-d');

        if ($shippingStatus == 1) {
            $request->validate([
                'name'              => 'required',
                'address'           => 'required',
                'phone'             => 'required',
                'shipping_name'     => 'required',
                'shipping_address'  => 'required',
                'shipping_phone'    => 'required',
                'shipping_charge_id'=> 'required | not_in:0'
            ]);
        }
        else {
            $request->validate([
                'name'              => 'required',
                'address'           => 'required',
                'phone'             => 'required',
                'shipping_charge_id'=> 'required | not_in:0'
            ]);
        }


        if(!empty($request->user_id)){
            $userID             = Auth::user()->id;
        }else{
            $username = explode(" ", $request->name);
            $ex_email = User::where('email', $request->email)->first();
            $ex_phone = User::where('phone', $request->phone)->first();
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
                    'email'         => $request->email,
                    'phone'         => $request->phone,
                    'address'       => $request->address,
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

        $model                  = DB::table('stock_ledgers');
        $ledgerType             = 4;
        $invoice_no             = Helper::autoInvoiceNoGenereateBasicUser($model, $ledgerType, $userID);

        if($shippingStatus == 1) {
            $shipping = Shipping::create([
                'company_id'        => 0,
                'shipping_name'     => $request->shipping_name,
                'shipping_email'    => $request->shipping_email,
                'shipping_phone'    => $request->shipping_phone,
                'shipping_address'  => $request->shipping_address,
                'status'            => 1,
                'created_by'        => $userID,
            ]);
        } else {
            $shipping = Shipping::create([
                'company_id'        => 0,
                'shipping_name'     => $request->name,
                'shipping_email'    => $request->email,
                'shipping_phone'    => $request->phone,
                'shipping_address'  => $request->address,
                'status'            => 1,
                'created_by'        => $userID,
            ]);
        }

        $customer = Customer::create([
            'company_id'        => 0,
            'customer_name'     => $request->name,
            'customer_email'    => $request->email,
            'customer_phone'    => $request->phone,
            'customer_address'  => $request->address,
            'status'            => 1,
            'created_by'        => $userID,
        ]);

        $order = Order::create([
            'orderId'                   => Helper::autoOrderIdGenereate(),
            'shipping_id'               => $shipping->id,
            'user_id'                   => $userID,
            'customer_id'               => $customer->id,
            'ship_to_gift'              => $request->shippingDisplay == 'true'?1:0,
            'shipping_agent_id'         => 0,
            'invoice_last_digit'        => Helper::autoInvoiceLastDigit(),
            'invoice_no_old'            => Helper::autoOrderInvoiceNoGenereate(),
            'invoice_no'                => Helper::autoOrderNewInvoiceNoGenereate(),
            'invoice_date'              => $invoice_date,
            'delivery_date'             => $request->delivery_date,
            'payment_type'              => 1,
            'name'                      => $request->name,
            'phone'                     => $request->phone,
            'email'                     => $request->email,
            'address'                   => $request->address,
            'notes'                     => $request->notes,
            'card_id'                   => $card_id,
            'card_price'                => $card_price,
            'packaging_id'              => $packaging_id,
            'packaging_price'           => $packaging_price,
            'personal_notes'            => $personal_notes,
            'total_amount'              => $total_amount,
            'discount_amount'           => 0,
            'shipping_charge_id'        => $request->shipping_charge_id,
            'shipping_charge'           => $shipping_charge,
            'net_receiveable_amount'    => $total_amount,
            'collect_amount'            => 0,
            'return_amount'             => 0,
            'total_vat'                 => 0,
            'due_amount'                => $total_amount,
            'transaction_id'            => uniqid(),
            'currency'                  => 'BDT',
            'status'                    => 'Pending',
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

            // mailchimp user entry start

            if(isset($request->email) && $request->email != 'null') {

                $client = new \MailchimpMarketing\ApiClient();

                $client->setConfig([
                    'apiKey' => config('services.mailchimp.key'),
                    'server' => 'us20',
                ]);

                $order_email = $request->email;

                $customer = $client->ecommerce->addStoreCustomer("stygen", [
                    "id" => "stg_$customer->id",
                    "email_address" => "$order_email",
                    "opt_in_status" => true,
                    "status" => "customer",
                    "company" => "Stygen",
                    "address" => [
                        "address1"=> "$request->address",
                        "country"=> "Bangladesh",
                        "country_code"=> "BD"
                    ],
                    "created_at" => "$order->created_at",
                    "updated_at" => "$order->updated_at"
                ]);

            }
            // // mailchimp user entry end

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
                'shipping_charge'   => $shipping_charge,
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

            //To Seller----------------------------------------------------------------------------------------------------
            // $companyIds = [];
            // $orderDetails    = OrderDetail::where('order_id', $order->id)->select('company_id')->get();
            // foreach($orderDetails as $orderDetail){
            //     array_push($companyIds, $orderDetail->company_id);
            // }
            // $seller_emails = Seller::whereIn('company_id', $companyIds)->get();
            // if($seller_emails->count() > 0){
            //     foreach($seller_emails as $sellerInfo){
            //         $seller_data['info'] = [
            //             'name'              => $orderInfo->name,
            //             'email'             => $orderInfo->email,
            //             'phone'             => $orderInfo->phone,
            //             'orderId'           => $orderInfo->orderId,
            //             'seller_name'       => $sellerInfo->name,
            //         ];
            //         $seller_data['orderdetails'] = OrderDetail::join('products','products.id','=','order_details.product_id')
            //             ->select('order_details.*','products.product_name','products.product_sku')
            //             ->where('order_details.order_id', $order->id)
            //             ->where('order_details.company_id', $sellerInfo->company_id)
            //             ->get();

            //         $seller_email = $sellerInfo->email;

            //         if(!blank($seller_email)){
            //             \Mail::send(['html'=>'email.order_seller'], $seller_data, function($message) use ($seller_email) {
            //                 $message->to($seller_email)->subject('New Order Confirmation');
            //                 $message->from('order@stygen.gift','STYGEN');
            //             });
            //         }
            //     }
            // }
            //To Seller----------------------------------------------------------------------------------------------------

            //TO User-----------------------------------------------------------------------------------------------------
            $userDetails    = User::where('id', $userID)->first();
            $orderID        = $order->id;
            $customer_email = $order->email;

            if(!blank($customer_email) && $customer_email != 'null' && $customer_email != NULL){
                $user_email = $customer_email;
                $data['order_details'] = $order_details = OrderDetail::join('products','products.id','=','order_details.product_id')
                    ->select('order_details.*','products.product_name','products.product_sku')
                    ->where('order_details.order_id', $order->id)
                    ->get();
                $data['user'] = $user = User::where('id', $userID)->first();

                // \Mail::to($user_email)->later(now()->addMinutes(1), new \App\Mail\OrderMail($data, function($message) use ($user_email, $orderID,
                // $orderInfo, $order_details, $user) {
                //     $message->to($user_email)->subject('New Order Confirmation');
                //     $message->from('order@stygen.gift','STYGEN');
                //     // PDF Send

                //     // $allData['order'] = $orderInfo;
                //     // $allData['order_details'] = $order_details;
                //     // $allData['user'] = $user;
                //     // $userInfo = $user;
                //     // $allData['customerInfo'] = Customer::where('id', $orderInfo->customer_id)->first();
                //     // $allData['shippingInfo'] = Shipping::where('id', $orderInfo->shipping_id)->first();
                //     // $pdf = PDF::loadView('pdf.order', $allData);
                //     // $message->attachData($pdf->output(), 'Order.pdf');
                // }));

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

        }

        \Cart::clear();
        // Auth::loginUsingId($userID);
        $orderID = $order->id;
        return response()->json($orderID);
    }

    public function getPurchaseRecord(Request $request){
        $order_id = $request->order_id;
        $orderInfo = Order::where('id', $order_id)->select('total_amount')->first();
        if(isset($orderInfo)){
            $total_amount = $orderInfo->total_amount;
        }else{
            $total_amount = 0;
        }
        $product_ids = OrderDetail::where('order_id', $order_id)->get()->pluck('product_id');
        $sku = [];
        $productInfos = [];

        foreach($product_ids as $product_id){
            $productInfo = Product::where('id', $product_id)->select('id','product_sku','product_name','regular_price')->first();
            $product_sku = $productInfo->id;
            array_push($sku, $product_sku);
            array_push($productInfos, $productInfo);
        }

        return response()->json([
            'total_amount' => $total_amount,
            'skus'         => $sku,
            'productInfos' => $productInfos
        ], 200);
    }
}
