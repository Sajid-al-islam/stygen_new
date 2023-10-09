@if($category->subcategory->count() == 0)
    <li>
        <a href="{{ route('category_product', $category->cat_slug) }}" class="product_name">{{$category->category_name}}</a>
    </li>
@else
    <li>
        <a href="{{ route('category_product', $category->cat_slug) }}" class="product_name right_icon menu_bar">{{$category->category_name}}</a>
        <i class="fa fa-angle-right"></i>
        <ul>
            @foreach ($category->subcategory as $sub_category)
                @if($sub_category->subcategory->count() == 0)
                    <li>
                        <a href="{{ route('category_product', $sub_category->cat_slug) }}">{{$sub_category->category_name}}</a>
                    </li>
                @else
                    @include('livewire.frontend.components.sidebar-component',[
                        'category'=> $sub_category,
                    ])
                @endif
            @endforeach
        </ul>
    </li>
@endif
    