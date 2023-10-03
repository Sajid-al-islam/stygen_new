<?php

namespace App\Http\Livewire\Frontend;

use App\Models\Category;
use Livewire\Component;
use Illuminate\Support\Facades\View;
class Home extends Component
{
    public $landing_categories;
    public function render()
    {
        
        $this->landing_categories = Category::where('status', 1)->where('parent_id', 0)->where('approve_category', 1)->take(8)->get();
        View::share('landing_categories', $this->landing_categories);
        return view('livewire.frontend.home')
        ->extends('layouts.app', [
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
