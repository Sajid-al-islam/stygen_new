<?php

namespace App\Http\Livewire\Frontend\Components;

use App\Http\Controllers\CartManagerController;
use App\Models\Category;
use Livewire\Component;

class Header extends Component
{
    public $categories;
    public $cart_count=0;
    public $carts=null;
    public function render()
    {
        $cart_manager = new CartManagerController();
        $this->cart_count = $cart_manager->cart_count();
        $this->carts = $cart_manager->get();
        $this->categories = Category::where('status', 1)->where('parent_id', 0)->orderBy('id','asc')->with('subcategory')->get();
        return view('livewire.frontend.components.header');
    }
}
