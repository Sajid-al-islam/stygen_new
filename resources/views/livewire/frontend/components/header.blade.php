<header class="sidebar_area_header">
    <div class="container">
        <div class="sidebar_area_header_content">

            <!-- left_area start -->
            <div class="left_area">
                <div class="menu_area_all_content">
                    <!-- menu_bar start -->
                    <a href="#" onclick="add_menu_list.classList.toggle('active_class')" class="menu_bar">
                        <i class="fa fa-bars"></i>
                    </a>
                    <!-- menu_bar end -->
                
                    <!-- menu_list_all area start -->
                    <div id="add_menu_list" class="menu_list_all">
                        <ul>
                            <li>
                                <a href="#" class="product_name all_product_title">All Product</a>
                            </li>
                            @foreach ($categories as $category)
                                @if($category->subcategory->count() == 0)
                                    <li>
                                        <a href="{{ route('category_product', $category->cat_slug) }}" class="product_name">{{$category->category_name}}</a>
                                    </li>
                                @else
                                    @include('livewire.frontend.components.sidebar-component',[
                                        'category'=> $category,
                                    ])
                                @endif
                            @endforeach
                        </ul>
                    </div>
                    <!-- menu_list_all area end -->
                </div>
                
                <!-- menu_area_all_content end -->


                <!-- logo area start -->
                <a href="#" class="logo_area">
                    <img src="{{ asset('assets/frontend/img/logo/logo.png') }}" alt="Stygen_logo">
                </a>
                <!--logo area end -->

                <!-- search area start -->
                <div class="search_area">
                    <form action="#">
                        <input type="text" placeholder="Search product ...">
                        <button class="search_icon">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
                <!--search  area end -->
            </div>
            <!-- left_area end -->

            <!-- right_area start -->
            <div class="right_area">

                <!-- shopping_card_area start -->
                <a href="#" class="shopping_card r_icon">
                    <i class="fas fa-shopping-cart"></i>
                    <div class="card_count_area">
                        <p class="count_text">0</p>
                    </div>
                </a>
                <!-- shopping_card_area end -->

                <!-- user_area start -->
                <a href="#" class="user_area r_icon">
                    <i class="fa fa-user-alt"></i>
                </a>
                <!-- user_area end -->
                @foreach($search_products as $item)
                    <a href="{{ route('product_details', $item->pro_slug) }}" class="list-group-item list-group-item-action">
                        <img src="/assets/uploads/product/{{ $item->featured_image }}" width="80" height="80" alt="Image-Ctgcomputer">
                        {{ $item->product_name }}
                    </a>
                @endforeach
                <!-- wishlist_area start -->
                <a href="#" class="wishlist_area r_icon">
                    <i class="fas fa-heart"></i>
                </a>
            </div>
        </div>
    </div>
</header>
<!-- sidebar_area_header end -->

<script>
    const categoryLinks = document.querySelectorAll('.product_name.right_icon.menu_bar');

    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Hide all subcategory lists
            const subcategoryLists = document.querySelectorAll('.product_name.right_icon.menu_bar + ul');
            subcategoryLists.forEach(list => {
                list.style.display = 'none';
            });

            // Toggle the visibility of the subcategory list of the clicked category
            const subcategoryList = link.nextElementSibling;
            if (subcategoryList) {
                subcategoryList.style.display = (subcategoryList.style.display === 'none' || subcategoryList.style.display === '') ? 'block' : 'none';
            }
        });
    });
</script>
