<div>
    {{-- Care about people's approval and you will be their prisoner. --}}
    <!--Header Area Start-->
    <header>
        <style>
            .accordion-button.has-not-subcategories::after {
                display: none
            }

            .accordion-body {
                padding: 0;
                /* Remove default padding */
            }

            .category-list {
                box-sizing: border-box;
                padding: 10px 20px;
                transition: background-color 0.3s;
                /* Add transition for smooth hover effect */
            }

            .category-list:first-child {
                border-top: 0.5px solid #0000004f;
                border-bottom: 0.5px solid #0000004f;
            }

            .category-list:not(:first-child) {
                border-bottom: 0.5px solid #0000004f;
            }

            .category-list:hover {
                background-color: #e3e3ea;
                /* Change background color on hover */
            }
        </style>
        <div id="landing_header">
            <header>
                <!--Header Middle Area Start-->
                <div class="header-middle-area header-style-2 header-sticky">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-8 col-md-8 col-sm-12">
                                <!--Category Menu Start-->

                                <div class="category-menu category-menu-hidden">
                                    <div class="row">
                                        <div class="col-md-1 browse-category-btn d-none d-md-block">
                                            {{-- <div class="category-heading">
                                                <h2 class="categories-toggle category-menu-header"></h2>
                                            </div> --}}
                                            <button class="btn" type="button" data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                <i class="fas fa-bars fa-lg"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-2 d-none d-md-block">
                                            <!--Logo Start-->
                                            <div class="logo logo-section">
                                                <a href="/">
                                                    <img src="/assets/frontend/img/logo/logo.png" width="100px" alt="">
                                                </a>
                                            </div>
                                            <!--Logo End-->
                                        </div>
                                        <div class="col-md-9 d-none d-md-block">
                                            <div class="header-top-search">
                                                <div class="search-categories">
                                                    <form action="#">
                                                        <div class="search-form-input">
                                                            <input type="text" wire:model="searchQuery"
                                                                wire:keyup="search_product"
                                                                placeholder="Search product...">
                                                            <button class="top-search-btn" type="submit"><i
                                                                    class="ion-ios-search-strong"></i></button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                                        aria-labelledby="offcanvasExampleLabel">
                                        <div class="offcanvas-header">
                                            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Categories</h5>
                                            <button type="button" class="btn-close text-reset"
                                                data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div class="offcanvas-body">
                                            <ul class="list-group" style="list-style: none;">
                                                {{-- <a href="javascript:void(0)" id="category_close"
                                                    class="d-flex justify-content-end pr-2 pt-2"><i
                                                        class="fas fa-times-circle"></i></a> --}}
                                                <li><a href="{{ route('shop') }}">All Products</a></li>
                                                @foreach ($categories as $category)
                                                @include('livewire.frontend.components.sidebar-component',[
                                                'category'=> $category,
                                                'padding' => 0,
                                                'lebel' => 'category'
                                                ])
                                                @endforeach

                                            </ul>

                                        </div>
                                    </div>
                                    {{-- <div id="cate-toggle" class="category-menu-list">
                                        <ul>
                                            <a href="javascript:void(0)" id="category_close"
                                                class="d-flex justify-content-end pr-2 pt-2"><i
                                                    class="fas fa-times-circle"></i></a>
                                            <li><a :to="{name: 'shop'}">All Products</a></li>
                                            <li v-for="category in categories" :key="category.id"
                                                :class="category.subcategory.length > 0 ? 'right-menu' : ''">
                                                <a
                                                    :to="{name: 'subCategoryProduct', params: {catSlug:category.cat_slug}}">{{
                                                    category.category_name }}</a>
                                                <ul :class="category.subcategory.length > 0 ? 'cat-dropdown':''"
                                                    v-if="category.subcategory">
                                                    <li v-for="subcategory in category.subcategory"
                                                        :key="subcategory.id"
                                                        :class="subcategory.subcategory.length > 0 ? 'right-menu' : ''">
                                                        <a
                                                            :to="{name: 'subCategoryProduct', params: {catSlug:subcategory.cat_slug}}">{{
                                                            subcategory.category_name }}</a>
                                                        <header-category-list :subcategories="subcategory.subcategory">
                                                        </header-category-list>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div> --}}
                                </div>
                                <!--Category Menu End-->
                            </div>

                            <div class="col-md-4 col-lg-4 col-sm-12 text-center text-md-right d-none d-md-block">

                                <a data-bs-toggle="offcanvas" href="#offcanvasRight" role="button"
                                    aria-controls="offcanvasRight"><i
                                        class="fas fa-shopping-cart header-icon me-4"><span class="cart-count">{{
                                            $cart_count }}</span></i></a>
                                <a><i class="fa fa-user-alt header-icon ml-3 me-3"></i></a>

                                <!-- <a href="#" @click.prevent="userLogout"><i class="fas fa-sign-out-alt header-icon ml-3"></i></a> -->
                                <a title="wishlist"><i class="fas fa-heart header-icon ms-3"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Header Middle Area End-->


                <!-- Mobile Nav Start-->
                <div class="header-top-area p-0 header-style-2 d-none nav-mobile-screen">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <!--Header Top Right Start-->
                                <div class="header-top-center">
                                    <ul class="header-top-menu">
                                        <li class="mobile-li">
                                            <button class="btn" type="button" data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                <i class="fas fa-bars fa-lg"></i>
                                            </button>
                                        </li>
                                        <li class="mobile-li">
                                            <a href="/">
                                                <img src="/assets/frontend/img/logo/logo.png" width="70px" alt="">
                                            </a>
                                        </li>
                                        <li class="mobile-li-icon"><a data-bs-toggle="offcanvas" href="#offcanvasRight"
                                                role="button" aria-controls="offcanvasRight"><i
                                                    class="fas fa-shopping-cart header-icon"><span class="cart-count">{{
                                                        $cart_count }}</span></i></a>
                                        <li class="mobile-li-icon"><a><i class="fa fa-user-alt header-icon"></i></a>
                                        </li>
                                        <!-- <li class="mobile-li-icon"><a href="#" @click.prevent="userLogout"><i class="fas fa-sign-out-alt header-icon"></i></a></li> -->
                                        <li class="mobile-li-icon"><a title="wishlist"><i
                                                    class="fas fa-heart header-icon"></i></a></li>
                                    </ul>
                                </div>
                                <!--Header Top Right End-->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Mobile Nav End-->

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasRightLabel">Your Cart</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">

                        <div id="cart_sidebar"></div>

                    </div>
                </div>
            </header>
            {{-- <div class="mobile_view">
                <div class="col-sm-12">
                    <form action="#">
                        <div class="search-form">
                            <input class="form-control mobile_search_input" type="search" v-model="keyword"
                                @keyup="SearchProduct" placeholder="Search product...">
                            <button class="mobile-search-btn btn btn-primary" @click.prevent="SearchProduct"
                                type="submit"><i class="ion-ios-search-strong"></i></button>
                        </div>
                    </form>
                </div>
            </div> --}}
            <!-- header section end -->
        </div>
    </header>
    <!--Header Area End-->
    @if ($search_products)
    <div class="search_result">
        <div class="list-group list-group-flush">
            @foreach ($search_products as $item)
            {{-- @dd($item->id, $item->slug) --}}

            <a href="{{ route('product_details', $item->pro_slug) }}" class="list-group-item list-group-item-action">
                <img src="/assets/uploads/product/{{ $product->featured_image }}" width="80" height="80" alt="Image-Ctgcomputer">
                {{ $item->product_name }}
            </a>
            @endforeach
            {{-- <a href="{{ route('search_product', $searchQuery) }}"
                class="my-5 list-group-item list-group-item-action active text-center">View
                more</a> --}}
        </div>
    </div>
    @endif
</div>