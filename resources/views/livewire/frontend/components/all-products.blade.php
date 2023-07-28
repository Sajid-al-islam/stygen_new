<div>
    {{-- The whole world belongs to you. --}}
    <div class="container main-design">
        <div class="row">
            <div class="col-lg-3 order-2 order-lg-1">
                <product-sidebar></product-sidebar>
            </div>
            <div class="col-lg-9 order-2 order-lg-1">
                <div class="shop-layout">
                    <!--Grid & List View Start-->
                    <div class="shop-topbar-wrapper mb-30 d-md-flex justify-content-md-between align-items-center">
                        <div class="grid-list-option">
                            <ul class="nav">
                                <li>
                                    <a class="active" data-toggle="tab" href="#grid"><i class="ion-grid show_grid"></i></a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#list"><i class="ion-android-menu show_list"></i></a>
                                </li>
                            </ul>
                            {{-- <p class="show-product">Showing {{ products.total }} results</p> --}}
                        </div>
                        <!--Toolbar Short Area Start-->
                        <div class="toolbar-short-area d-md-flex align-items-center">
                            <div class="toolbar-shorter">
                                <label>Sort By:</label>
                                <select class="productSorting" v-on:change="productSorting($event)">
                                    <option value="">Default sorting</option>
                                    <option value="popularity">Sort by popularity</option>
                                    <option value="avg_rating">Sort by average rating</option>
                                    <option value="latest">Sort by latest</option>
                                    <option value="low_to_high">Sort by price: low to high</option>
                                    <option value="high_to_low">Sort by price: high to low</option>
                                </select>
                            </div>
                        </div>
                        <!--Toolbar Short Area End-->
                    </div>
                    <!--Grid & List View End-->


                    <!--Shop Product Start-->
                    <div class="shop-product">
                        <div id="myTabContent-2" class="tab-content">
                            <div id="grid" class="tab-pane fade show active">
                                <div class="product-grid-view">
                                    <div class="row" v-if="products.data && products.data.length > 0">
                                        @foreach ($products->data as $product)

                                        <div class="col-lg-4 col-xl-4 col-md-4 mb-3" v-for="product in products.data" :key="product.id">
                                            <!--Single Product Start-->
                                            <div class="single-product mb-3 shop-product-single">
                                                <div class="product-img">
                                                    <router-link :to="{name: 'singleProduct', params: {slug:product.pro_slug}}">
                                                        <template v-if="product.featured_image != ''">
                                                            <img class="first-img" src="`/assets/uploads/product/{{$product->featured_image}}`" :alt="product.product_name" lazy="loading">
                                                            <img class="hover-img" src="`/assets/uploads/product/{{$product->featured_image}}`" :alt="product.product_name" lazy="loading">
                                                        </template>
                                                        <template v-else>
                                                            <img class="first-img" src="/assets/frontend/img/icon/empty_product.jpeg" lazy="loading">
                                                        </template>
                                                    </router-link>
                                                    <span class="sticker">{{ $product->regular_price }}</span>
                                                    <div class="product-action">
                                                        <ul>
                                                            <li v-if="product.product_variations && product.product_variations.length > 0"><router-link :to="{name: 'singleProduct', params: {slug:product.pro_slug}}"><i class="ion-settings"></i></router-link></li>
                                                            <!-- <li v-else><a href="#" @click.prevent="addToCart(product)"><i class="ion-bag"></i></a></li> -->
                                                            <li><a @click.prevent="quickView(product, product.featured_image, product.product_variations)" href="#open-modal" data-toggle="modal"><i class="ion-eye"></i></a></li>
                                                            <!-- <li><a href="#" @click.prevent="addToWishlist(product)"><i class="ion-heart"></i></a></li> -->
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <h4><router-link :to="{name: 'singleProduct', params: {slug:product.pro_slug}}">{{ $product->product_name }}</router-link></h4>
                                                    <div class="product-price">
                                                        <span class="price" v-if="product.sales_price"><del>৳{{ product.regular_price | numFormat }}</del> ৳{{ product.sales_price | numFormat }}</span>
                                                        <span class="price" v-else>৳{{ product.regular_price | numFormat }}</span>
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="d-inline-flex justify-content-between mt-3">
                                                                    <div class="col-md-6 col-sm-6">
                                                                        <!-- <span v-if="product.product_variations && product.product_variations.length > 0"><router-link :to="{name: 'singleProduct', params: {slug:product.pro_slug}}"><i class="ion-settings"></i></router-link></span> -->
                                                                        <span v-if="product.product_variations && product.product_variations.length > 0"><a class="btn btn-primary btn-sm pl-2 detailsbtn"><router-link class="detailsbtn" :to="{name: 'singleProduct', params: {slug:product.pro_slug}}">select variant</router-link></a></span>
                                                                        <span v-else><a href="#" @click.prevent="addToCart(product)" class="btn btn-primary btn-sm pr-2 addtocart"><i class="ion-bag"></i>Add to cart</a></span>
                                                                    </div>
                                                                    <div class="col-md-6 col-sm-6">
                                                                        <span><a class="btn btn-primary btn-sm pl-2 detailsbtn"><router-link class="detailsbtn" :to="{name: 'singleProduct', params: {slug:product.pro_slug}}">Details</router-link></a></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="product-reviews d-flex justify-content-center mt-0">
                                                        <div class="show-rating">
                                                            <star-rating v-if="product.average_ratting" :rating="product.average_ratting" :show-rating="false" :read-only="true" :increment="0.01"></star-rating>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <span itemscope itemtype="http://schema.org/Product" class="microdata">
                                                <meta itemprop="image" :content="`https://www.stygen.gift/assets/uploads/product/${product.featured_image}`">
                                                <meta itemprop="name" :content="`${ product.product_name }`">
                                                <meta itemprop="description" :content="`${ product.short_description }`">
                                                <span itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                                                    <meta itemprop="price" :content="`${ product.regular_price }`">
                                                    <meta itemprop="priceCurrency" content="BDT">
                                                </span>
                                            </span>
                                            <!--Single Product End-->
                                        </div>
                                        @endforeach
                                    </div>

                                    <div class="row text-center p-5" v-else>
                                        <div class="col-md-12 text-center pl-5 pr-5 productEmtpyMsgBack">
                                            <p class="mt-3 text-white">We can't find the products matching the selection</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div id="list" class="tab-pane fade">
                                <div class="product-list-view">
                                    <div class="product-list-item mb-3" v-for="product in products.data" :key="product.id">
                                        <div class="row shop-list-product-single">
                                            <!--Single List Product Start-->
                                            <div class="col-md-4">
                                                <div class="single-product">
                                                    <div class="product-img">
                                                        <router-link :to="{name: 'singleProduct', params: {slug:product.pro_slug}}">
                                                            <template v-if="product.featured_image != ''">
                                                                <img class="first-img" :src="`/assets/uploads/product/${product.featured_image}`" :alt="product.product_name">
                                                                <img class="hover-img" :src="`/assets/uploads/product/${product.featured_image}`" :alt="product.product_name">
                                                            </template>
                                                            <template v-else>
                                                                <img class="first-img" src="/assets/frontend/img/icon/empty_product.jpeg">
                                                            </template>
                                                        </router-link>
                                                        <span class="sticker" v-if="discount_percentage(product.regular_price, product.sales_price)">{{ discount_percentage(product.regular_price, product.sales_price) }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="product-content shop-list">
                                                    <h4><router-link :to="{name: 'singleProduct', params: {slug:product.pro_slug}}">{{ product.product_name }}</router-link></h4>
                                                    <div class="product-price">
                                                        <span class="price" v-if="product.sales_price"><del>৳{{ product.regular_price | numFormat }}</del> ৳{{ product.sales_price | numFormat }}</span>
                                                        <span class="price" v-else>৳{{ product.regular_price | numFormat }}</span>
                                                    </div>
                                                    <div class="product-reviews d-flex justify-content-center mt-0">
                                                        <div class="show-rating">
                                                            <star-rating v-if="product.average_ratting" :rating="product.average_ratting" :show-rating="false" :read-only="true" :increment="0.01"></star-rating>
                                                        </div>
                                                    </div>
                                                    <div class="product-description">
                                                        <p><span v-html="product.short_description"></span></p>
                                                    </div>
                                                    <div class="product-list-action">
                                                        <ul>
                                                            <li v-if="product.product_variations && product.product_variations.length > 0"><router-link class="pro-add-btn" :to="{name: 'singleProduct', params: {slug:product.pro_slug}}"><i class="ion-settings"></i>Details</router-link></li>
                                                            <li v-else><a class="pro-add-btn" href="#" @click.prevent="addToCart(product)"><i class="ion-bag"></i>Add to cart</a></li>
                                                            <li><a @click.prevent="quickView(product, product.featured_image, product.product_variations)" href="#open-modal" data-toggle="modal"><i class="ion-eye"></i></a></li>
                                                            <li><a href="#" @click.prevent="addToWishlist(product)"><i class="ion-heart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--Single List Product End-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Shop Product End-->

                    <!--Pagination Start-->
                    <div class="pagination-product d-md-flex justify-content-md-between align-items-center mb-3">
                        <!--<div class="showing-product">
                            <p> Showing 1-10 of 15 item(s) </p>
                        </div>-->
                        <div class="paginationSection page-list shop-paginate">
                            <el-pagination class="text-center mt-3 desktopViewPagination"
                                background
                                @current-change="paginationChange"
                                :current-page.sync="currentPage"
                                :page-size="products.per_page"
                                layout="prev, pager, next"
                                :total="products.total">
                            </el-pagination>

                            <el-pagination class="mobileViewPagination"
                                small
                                @current-change="paginationChange"
                                :current-page.sync="currentPage"
                                layout="prev, pager, next"
                                :total="products.total">
                            </el-pagination>
                        </div>
                    </div>
                    <!--Pagination End-->
                </div>
            </div>
        </div>
    </div>
</div>
