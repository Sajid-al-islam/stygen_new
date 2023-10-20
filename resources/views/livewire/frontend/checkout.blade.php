<div>
    <style>
        #checkout .order-button-payment button {
            background: #5e2e87 none repeat scroll 0 0;
            color: white;
        }
    </style>
    {{-- The Master doesn't talk, he acts. --}}
    <div id="checkout">

        {{-- @if ($checkoutLoader)
            <div class="loading-checkout"></div>
        @endif --}}

        <div class="checkout-loader"></div>


        <!-- Checkout Area Start -->
        <div class="checkout-area">
            <div class="container checkout-page-main">
                <div class="row">
                    <div class="col-12">
                        <div class="coupon-accordion">

                        </div>
                    </div>
                </div>
                <form action="#" onsubmit="checkout_submit(event)" id="checkout_submission_form" method="post">
                    <div class="row">
                        <div class="col-lg-6 col-12">

                            <div class="checkbox-form">
                                <h3>Billing Details</h3>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="checkout-form-list">
                                            <label>Full Name <span class="required">*</span></label>
                                            <input placeholder="e.g. Rahim" name="name" type="text">
                                            {{-- @if (isset($errors['name']))
                                                    <span class="text-danger">{{ $errors['name'][0] }}</span>
                                            @endif --}}
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="checkout-form-list">
                                            <label>Address <span class="required">*</span></label>
                                            <input name="address" placeholder="e.g. House#1, Road#1, Dhaka" type="text">
                                            {{-- @if (isset($errors['address']))
                                                    <span class="text-danger">{{ $errors['address'][0] }}</span>
                                            @endif --}}
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="checkout-form-list">
                                            <label>Email Address</label>
                                            <input name="email" placeholder="e.g. example@example.com" type="email">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="checkout-form-list">
                                            <label>Phone <span class="required">*</span></label>
                                            <input name="phone" type="number" placeholder="e.g. 01xxxxxxxxx">
                                            {{-- @if (isset($errors['phone']))
                                                    <span class="text-danger">{{ $errors['phone'][0] }}</span>
                                            @endif --}}
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="checkout-form-list">
                                            <label>Product Delivery Date (Optional)</label>
                                            <input class="delivery-date" name="delivery_date" type="date">
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="order-notes">
                                            <div class="checkout-form-list">
                                                <label>Special Notes (Optional)</label>
                                                <textarea name="notes" id="checkout-mess" cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    {{-- <div class="col-md-12">
                                            @if (!$user['id'])
                                                <p class="new-account-text">For a better experience and order history, create an account with us</p>
                                            @endif
                                        </div>

                                        <div class="col-md-12">
                                            @if (!$user['id'])
                                                <div class="checkout-form-list create-acc">
                                                    <input id="cbox" type="checkbox" v-model="createAccount">
                                                    <label>Create an account?</label>
                                                </div>
                                            @endif

                                            @if ($createAccount)
                                                <div id="cbox-info" class="checkout-form-list create-account d-block">
                                                    <p>Create an account by entering the information below.</p>
                                                    <label>Account password  <span class="required">*</span></label>
                                                    <input v-model="form['account_password']" placeholder="e.g. ********" type="password">
                                                    @if (isset($errors['account_password']))
                                                        <span class="text-danger">{{ $errors['account_password'][0] }}</span>
                                    @endif
                                </div>
                                @endif
                            </div> --}}
                        </div>

                        <div class="different-address">
                            <div class="ship-different-title">
                                <h3>
                                    <label>Send this as a gift</label>
                                    <input id="ship-box" name="shippingDisplay" value="ship_to_other" type="checkbox">
                                </h3>
                            </div>
                            <div id="ship-box-info" class="row d-block">
                                <div class="col-md-12">
                                    <div class="checkout-form-list">
                                        <label>Full Name <span class="required">*</span></label>
                                        <input name="shipping_name" placeholder="e.g. Rahim" type="text">
                                        {{-- @if (isset($errors['shipping_name']))
                                                        <span class="text-danger">{{ $errors['shipping_name'][0] }}</span>
                                        @endif --}}
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="checkout-form-list">
                                        <label>Address <span class="required">*</span></label>
                                        <input name="shipping_address" placeholder="e.g. House#1, Road#1, Dhaka" type="text">
                                        {{-- @if (isset($errors['shipping_address']))
                                                        <span class="text-danger">{{ $errors['shipping_address'][0] }}</span>
                                        @endif --}}
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="checkout-form-list">
                                        <label>Email Address</label>
                                        <input name="shipping_email" placeholder="e.g. example@example.com" type="email">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="checkout-form-list">
                                        <label>Phone <span class="required">*</span></label>
                                        <input name="shipping_phone" placeholder="e.g. 01xxxxxxxxx" type="number">
                                        {{-- @if (isset($errors['shipping_phone']))
                                                        <span class="text-danger">{{ $errors['shipping_phone'][0] }}</span>
                                        @endif --}}
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="order-notes">
                                        <div class="checkout-form-list">
                                            <label>Personal note for the recipient (Optional)</label>
                                            <textarea name="personal_notes" id="checkout-mess" cols="30" rows="10" placeholder="e.g. Personal notes for the recipient."></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    @if (count($cards) > 0)
                                    <div class="country-select clearfix">
                                        <label>Add Greetings Card (Optional)</label>
                                        <select @change.prevent="changeGreetingsCard($event)" v-model="card_id" class="form-control">
                                            <option value="0">Select Greetings Card</option>
                                            @foreach ($cards as $card)
                                            <option value="{{ $card['price'] }}">{{ $card['name'] }}
                                            </option>
                                            @endforeach
                                        </select>
                                    </div>
                                    @endif
                                </div>

                                <div class="col-md-12">
                                    @if (count($packagings) > 0)
                                    <div class="country-select clearfix">
                                        <label>Packaging (Optional)</label>
                                        <select @change.prevent="changePackaging($event)" v-model="packaging_id" class="form-control">
                                            <option value="0">Select Packaging</option>
                                            @foreach ($packagings as $packaging)
                                            <option value="{{ $packaging['price'] }}">
                                                {{ $packaging['name'] }}
                                            </option>
                                            @endforeach
                                        </select>
                                    </div>
                                    @endif
                                </div>
                            </div>

                            @if ($shippings !== null)
                            <div class="country-select clearfix">
                                <label>Shipping Method <span class="required">*</span></label>
                                <select name="shipping_charge_id" class="form-control shipping_charge_selection">
                                    {{-- <option>Select Shipping Method</option> --}}
                                    <!-- <option v-if="cart_products.total > 900" value="0">Free Delivery</option> -->
                                    @foreach ($shippings as $shippings_charge)
                                    <option value="{{ $shippings_charge['id'] }}">
                                        {{ $shippings_charge['name'] }}
                                    </option>
                                    @endforeach
                                </select>
                                {{-- @if (isset($errors['shipping_charge_id']) || isset($shippingAlert))
                                                    <span class="text-danger">{{ $errors['shipping_charge_id'][0] ?? $shippingAlert }}</span>
                                @endif --}}
                            </div>
                            @endif
                        </div>
                    </div>

            </div>
            <div class="col-lg-6 col-12">

                <!-- Addon Products Part -->

                <!-- Addon Products Part -->

                <div class="your-order">
                    <p class="CouponCss mb-4">Have a coupon ? <span id="showcoupon"> Click here to enter
                            your code</span></p>
                    <div id="checkout_coupon" class="coupon-checkout-content">
                        <div class="coupon-info">
                            <form action="#">
                                {{-- <p class="checkout-coupon">
                                                <input placeholder="Coupon code" type="text" v-model="coupon_code">
                                                <input value="Apply Coupon" type="submit" @click.prevent="applyCoupon"><br>
                                                <span class="text-success" :class="{ 'text-danger': hasError }" v-if="coupon_msg && coupon_msg.length > 0">{{ coupon_msg }}</span>
                                </p> --}}
                            </form>
                        </div>
                    </div>
                    <h3 class="text-center">Your order</h3>
                    <div class="your-order-table table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="cart-product-name">Product</th>
                                    <th class="cart-product-total">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($carts as $cart)
                                {{-- @dd($cart) --}}
                                <tr class="cart_item">
                                    <td class="cart-product-name">
                                        {{ $cart['product']['product_name'] }}<strong class="product-quantity"> × {{ $cart['qty'] }}</strong>
                                    </td>
                                    <td class="cart-product-total"><span class="amount">৳{{ $cart['qty'] * $cart['product']['regular_price'] }}</span>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                            <tfoot>
                                <tr class="cart-subtotal">
                                    <th>Cart Subtotal</th>
                                    <td><span class="amount">৳ {{ number_format($cart_total) }}</span></td>
                                </tr>
                                {{-- @if ($cart_products['discount'] > 0)
                                                <tr class="cart-subtotal">
                                                    <th>Discount</th>
                                                    <td><span class="amount">৳ {{ $cart_products['discount'] + $coupon_amount }}</span></td>
                                </tr>
                                @else
                                @if ($coupon_amount > 0)
                                <tr class="cart-subtotal">
                                    <th>Discount</th>
                                    <td><span class="amount">৳ {{ $coupon_amount }}</span></td>
                                </tr>
                                @endif
                                @endif --}}
                                {{-- @if ($cart_products['vat'] > 0)
                                                <tr class="cart-subtotal">
                                                    <th>Vat</th>
                                                    <td><span class="amount">৳ {{ $cart_products['vat'] }}</span></td>
                                </tr>
                                @endif --}}
                                {{-- @if ($shipping_charge)
                                                <tr class="cart-subtotal">
                                                    <th>Shipping Charge</th>
                                                    <td><span class="amount shippingCharge">৳ {{ $shipping_charge }}</span></td>
                                </tr>
                                @endif
                                @if ($card_price)
                                <tr class="cart-subtotal">
                                    <th>Greetings Card</th>
                                    <td><span class="amount shippingCharge">৳ {{ $card_price }}</span></td>
                                </tr>
                                @endif
                                @if ($packaging_price)
                                <tr class="cart-subtotal">
                                    <th>Packaging</th>
                                    <td><span class="amount shippingCharge">৳ {{ $packaging_price }}</span></td>
                                </tr>
                                @endif --}}
                                <tr class="order-total">
                                    <th>Order Total</th>
                                    <td><strong><span class="amount">৳ <span class="total_order_amount">{{ number_format($cart_total) }}</span></span></strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div class="payment-method mt-0">
                        <div class="payment-accordion">
                            <div id="accordion">
                                <p><b>Select a Payment Method</b> <span class="text-danger">*</span></p>
                                <div class="card">
                                    <div class="row mb-2">
                                        <div class="col-md-4 col-sm-12 col-12">
                                            <div class="payment_single text-center">
                                                <a class="btn" data-bs-toggle="collapse" href="#cashOnDelivery" role="button" aria-expanded="false" aria-controls="cashOnDelivery">
                                                    <img src="assets/frontend/img/cart/cash-on-delivery.png" class="img-fluid mx-auto d-block mb-2">
                                                    <span><i class="fas fa-truck"></i><b>Cash On Delivery</b></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-12">
                                            <div class="payment_single text-center">
                                                <div class="card-header" id="#payment-2">
                                                    <h5 class="panel-title">
                                                        <a class="btn" data-toggle="collapse" data-target="#onlinePayment" aria-expanded="false" aria-controls="onlinePayment">
                                                            <img src="assets/frontend/img/cart/secure.png" class="img-fluid mx-auto d-block mb-2">
                                                            <span><i class="fas fa-money-check"></i><b>Online
                                                                    Payment</b></span>
                                                        </a>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        {{-- <div class="col-md-4 col-sm-12">
                                                        <div class="payment_single text-center">
                                                            <div class="card-header" id="#payment-3">
                                                                <h5 class="panel-title">
                                                                    <a class="btn collapsed">
                                                                        <img src="assets/frontend/img/cart/bkash.svg"
                                                                            class="img-fluid mx-auto d-block bkash_img">
                                                                        <span><b>Bkash</b></span>
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div> --}}
                                        <div class="col-md-4 col-sm-12 col-12">
                                            <div class="payment_single text-center">
                                                <a class="btn" data-bs-toggle="collapse" href="#bkash_pay" role="button" aria-expanded="false" aria-controls="bkash_pay">
                                                    <img src="assets/frontend/img/cart/bkash.svg" class="img-fluid mx-auto d-block mb-2">
                                                    <span><i class="fas fa-truck"></i><b>Bkash</b></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    {{-- <div id="onlinePayment" class="collapse" data-parent="#accordion">
                                                    <div class="card-body">
                                                        <button id="sslczPayBtn" @click.prevent="sslCommerzePayment" class="btn mln-btn mln-btn--border btn-block" token="data" postdata="data" order="data" endpoint="/pay-via-ajax">PAY NOW</button>
                                                    </div>
                                                </div> --}}
                                    <div id="cashOnDelivery" class="collapse show">
                                        <div class="card-body">
                                            @if ($cart_total > 0)
                                            <div class="order-button-payment d-grid">
                                                <button class="btn btn-block" type="submit">Place Order</button>
                                            </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div id="bkash_pay" class="collapse" data-parent="#accordion">
                                        <div class="card-body">
                                            @if ($cart_total > 0)
                                            <div class="order-button-payment d-grid">
                                                <button id="bKash_button" class="bkash_btn btn btn-block" type="button">Pay with Bkash</button>
                                            </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    </div>
</div>
<!-- Checkout Area End -->
</div>
</div>
<script id="myScript" src="https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js">
</script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Select all buttons with data-bs-toggle="collapse"
        const buttons = document.querySelectorAll('[data-bs-toggle="collapse"]');

        buttons.forEach(function(button) {
            button.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default link behavior
                const target = button.getAttribute('href'); // Get the target collapse element
                const targetElement = document.querySelector(target);

                // Close all other collapse elements in the same container
                const parent = button.closest('.payment-accordion');
                const collapseElements = parent.querySelectorAll('.collapse');

                collapseElements.forEach(function(element) {
                    if (element !== targetElement) {
                        const bsCollapse = new bootstrap.Collapse(element);
                        bsCollapse.hide();
                    }
                });

                // Toggle the target element
                const bsTarget = new bootstrap.Collapse(targetElement);
                bsTarget.toggle();
            });
        });
    });
    
    var shipping_id = $(".shipping_charge_selection").val();
    var price = $('.total_order_amount').text();
    $("select.shipping_charge_selection").change(function() {
        let selectedItem = $(this).children("option:selected").val();
        shipping_id = selectedItem;
    });
    var paymentID = '';
    bKash.init({
        paymentMode: 'checkout', //fixed value ‘checkout’
        //paymentRequest format: {amount: AMOUNT, intent: INTENT}
        //intent options
        //1) ‘sale’ – immediate transaction (2 API calls)
        //2) ‘authorization’ – deferred transaction (3 API calls)
        paymentRequest: {
            amount: price, //max two decimal points allowed
            intent: 'sale'
        },
        createRequest: function(
            request
        ) { //request object is basically the paymentRequest object, automatically pushed by the script in createRequest method
            console.log("create working !!", shipping_id)
            let request_data = {
                shipping_id: shipping_id,
                request: request
            }
            $.ajax({
                url: 'createpayment',
                type: 'POST',
                data: JSON.stringify(request_data),
                contentType: 'application/json',
                success: function(data) {

                    if (data && data.paymentID != null) {
                        paymentID = data.paymentID;
                        bKash.create().onSuccess(
                            data
                        ); //pass the whole response data in bKash.create().onSucess() method as a parameter
                    } else {
                        bKash.create().onError();
                    }
                },
                error: function() {
                    bKash.create().onError();
                }
            });
        },
        executeRequestOnAuthorization: function() {
            console.log("execute working !!")
            $.ajax({
                url: 'executepayment',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    "paymentID": paymentID
                }),
                success: function(data) {

                    console.log("execute response ", data)
                    data = JSON.parse(data);
                    if (data && data.paymentID != null) {
                        console.log("trxID: ", data.trxID)
                        window.location.href =
                            "/thank-you"; // Your redirect route when successful payment
                    } else {
                        console.log("error ");

                        window.location.href =
                            "/failed"; // Your redirect route when fail payment
                        bKash.execute().onError();
                    }
                },
                error: function() {
                    bKash.execute().onError();
                }
            });
        },
        onClose: function() {
            window.location.href = '/cart'; // Your redirect route when cancel payment
        },
    });
</script>