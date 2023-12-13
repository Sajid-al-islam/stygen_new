<?php

namespace App\Http\Livewire\Frontend;

use App\Models\ProductOccasion;
use App\Models\Product;
use App\Models\Occasion;
use Livewire\Component;
use Livewire\WithPagination;

class OcassionProduct extends Component
{
    use WithPagination;
    public $category;
    protected $paginationTheme = 'bootstrap';

    public function mount($slug)
    {
        $this->category = Occasion::where('occasion_slug',$slug)->first();
    }

    public function render()
    {
        $productIds = ProductOccasion::where('occasion_id', $this->category->id)->get()->pluck('product_id');
        $meta_image = $this->category->category_image != null ? asset('assets/uploads/category') . '/' . $this->category->category_image : null;

        $meta_title = "Buy Best gift" . $this->category->category_name . " products in BD | Home delivery";
        if($this->category->meta_title != null && $this->category->meta_title !== "null") {
            $meta_title = $this->category->meta_title;
        }

        $meta_description = "Buy Best gift" . $this->category->category_name . " products in BD | Home delivery";
        if($this->category->meta_description != null && $this->category->meta_description != "null") {
            $meta_description = $this->category->meta_description;
        }

        return view('livewire.frontend.ocassion-product', [
            'products' => Product::where('status', 1)->whereIn('id', $productIds)->orderBy('product_view','desc')->with('brand','product_categories','product_images','product_variations')
            ->withSum(['purchase_stock' => function ($q) {
                $q->where('type', 'purchase');
            }], 'qty')
            ->withSum(['sell_stock' => function ($q) {
                $q->where('type', 'sell');
            }], 'qty')
            ->paginate(32),
        ])->extends('layouts.app', [
            'meta' => [
                "title" =>  $meta_title,
                "description" => $meta_description,
                "image" => $meta_image,
                "og_image" => "",
                "twitter_image" => "",
                "price" => "" ,
                "keywords" => ""
            ],
        ]);
    }
}
