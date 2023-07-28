<div>
    {{-- The whole world belongs to you. --}}
    <div class="our-product-area gifts-by-occasion-area">
        <div class="container">
            <div class="row">
                <div class="col-8 ms-auto me-auto">
                    <div class="row text-center">
                        <h3 class="landing-gifts-title-tag">GIFTS BY OCCASION</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-xl-8 col-12 col-sm-12 ms-auto me-auto">
                    <div class="row justify-content-around">
                        @foreach ($occasions as $occasion)
                            
                            <div class="col-sm-6 col-md-6 col-6">
                                <div class="gifts-main-section mt-3">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="product-img">
                                                <a>
                                                    <img class="first-img gift-img" src="{{asset('/assets/uploads/occasion/')}}/{{$occasion->occasion_image}}" lazy="loading">
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col-md-8">
                                            <h4 class="gifts-title"><router-link>{{ $occasion->occasion_name }}</router-link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
