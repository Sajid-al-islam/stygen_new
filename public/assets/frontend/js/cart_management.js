window.ORDER_ID = null;
window.get_form_data = function (selector) {
    let inputs = [...document.querySelectorAll(selector + " input")];
    let selects = [...document.querySelectorAll(selector + " select")];
    let textareas = [...document.querySelectorAll(selector + " textarea")];

    let form_values = [
        ...inputs?.map((i) => get_el_value(i)),
        ...selects?.map((i) => get_el_value(i)),
        ...textareas?.map((i) => get_el_value(i)),
    ];

    let form_data = new FormData();
    let form_inputs = {};
    form_values.forEach((i) => {
        if(i.type === 'file'){
            /**
             * if there are multiple files do a loop
             *
            */
           if(i.multiple){
               for (let j = 0; j < i.value?.length; j++) {
                   const el = i.value[j];
                   form_data.append(i.name+'[]', el);
                }
            }
            /**
             * else
             * append the single file
             */
            else{
                form_data.append(i.name, i.value);
            }
        }else{
            form_data.append(i.name, i.value);
        }
        form_inputs[i.name] = i.value;
    });

    return { form_values, form_inputs, form_data };
};

function get_el_value(el) {
    let data = {
        name: el.name || el.dataset.name,
        value: "",
        type: el.type,
    };
    switch (el.nodeName) {
        case "INPUT":
            switch (el.type) {
                case "text":
                case "email":
                case "number":
                case "date":
                case "month":
                case "time":
                case "hidden":
                case "password":
                case "button":
                case "reset":
                case "submit":
                    data.value = el.value;
                    break;
                case "checkbox":
                case "radio":
                    if (el.checked) {
                        data.value = el.value;
                    }
                    break;
                case "file":
                    data.multiple = el.multiple;
                    data.value = el.multiple ? el.files : (el.files.length ? el.files[0] : '');
                    break;
            }
            break;
        case "TEXTAREA":
            data.value = el.value;
            break;
        case "SELECT":
            switch (el.type) {
                case "select-one":
                    data.value = el.value;
                    break;
                case "select-multiple":
                    let selected = [];
                    for (j = el.options.length - 1; j >= 0; j = j - 1) {
                        if (el.options[j].selected) {
                            q.push(
                                el.name +
                                    "=" +
                                    encodeURIComponent(el.options[j].value)
                            );
                            selected.push(el.value);
                        }
                    }
                    data.value = selected;
                    break;
            }
            break;
        case "BUTTON":
            switch (el.type) {
                case "reset":
                case "submit":
                case "button":
                    break;
            }
            break;
    }

    return data;
}

window.dataURItoBlob = function(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(",")[0].indexOf("base64") >= 0) byteString = atob(dataURI.split(",")[1]);
    else byteString = unescape(dataURI.split(",")[1]);
    // separate out the mime component
    var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: mimeString });
}

$(document).ready(function(){
    renderCart();
    $('#checkout-login').addClass('d-none');
    $('#checkout_coupon').addClass('d-none');
    $('#cbox-info').addClass('d-none');
    $('#ship-box-info').addClass('d-none');
});

$('#showlogin').on('click', function() {
    $('#checkout-login').toggleClass('d-none').animate('easeIn');
});

/*--- showlogin toggle function ----*/
$('body').on('click','#showcoupon', function() {
    $('#checkout_coupon').toggleClass('d-none').animate('easeIn');
});
/*--- showlogin toggle function ----*/
$('#cbox').on('click', function() {
    $('#cbox-info').toggleClass('d-none').animate('easeIn');
});

/*--- showlogin toggle function ----*/
$('#ship-box').on('click', function() {
    $('#ship-box-info').toggleClass('d-none').animate('easeIn');
});

function checkout_submit() {
    $('.checkout-area').css('filter','blur(2px)');
    $('.checkout-loader').css('display','block');
    $('html, body').scrollTop($(".checkout-area").offset().top);
    // event.preventDefault();
    const {form_values, form_inputs, form_data} = window.get_form_data(`#checkout_submission_form`);
    // console.log(form_values, form_inputs, form_data);

    fetch("/checkout", {
        method: "POST",
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        body: form_data
    }).then(async res => {
        let response = {}
        response.status = res.status
        response.data = await res.json();
        return response;
    }).then(async res => {
        if(res.status == 422) {
            // console.log(res.status);
            await $('html, body').scrollTop($(".checkout-area").offset().top);
            await $('.checkout-area').css('filter','unset');
            await $('.checkout-loader').css('display','none');
            window.s_alert("please fill in the required fields", "warning");
            setTimeout(() => {
                error_response(res.data);
            }, 500);
        }
        if(res.status === 200) {
            $('.checkout-area').css('filter','unset');
            $('.checkout-loader').css('display','none');
            location.href = "/thank-you?"+res.data;
        }
    })
}



async function bkash_checkout_submit(event) {
    const {form_values, form_inputs, form_data} = window.get_form_data(`#checkout_submission_form`);
    console.log(form_values, form_inputs, form_data);

    // inserting order data to the db first
    $('.checkout-area').css('filter','blur(2px)');
    $('.checkout-loader').css('display','block');
    $('html, body').scrollTop($(".checkout-area").offset().top);
    // event.preventDefault();
    // let formData = new FormData(event.target);

    fetch("/bkash-checkout", {
        method: "POST",
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        body: form_data
    }).then(async res => {
        let response = {}
        response.status = res.status
        response.data = await res.json();
        return response;
    }).then(async res => {
        if(res.status == 422) {
            // console.log(res.status);
            await $('html, body').scrollTop($(".checkout-area").offset().top);
            await $('.checkout-area').css('filter','unset');
            await $('.checkout-loader').css('display','none');
            window.s_alert("please fill in the required fields", "warning");
            setTimeout(() => {
                error_response(res.data);
            }, 500);
        }
        if(res.status === 200) {
            $('.checkout-area').css('filter','unset');
            $('.checkout-loader').css('display','none');
            ORDER_ID = res.data
            console.log(ORDER_ID);
            await $('#bKash_button').trigger('click');
        }
    })

    // calling the bkash payment gateway
}


// ssl commerce payment gateway
function sslCommerzePayment() {
    (function (window, document) {
        var loader = function () {
            var script = document.createElement("script"), tag = document.getElementsByTagName("script")[0];
            script.src = "https://sandbox.sslcommerz.com/embed.min.js?" + Math.random().toString(36).substring(7);
            tag.parentNode.insertBefore(script, tag);
        };

        window.addEventListener ? window.addEventListener("load", loader, false) : window.attachEvent("onload", loader);
    })(window, document);
}

function addToCart(product_id, qty=1) {
    fetch("/add_to_cart", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        body: JSON.stringify({
            id: product_id,
            qty: qty
        })
    }).then(async res => {
        let response = {}
        response.status = res.status
        response.data = await res.json();
        return response;
    }).then(res => {
        if(res.status === 200) {
            // error_response(res.data)
            window.s_alert(res.data.message, "success");
            // $(".cart-count").val(res.data.cart_count);
            $(".cart-count").html(res.data.cart_count);
            renderCart();
            // update_cart_count_html(res.data.cart_count);
            // Livewire.emit('cartAdded');
        }
    })
}

async function buyNow(product_id, qty=1) {
    await addToCart(product_id, qty=1);

    await window.location.replace('/checkout');
}

function renderCart() {
    $.ajax({
        url: "/cart_all",
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // console.log(data);
            $('#cart_sidebar').html(data.html);

        }
    });
}

function quick_view_add_to_cart(product_id) {
    Livewire.emit('viewProduct', product);
}

function login(params) {
    fetch("/website_login", {
        method: "POST",
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        body: formData
    }).then(async res => {
        let response = {}
        response.status = res.status
        response.data = await res.json();
        return response;
    }).then(res => {
        console.log(res);
        if(res.status === 422) {
            error_response(res.data)
        }
        if(res.status === 401) {
            $("#login_modal").click();
        }
        if(res.status === 200) {
            window.s_alert("success", "Review created successfully")
        }
    })
}

function register(params) {
    fetch("/website_login", {
        method: "POST",
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        body: formData
    }).then(async res => {
        let response = {}
        response.status = res.status
        response.data = await res.json();
        return response;
    }).then(res => {
        console.log(res);
        if(res.status === 422) {
            error_response(res.data)
        }
        if(res.status === 401) {
            $("#login_modal").click();
        }
        if(res.status === 200) {
            window.s_alert("success", "Review created successfully")
        }
    })
}

function reviewSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);

    fetch("/review_submit", {
        method: "POST",
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        body: formData
    }).then(async res => {
        let response = {}
        response.status = res.status
        response.data = await res.json();
        return response;
    }).then(res => {
        if(res.status === 422) {
            error_response(res.data)
        }
        if(res.status === 401) {
            $("#login_modal").click();
        }
        if(res.status === 200) {
            window.s_alert("success", "Review created successfully")
        }
    })

    document.getElementById("review_description").value = "";
}

$("#login_modal").addClass('d-none');
$('#bkash_btn').change(function () {
    $('#bkash_section').removeClass('d-none');
    $('#bank_section').addClass('d-none');
    $('#bkash_number').attr('required');
    $('#bkash_trx_id').attr('required');
});
$('#bank_transfer_btn').change(function () {
    $('#bkash_section').addClass('d-none');
    $('#bank_section').removeClass('d-none');
    $('#bank_ac_no').attr('required');
    $('#bank_trx_no').attr('required');
});
$('#cod_btn').change(function () {
    $('#bkash_section').addClass('d-none');
    $('#bank_section').addClass('d-none');
});

function error_response(data) {
    let object = data.data;
    window.render_error(object);
    throw data;
}

window.render_error = (object)=>{
    // console.log(data);
    $('.loader_body').removeClass('active');
    $('form button').prop('disabled',false);
    $('#backend_body .main_content').css({overflowY:'scroll'});
    // whatever you want to do with the error
    // console.log(error.response.data.errors);
    $(`label`).siblings(".text-danger").remove();
    $(`select`).siblings(".text-danger").remove();
    $(`input`).siblings(".text-danger").remove();
    $(`textarea`).siblings(".text-danger").remove();
    $('.form_errors').html('');

    let error_html = ``;

    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            if (document.getElementById(`${key}`)) {
                $(`#${key}`)
                    .parent("div")
                    .append(`<div class="text-danger">${element[0]}</div>`);
            } else {
                $(`input[name="${key}"]`)
                    .parent("div")
                    .append(`<div class="text-danger">${element[0]}</div>`);

                $(`select[name="${key}"]`)
                    .parent("div")
                    .append(`<div class="text-danger">${element[0]}</div>`);

                $(`input[name="${key}"]`).trigger("focus");

                $(`textarea[name="${key}"]`)
                    .parent("div")
                    .append(`<div class="text-danger">${element[0]}</div>`);

                $(`textarea[name="${key}"]`).trigger("focus");
            }
            // console.log({
            //     [key]: element,
            // });

            error_html += `
                <div class="alert alert_${key} my-1 mx-2 alert-danger pe-5 inverse alert-dismissible fade show" role="alert">
                    <i class="icon-alert txt-dark rounded-0"></i>
                    <div>${element}</div>
                    <button type="button" class="btn-close txt-light" data-bs-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"></span>
                    </button>
                </div>
            `;
        }
    }

    $('.form_errors').html(error_html);

    if (typeof data === "string") {
        // console.log("error", data);
    } else {
        // console.log(data);
    }

    // window.s_alert('error',data.err_message)
}

// function checkout_handling() {
//     $("#login_modal").addClass('d-none');
//     $('#bkash_btn').change(function () {
//         $('#bkash_section').removeClass('d-none');
//         $('#bank_section').addClass('d-none');
//         $('#bkash_number').attr('required');
//         $('#bkash_trx_id').attr('required');
//     });
//     $('#bank_transfer_btn').change(function () {
//         $('#bkash_section').addClass('d-none');
//         $('#bank_section').removeClass('d-none');
//         $('#bank_ac_no').attr('required');
//         $('#bank_trx_no').attr('required');
//     });
//     $('#cod_btn').change(function () {
//         $('#bkash_section').addClass('d-none');
//         $('#bank_section').addClass('d-none');
//     });
// }


// bkash script
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
    createRequest: async function(
        request
    ) { //request object is basically the paymentRequest object, automatically pushed by the script in createRequest method
        $('.checkout-area').css('filter','blur(2px)');
        $('.checkout-loader').css('display','block');
        console.log("create working !!", shipping_id, ORDER_ID)
        let request_data = {
            order_id: ORDER_ID,
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

                    bKash.create().onSuccess(data); //pass the whole response data in bKash.create().onSucess() method as a parameter
                    $('.checkout-area').css('filter','unset');
                    $('.checkout-loader').css('display','none');
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
