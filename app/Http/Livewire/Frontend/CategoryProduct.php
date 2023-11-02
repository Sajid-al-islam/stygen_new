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

    public function mount($slug)
    {
        $this->category = Category::where('cat_slug',$slug)->first();
    }

    public function render()
    {
        $productIds = ProductCategory::where('category_id', $this->category->id)->get()->pluck('product_id');
        $meta_image = $this->category->category_image != null ? asset('assets/uploads/category') . '/' . $this->category->category_image : null;
        return view('livewire.frontend.category-product', [
            'products' => Product::where('status', 1)->whereIn('id', $productIds)->orderBy('product_view','desc')->with('brand','product_categories','product_images','product_variations')->paginate(30),
        ])->extends('layouts.app', [
            'meta' => [
                "title" =>  $this->category->meta_title != null ? $this->category->meta_title :  $this->category->category_name . " products",
                "description" => $this->category->meta_description != null ? $this->category->meta_description : null,
                "image" => $meta_image,
                "og_image" => "",
                "twitter_image" => "",
                "price" => "" ,
                "keywords" => ""
            ],
        ]);
    }
}
