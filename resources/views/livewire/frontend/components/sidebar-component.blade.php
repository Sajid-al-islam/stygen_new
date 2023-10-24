@if($category->subcategory->count() == 0)
    <li class="level" data-id="{{$category->id}}">
        <a data-src="{{ route('category_product', $category->cat_slug) }}" href="#" class="product_name">
            {{$category->category_name}}
        </a>
    </li>
@else
    <li class="level" data-id="{{$category->id}}">
        <a href="#" data-src="{{ route('category_product', $category->cat_slug) }}" class="product_name menu_bar">
            {{$category->category_name}}
        </a>
        <i class="fa fa-angle-right fa-lg" style="padding-right: 10px"></i>
        <ul>
            @foreach ($category->subcategory as $sub_category)
                @if($sub_category->subcategory->count() == 0)
                    <li class="level" data-id="{{$category->id}}">
                        <a href="" data-src="{{ route('category_product', $sub_category->cat_slug) }}" class="product_name">{{$sub_category->category_name}}</a>
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
    