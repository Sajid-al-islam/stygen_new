<?php

namespace App\Http\Livewire\Frontend;

use App\Models\Product;
use Livewire\Component;
use Livewire\WithPagination;
class SearchProduct extends Component
{
    use WithPagination;
    protected $paginationTheme = 'bootstrap';
    protected $products=[];
    public function mount($search)
    {

        $query = Product::where('status', 1);
        if(strlen($search) > 0) {
            $query->where(function ($q) use ($search) {
                $q->Where('product_name', 'LIKE', '%' . $search . '%')
                ->orWhere('product_sku', 'LIKE', '%' . $search . '%');
            })->select('id', 'regular_price', 'pro_slug' ,'sales_price','product_name', 'featured_image');
            $this->products = $query->paginate(20);
        }else {
            $this->products = null;
        }
    }
    public function render()
    {
        return view('livewire.frontend.search-product', [
            'products' => $this->products,
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
