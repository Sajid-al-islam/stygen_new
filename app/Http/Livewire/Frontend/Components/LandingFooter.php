<?php

namespace App\Http\Livewire\Frontend\Components;

use Livewire\Component;

class LandingFooter extends Component
{
    public $landing_categories;
    public function render()
    {
        return view('livewire.frontend.components.landing-footer');
    }
}
