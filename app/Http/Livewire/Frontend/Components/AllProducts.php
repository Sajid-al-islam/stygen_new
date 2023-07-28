<?php

namespace App\Http\Livewire\Frontend\Components;

use Livewire\Component;

class AllProducts extends Component
{
    public $products;
    public function render()
    {
        $this->products = Product::orderBy('id','desc')->with('brand')->paginate(10);

        return view('livewire.frontend.components.all-products');
    }
}
