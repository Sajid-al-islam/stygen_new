<div>
    <div class="slider-area transparent-bg">
        <div class="container">
            
            <div class="row">
                <div class="col-md-12 col-lg-12 col-12">
                    <div class="hero-slider hero-slider-2 owl-carousel">
                        <!--Single Slider Start-->
                        @foreach ($sliders as $item)
                            <div class="single-slider" style="background-image: url({{ asset('assets/uploads/slider') }}/{{ $item->image }})">
                                <div class="hero-slider-content">
                                    
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
