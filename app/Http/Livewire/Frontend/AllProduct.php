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
                "title" =>  "",
                "image" => "",
                "og_image" => "",
                "twitter_image" => "",
                "description" => "",
                "price" => "" ,
                "keywords" => ""
            ],
        ]);
    }
}
