<?php

namespace App\Http\Livewire\Frontend;

use App\Http\Controllers\CartManagerController;
use App\Models\ShippingCharge;
use Livewire\Component;

class Checkout extends Component
{
    public $carts;
    public $cart_amount;
    public $cart_total;
    private $cart_handler;
    public $shippings;

    public function __construct() {
        $this->cart_handler = new CartManagerController();
    }
    public function render()
    {
        $this->carts = $this->cart_handler->get();
        $this->CountCart();
        $this->cart_total = $this->cart_handler->cart_total();

        $product_id = [];
        foreach($this->carts as $cart){
            array_push($product_id, $cart->id, $cart->price);
        }
        $shippings = ShippingCharge::join('product_shipping_charges','product_shipping_charges.shipping_charge_id','=','shipping_charges.id')
                ->whereIn('product_shipping_charges.product_id', $product_id)
                ->groupBy('shipping_charges.id')
                ->select('shipping_charges.*')
                ->get();
        if($shippings->count() > 0){
            $this->shippings = $shippings;
        }else{
            $this->shippings = ShippingCharge::where('status', 1)->get();
        }
        

        return view('livewire.frontend.checkout')->extends('layouts.app');
    }
}
