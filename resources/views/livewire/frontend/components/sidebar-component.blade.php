<div class="accordion" id="accordion_{{$category->category_name}}" style="padding-left: {{$padding}}px">
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed @if($category->subcategory->count() == 0) has-not-subcategories @endif" type="button" 
                data-bs-toggle="collapse" data-bs-target="#collapse{{$category->id}}" aria-expanded="false" 
                aria-controls="collapse{{$category->id}}">{{$category->category_name}}</button>
        </h2>
        <div id="collapse{{$category->id}}" class="accordion-collapse collapse" data-bs-parent="#accordion_{{$category->category_name}}">
            <div class="accordion-body">
                @foreach ($category->subcategory as $subcategory)
                    @if($subcategory->subcategory->count() == 0)
                        <li class="category-list">{{$subcategory->category_name}}</li>
                    @else
                        @include('livewire.frontend.components.sidebar-component',[
                            'category'=> $subcategory,
                            'padding' => $padding + 10
                        ])
                    @endif
                @endforeach
            </div>
        </div>
    </div>
</div>