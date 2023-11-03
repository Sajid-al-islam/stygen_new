<div>
    {{-- If your happiness depends on money, you will never be happy with yourself. --}}
    <ul class="list-group list-group-flush">
        @foreach ($carts as $cart)
            <li class="list-group-item">
                <div class="d-flex">
                    <div class="float-left">
                        @if ($cart['product']['featured_image'])
                            <img src="/assets/uploads/product/{{ $cart['product']['featured_image'] }}" width="80px"
                                alt="{{ $cart['product']['product_name '] }}">
                        @endif
                    </div>
                    <div class="float-right ms-2">
                        {{ \Illuminate\Support\Str::limit($cart['product']->product_name, 60) }} <br>
                        <span>{{ $cart['qty'] }} × <span class="price"> {{ $cart['price'] }} </span></span>
                    </div>
                </div>
            </li>
        @endforeach
    </ul>


    <div class="row align-items-end mt-auto">
        <div class="d-grid gap-2 mt-auto">
            <a href="{{ route('cart') }}" class="btn btn-secondary">Cart</a>
            <a href="/checkout" class="btn btn-primary">Checkout</a>
        </div>
        {{-- <div class="col-12">
        <a  class="btn btn-block btn-primary">Checkout</a>
        </div>
        <div class="col-12">
        <a href="#" class="btn btn-block btn-secondary p-2">Cart</a>
        </div> --}}
    </div>
</div>
