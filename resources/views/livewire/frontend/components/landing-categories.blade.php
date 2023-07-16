<div>
    {{-- Nothing in the world is as soft and yielding as water. --}}
    <div class="our-product-area shop-by-category-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!--Section Title Start-->
                    <div class="row text-center">
                        <div class="col-8 ml-auto mr-auto">
                            <h3 class="landing-category-title-tag">GIFT BY CATEGORIES</h3>
                        </div>
                    </div>
                    <!--Section Title End-->
                </div>
            </div>

            <!--Category Section Start-->
            <div class="shop-by-department mt-4">
                <div class="row">
                    @foreach ($landing_categories as $category)
                        
                    <div class="col-xl-3 col-lg-3 col-md-3">
                        <!--Single Product Start-->
                        <div class="single-product mb-30 category-section-main">
                            <div class="product-img">
                                {{-- <router-link :to="{name: 'subCategoryProduct', params: {catSlug: category.cat_slug}}"> --}}
                                    <img class="first-img" src="{{ asset('assets/uploads/category') }}/{{$category->category_image}}" :alt="{{$category->category_name}}" lazy="loading">
                                {{-- </router-link> --}}
                            </div>
                            <div class="product-content category-title-section">
                                <h4 class="text-white"><router-link >{{ $category->category_name }}</router-link></h4>
                            </div>
                        </div>
                        <!--Single Product End-->
                    </div>
                    @endforeach
                </div>
            </div>
            <!--Category Section End-->

        </div>
    </div>
</div>
