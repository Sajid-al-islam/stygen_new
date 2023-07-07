<div>
    {{-- Care about people's approval and you will be their prisoner. --}}
    <!--Header Area Start-->
		<header>
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
                                                <div class="category-heading">
                                                    <h2 class="categories-toggle category-menu-header"></h2>
                                                </div>
                                            </div>
                                            <div class="col-md-2 d-none d-md-block">
                                                <!--Logo Start-->
                                                <div class="logo logo-section">
                                                    <a>
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
                                                                <input type="text" v-model="keyword" placeholder="Search product...">
                                                                <button class="top-search-btn" type="submit"><i class="ion-ios-search-strong"></i></button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {{-- <div id="cate-toggle" class="category-menu-list">
                                            <ul>
                                                <a href="javascript:void(0)" id="category_close" class="d-flex justify-content-end pr-2 pt-2"><i class="fas fa-times-circle"></i></a>
                                                <li><a :to="{name: 'shop'}">All Products</a></li>
                                                <li v-for="category in categories" :key="category.id" :class="category.subcategory.length > 0 ? 'right-menu' : ''">
                                                    <a :to="{name: 'subCategoryProduct', params: {catSlug:category.cat_slug}}">{{ category.category_name }}</a>
                                                    <ul :class="category.subcategory.length > 0 ? 'cat-dropdown':''" v-if="category.subcategory">
                                                        <li v-for="subcategory in category.subcategory" :key="subcategory.id" :class="subcategory.subcategory.length > 0 ? 'right-menu' : ''">
                                                            <a :to="{name: 'subCategoryProduct', params: {catSlug:subcategory.cat_slug}}">{{ subcategory.category_name }}</a>
                                                            <header-category-list :subcategories="subcategory.subcategory"></header-category-list>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div> --}}
                                    </div>
                                    <!--Category Menu End-->
                                </div>

                                <div class="col-md-4 col-lg-4 col-sm-12 text-center text-md-right d-none d-md-block">
                                    <a href="#" ><i class="fas fa-shopping-cart header-icon mr-4"><span class="cart-count"></span></i></a>
                                    <a><i class="fa fa-user-alt header-icon ml-3 mr-3"></i></a>
                                    <!-- <a href="#" @click.prevent="userLogout"><i class="fas fa-sign-out-alt header-icon ml-3"></i></a> -->
                                    <a title="wishlist"><i class="fas fa-heart header-icon ml-3"></i></a>
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
                                        <ul class="header-top-menu mt-0">
                                            <li>
                                                <div class="category-heading mobile-category-heading">
                                                    <h2 class="categories-toggle category-menu-header"></h2>
                                                </div>
                                            </li>
                                            <li class="mobile-li">
                                                <a>
                                                    <img src="/assets/frontend/img/logo/logo.png" width="70px" alt="">
                                                </a>
                                            </li>
                                            <li class="mobile-li-icon"><a href="#" ><i class="fas fa-shopping-cart header-icon"><span class="cart-count"></span></i></a></li>
                                            <li class="mobile-li-icon"><a><i class="fa fa-user-alt header-icon"></i></a></li>
                                            <!-- <li class="mobile-li-icon"><a href="#" @click.prevent="userLogout"><i class="fas fa-sign-out-alt header-icon"></i></a></li> -->
                                            <li class="mobile-li-icon"><a title="wishlist"><i class="fas fa-heart header-icon"></i></a></li>
                                        </ul>
                                    </div>
                                    <!--Header Top Right End-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Mobile Nav End-->


                </header>
                <div class="mobile_view">
                    <div class="col-sm-12">
                        <form action="#">
                            <div class="search-form">
                                <input class="form-control mobile_search_input" type="search" v-model="keyword" @keyup="SearchProduct" placeholder="Search product...">
                                <button class="mobile-search-btn btn btn-primary" @click.prevent="SearchProduct" type="submit"><i class="ion-ios-search-strong"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- header section end -->
            </div>
		</header>
		<!--Header Area End-->
</div>
