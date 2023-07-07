<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Seller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PDF;

class OrderController extends Controller
{
    public function orders(){
        $user_id = Auth::user()->id;
        $user_orders = Order::join('order_details','order_details.order_id','=','orders.id')
        ->groupBy('order_details.order_id')
        ->select('orders.*','order_details.status as order_status')
        ->where('orders.user_id', $user_id)->paginate(10);
        return response()->json([
            'user_orders' => $user_orders
        ], 200);
    }

    public function invoiceDownload($id){
        $companyId = OrderDetail::where('order_id', $id)->first()->company_id;
        $data['order'] = Order::with('customer','order_attributes', 'shipping')->find($id);
        $data['order_details'] = OrderDetail::where('order_id', $id)->with('product')->get();
        $data['companyInfo'] = Seller::where('company_id', $companyId)->first();
        $pdf = PDF::loadView('frontend.invoice_pdf', $data);
        return $pdf->output();
    }
}
