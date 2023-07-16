<?php

namespace App\Http\Livewire\Frontend\Components;

use App\Models\Category;
use Livewire\Component;

class Header extends Component
{
    public $categories;
    public function render()
    {
        $this->categories = Category::where('status', 1)->where('parent_id', 0)->orderBy('id','asc')->with('subcategory')->get();
        return view('livewire.frontend.components.header');
    }
}
