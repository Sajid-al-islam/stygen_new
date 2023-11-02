<?php

namespace App\Http\Livewire\Frontend;

use App\Models\Product;
use Livewire\Component;
use Livewire\WithPagination;

class AllProduct extends Component
{
    use WithPagination;
    protected $paginationTheme = 'bootstrap';
    public function render()
    {
        $products = Product::orderBy('id', 'desc')->with(['brand'])->paginate(30)->onEachSide(3);

        return view('livewire.frontend.all-product', [
            'products' => $products,
        ])->extends('layouts.app', [
            'meta' => [
                "title" =>  "Best online Gift Shop in Bangladesh | Stygen",
                "description" => "Order and send gifts online to your friends & family for any occasion. Gifts delivery in Bangladesh. Flower, cake, perfume, chocolate, books home delivery.",
                "image" => "{{ asset('assets/frontend/img/logo/stygen_image.jpg') }}",
                "og_image" => "asset('assets/frontend/img/logo/stygen_image.jpg')",
                "twitter_image" => "asset('assets/frontend/img/logo/stygen_image.jpg')",
                "price" => "" ,
                "keywords" => ""
            ],
        ]);
    }
}
