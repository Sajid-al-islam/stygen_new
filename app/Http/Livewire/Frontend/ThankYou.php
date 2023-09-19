<?php

namespace App\Http\Livewire\Frontend;

use Livewire\Component;

class ThankYou extends Component
{
    public function render()
    {
        return view('livewire.frontend.thank-you')->extends('layouts.app');
    }
}
