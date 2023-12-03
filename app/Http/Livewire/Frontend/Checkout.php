<?php

namespace App\Http\Livewire\Frontend;

use App\Http\Controllers\CartManagerController;
use App\Models\Card;
use App\Models\Packaging;
use App\Models\ShippingCharge;
use Livewire\Component;

class Checkout extends Component
{
    public $carts;
    public $cards;
    public $cart_amount;
    public $cart_total;
    private $cart_handler;
    public $shippings;
    public $packagings;

    public $card_id = null;
    public $card_price = 0;
    public $packaging_id = null;
    public $packaging_price = 0;
    public $shipping_id = null;
    public $shipping_price = 0;
    public $cart_product_ids = [];

    public $total_amount = null;

    public function __construct() {
        $this->cart_handler = new CartManagerController();
        $this->shipping_price = 0;
    }
    public function render()
    {
        $this->carts = $this->cart_handler->get();
        $this->cart_product_ids = $this->cart_handler->get_product_ids();
        $this->CountCart();

        if($this->packaging_id != null && $this->packaging_id != 0) {
            $this->packaging_price = Packaging::where('id', $this->packaging_id)->first()->price;
        }

        if($this->card_id != null && $this->card_id != 0) {
            // dd($this->card_id);
            $this->card_price = Card::where('id', $this->card_id)->first()->price;
        }

        if($this->shipping_id != null && $this->shipping_id != 0) {
            $this->shipping_price = ShippingCharge::where('id', $this->shipping_id)->first()->shipping_charge;
        }

        $this->cart_total = $this->cart_handler->cart_total();

        $this->total_amount = $this->cart_total + $this->card_price + $this->packaging_price + $this->shipping_price;


        $this->cards = Card::where('status', 1)->get();
        $this->packagings = Packaging::where('status', 1)->get();

        $product_id = [];
        foreach($this->carts as $cart){
            // dd($cart);
            array_push($product_id, $cart['product']['id'], $cart['product']['price']);
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


        return view('livewire.frontend.checkout')->extends('layouts.app', [
            'meta' => [
                "title" =>  "Checkout | stygen",
                "image" => "",
                "og_image" => "",
                "twitter_image" => "",
                "description" => "",
                "price" => "" ,
                "keywords" => ""
            ],
        ]);
    }
    public function CountCart()
    {
        $this->cart_amount = $this->cart_handler->cart_count();
    }
}
