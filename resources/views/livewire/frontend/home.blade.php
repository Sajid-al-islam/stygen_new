<div>
    {{-- Knowing others is intelligence; knowing yourself is true wisdom. --}}
    {{-- @dd($landing_categories) --}}
    @livewire('frontend.components.slider')
    @livewire('frontend.components.landing-categories', ['landing_categories' => $landing_categories])
    @livewire('frontend.components.landing-occassion')
    @livewire('frontend.components.landing-footer', ['landing_categories' => $landing_categories])
</div>
