<div>
    <div class="container">
        <div class="row">

            <div class="shop-product">
                <div id="myTabContent-2" class="tab-content">
                    <div id="grid" class="tab-pane fade show active">
                        <div class="product-grid-view">
                            <div class="row" wire:loading.remove wire:target="loadProducts">
                                @if ($products->count() > 0)
                                    @foreach ($products as $product)
                                        <div class="col-12 col-lg-3 col-xl-3 col-md-3 mb-3">
                                            <!--Single Product Start-->
                                            <div class="single-product mb-3 shop-product-single">
                                                <div class="product-img product-img-category">
                                                    <a href="{{ route('product_details', $product->pro_slug) }}" class="w-100">
                                                        @if ($product->featured_image)
                                                            <img class="first-img lazy"
                                                                data-src="/assets/uploads/product/{{ $product->featured_image }}"
                                                                alt="{{ $product->id }}" loading="lazy">
                                                            <noscript><img class="first-img" src="/assets/uploads/product/{{ $product->featured_image }}" /></noscript>
                                                        @else
                                                            <img class="first-img lazy"
                                                                data-src="/assets/frontend/img/icon/empty_product.jpeg" loading="lazy">
                                                            <noscript><img class="first-img" src="/assets/frontend/img/icon/empty_product.jpeg" /></noscript>
                                                        @endif
                                                    </a>
                                                    {{-- @if (discount_percentage($product->regular_price, $product->sales_price))
                                                            <span class="sticker">{{ discount_percentage($product->regular_price, $product->sales_price) }}</span>
                                                        @endif --}}

                                                </div>
                                                <div class="product-content">
                                                    <h4>
                                                        <a href="{{ route('product_details', $product->pro_slug) }}">
                                                            {{ Illuminate\Support\Str::limit($product->product_name, 50) }}
                                                        </a>
                                                    </h4>
                                                    <div class="product-price">
                                                        @if ($product->sales_price)
                                                            <span
                                                                class="price"><del>৳{{ $product->regular_price }}</del>
                                                                ৳{{ $product->sales_price }}</span>
                                                        @else
                                                            <span
                                                                class="price">৳{{ $product->regular_price }}</span>
                                                        @endif
                                                        <br>
                                                        <div class="d-inline-flex gap-2 justify-content-between mt-3">

                                                            @if ($product->purchase_stock_sum_qty - $product->sell_stock_sum_qty > 1 && $product->status == 1)
                                                                <div class="col-md-6 col-sm-6 col-lg-6 col-6">
                                                                    @if ($product->product_variations && count($product->product_variations) > 0)
                                                                        <span><a class="btn btn-primary btn-sm ps-2 detailsbtn mb-2"
                                                                                href="{{ route('product_details', $product->pro_slug) }}">select variant</a></span>
                                                                    @else

                                                                        <span><button type="button" class="btn btn-primary btn-sm pe-2 addtocart mb-2"
                                                                        href="javascript:void(0)" onclick="addToCart({{ $product->id }}, {{ $product->regular_price }}, {{ $product->sales_price }})"><i
                                                                            class="fas fa-shopping-bag"></i>Add to cart</button></span>
                                                                    @endif
                                                                </div>
                                                                <div class="col-md-6 col-sm-6 col-lg-6 col-6">
                                                                    <span><a class="btn btn-primary btn-sm ps-2 detailsbtn"
                                                                            href="{{ route('product_details', $product->pro_slug) }}"><i class="fas fa-eye pe-2"></i>Details</a></span>
                                                                </div>
                                                            @else
                                                                <div class="col-12">
                                                                    <h4>Out of stock</h4>
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="product-reviews d-flex justify-content-center mt-0">
                                                        <div class="show-rating">
                                                            @if ($product->average_ratting)
                                                                <star-rating
                                                                    :rating="{{ $product->average_ratting }}"
                                                                    :show-rating="false" :read-only="true"
                                                                    :increment="0.01"></star-rating>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--Single Product End-->
                                        </div>
                                    @endforeach
                                @else
                                    <div class="col-md-12 text-center pl-5 pr-5 productEmtpyMsgBack">
                                        <p class="mt-3 text-white">We can't find the products matching the selection
                                        </p>
                                    </div>
                                @endif
                            </div>

                            <div class="row text-center p-5" wire:loading wire:target="loadProducts">
                                <div class="col-md-12">
                                    <p class="text-white">Loading...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- ... (rest of the code) ... -->

                </div>
            </div>
            <div class="mt-5 d-flex justify-content-center mb-5">
                {{ $products->onEachSide(2)->links() }}
            </div>

        </div>

    </div>
</div>
