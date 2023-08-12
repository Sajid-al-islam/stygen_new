<?php

namespace App\Http\Livewire\Frontend;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductCategory;
use Livewire\Component;
use Livewire\WithPagination;

class CategoryProduct extends Component
{
    use WithPagination;
    public $category;
    protected $paginationTheme = 'bootstrap';

    public function mount($name)
    {
        $this->category = Category::where('category_name',$name)->first();
    }

    public function render()
    {
        $productIds = ProductCategory::where('category_id', $this->category->id)->get()->pluck('product_id');
        return view('livewire.frontend.category-product', [
            'products' => Product::where('status', 1)->whereIn('id', $productIds)->orderBy('product_view','desc')->with('brand','product_categories','product_images','product_variations')->paginate(30),
        ])->extends('layouts.app', [
            'meta' => [
                "title" =>  $this->category->category_name . "products",
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
