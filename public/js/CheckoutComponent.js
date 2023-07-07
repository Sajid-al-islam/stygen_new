"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["CheckoutComponent"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CheckoutComponent",
  data: function data() {
    return {
      form: {
        name: '',
        address: '',
        phone: '',
        email: '',
        shipping_name: '',
        shipping_address: '',
        shipping_phone: '',
        shipping_email: '',
        delivery_date: '',
        notes: '',
        personal_notes: '',
        user_id: '',
        bkash_number: '',
        transaction_id: '',
        account_password: '',
        payment_method: ''
      },
      product: '',
      errors: [],
      shippingAlert: '',
      shippingDisplay: false,
      createAccount: false,
      product_image: {},
      cartQty: 0,
      product_variations: '',
      cartMsg: '',
      qtyIncDec: '',
      cartQtyMsg: '',
      cashOnDelivery: true,
      shipping_charge_id: 0,
      shipping_charge: null,
      place_order: 'Place Order',
      checkoutLoader: false,
      totalOrderAmount: 0,
      coupon_code: '',
      coupon_msg: '',
      coupon_amount: 0,
      hasError: false,
      payment_type: "1",
      payment_method: '',
      online: false,
      Bkash: false,
      cash_on: true,
      packaging_id: 0,
      packaging_price: 0,
      card_id: 0,
      card_price: 0,
      isActive: 'false'
    };
  },
  methods: {
    openModal: function openModal() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shoppingCart").modal('show');
    },
    quickView: function quickView(product, image) {
      var _this = this;

      this.product = product;
      this.product_image = image; // this.product_variations = attributes

      axios.post('/get-variations', {
        'id': product.id
      }).then(function (result) {
        _this.all_attributes = result.data.all_attributes;
      })["catch"](function (error) {});
    },
    shippingMethod: function shippingMethod() {
      var _this2 = this;

      var shipping_id = this.shipping_charge_id;
      axios.post('get-shipping-charge', {
        'shipping_id': shipping_id
      }).then(function (result) {
        _this2.shipping_charge = result.data;

        _this2.changeObj();

        _this2.onlineValidation();
      })["catch"](function (error) {});
    },
    changeGreetingsCard: function changeGreetingsCard(e) {
      var options = e.target.options;

      if (options.selectedIndex > -1) {
        var price = options[options.selectedIndex].getAttribute('price');
        this.card_price = parseInt(price);
      }
    },
    changePackaging: function changePackaging(e) {
      var options = e.target.options;

      if (options.selectedIndex > -1) {
        var price = options[options.selectedIndex].getAttribute('price');
        this.packaging_price = parseInt(price);
      }
    },
    orderTotal: function orderTotal(cartTotal, shippingCharge, card_price, packaging_price) {
      if (this.coupon_amount > 0) {
        this.totalOrderAmount = cartTotal + shippingCharge + card_price + packaging_price - this.coupon_amount;
      } else {
        this.totalOrderAmount = cartTotal + shippingCharge + card_price + packaging_price;
      } // console.log(this.cart_products.sku);


      this.changeObj();
      return cartTotal + shippingCharge + card_price + packaging_price;
    },
    // CART ALL PRODUCTS
    productList: function productList() {
      this.$store.dispatch('cart/productList');
    },
    placeOrder: function placeOrder() {
      var _this3 = this;

      //Initial Checkout For Facebook
      var price = this.totalOrderAmount;
      var skus = this.product.id; // var skus       = this.cart_products.sku;

      fbq('track', 'InitiateCheckout', {
        value: price,
        currency: 'BDT',
        content_ids: skus,
        content_type: 'product'
      }); //Initial Checkout For Facebook

      this.place_order = 'Loading. please wait...';
      this.checkoutLoader = true;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.checkout-area').css('filter', 'blur(2px)');
      var formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("address", this.form.address);
      formData.append("phone", this.form.phone);
      formData.append("email", this.form.email);
      formData.append("shipping_name", this.form.shipping_name);
      formData.append("shipping_address", this.form.shipping_address);
      formData.append("shipping_phone", this.form.shipping_phone);
      formData.append("shipping_email", this.form.shipping_email);
      formData.append("shippingDisplay", this.shippingDisplay);
      formData.append("payment_method", this.payment_method);
      formData.append("transaction_id", this.form.transaction_id);
      formData.append("cashOnDelivery", this.cashOnDelivery);
      formData.append("createAccount", this.createAccount);
      formData.append("notes", this.form.notes);
      formData.append("shipping_charge_id", this.shipping_charge_id);
      formData.append("shipping_charge", this.shipping_charge);
      formData.append("delivery_date", this.form.delivery_date);
      formData.append("payment_type", this.payment_type);
      formData.append("coupon_code", this.coupon_code);
      formData.append("coupon_amount", this.coupon_amount);
      formData.append("personal_notes", this.form.personal_notes);
      formData.append("packaging_id", this.packaging_id);
      formData.append("packaging_price", this.packaging_price);
      formData.append("card_id", this.card_id);
      formData.append("card_price", this.card_price);

      if (this.form.id) {
        formData.append("user_id", this.form.id);
      } else {
        formData.append("user_id", this.form.user_id);
      }

      axios.post('cash-on-delivery', formData).then(function (result) {
        _this3.place_order = 'Place Order';
        _this3.checkoutLoader = false;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.checkout-area').css('filter', 'none');

        _this3.$store.dispatch('cart/productList');

        _this3.$router.push({
          path: 'thank-you',
          query: {
            order_id: result.data
          }
        }); //this.$router.push({name: 'userDashboard'})


        _this3.$message({
          showClose: true,
          message: 'Your order placed successfully.',
          type: 'success'
        });
      })["catch"](function (error) {
        _this3.place_order = 'Place Order';
        _this3.checkoutLoader = false;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.checkout-area').css('filter', 'none');
        _this3.errors = error.response.data.errors;
      });
    },
    getUser: function getUser() {
      this.$store.dispatch('user/getUser');
    },
    checkoutShippingList: function checkoutShippingList() {
      this.$store.dispatch('shipping/checkoutShippingList');
    },
    checkoutPackagingList: function checkoutPackagingList() {
      this.$store.dispatch('packaging/checkoutPackagingList');
    },
    checkoutCardList: function checkoutCardList() {
      this.$store.dispatch('card/checkoutCardList');
    },
    changeObj: function changeObj() {
      var obj = {};
      obj.cus_name = this.form.name;
      obj.cus_phone = this.form.phone;
      obj.cus_email = this.form.email;
      obj.cus_addr1 = this.form.address;
      obj.amount = this.totalOrderAmount;
      obj.notes = this.form.notes;
      obj.delivery_date = this.form.delivery_date;
      obj.shipping_charge = this.shipping_charge;
      obj.shipping_charge_id = this.shipping_charge_id;
      obj.payment_type = this.payment_type;
      obj.shippingDisplay = this.shippingDisplay;
      obj.createAccount = this.createAccount;
      obj.coupon_code = this.coupon_code;
      obj.coupon_amount = this.coupon_amount;
      obj.packaging_id = this.packaging_id;
      obj.packaging_price = this.packaging_price;
      obj.card_id = this.card_id;
      obj.card_price = this.card_price;
      obj.personal_notes = this.form.personal_notes;

      if (this.form.account_password != '') {
        obj.account_password = this.form.account_password;
      } else {
        obj.account_password = this.form.phone;
      }

      if (this.shippingDisplay === false) {
        obj.shipping_name = this.form.name;
        obj.shipping_phone = this.form.phone;
        obj.shipping_email = this.form.email;
        obj.shipping_address = this.form.address;
      } else {
        obj.shipping_name = this.form.shipping_name;
        obj.shipping_phone = this.form.shipping_phone;
        obj.shipping_email = this.form.shipping_email;
        obj.shipping_address = this.form.shipping_address;
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sslczPayBtn').prop('postdata', obj); //console.log(obj)
    },
    changeName: function changeName() {
      this.changeObj();
      this.onlineValidation();
    },
    changeAddress: function changeAddress() {
      this.changeObj();
      this.onlineValidation();
    },
    changeEmail: function changeEmail() {
      this.changeObj();
    },
    changePhone: function changePhone() {
      this.changeObj();
      this.onlineValidation();
    },
    changeNotes: function changeNotes() {
      this.changeObj();
    },
    changeDeliveryDate: function changeDeliveryDate() {
      this.changeObj();
    },
    addToCartAddon: function addToCartAddon(product) {
      var _this4 = this;

      //ADD TO CART EVENT FOR FACEBOOK
      if (product.sales_price && product.sales_price.length > 0) {
        var price = product.sales_price;
      } else {
        var price = product.regular_price;
      } // var product_sku = product.product_sku.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');


      var sku = product.id;
      fbq('track', 'AddToCart', {
        value: price,
        currency: 'BDT',
        content_ids: [sku],
        content_type: 'product'
      }); //ADD TO CART EVENT FOR FACEBOOK

      axios.post('/cart/add-to-cart', {
        'product': product,
        'qty': this.cartQty,
        'color': this.form.color,
        'size': this.form.size,
        'weight': this.form.weight
      }).then(function (result) {
        if (result.data == 'error') {
          _this4.cartMsg = true;

          _this4.$message({
            message: 'This product is out of stock.',
            type: 'error'
          });
        } else {
          _this4.openModal();

          _this4.cartMsg = false;

          _this4.$store.dispatch('cart/productList');

          _this4.$message({
            message: 'Product added to cart successfully.',
            type: 'success'
          });
        }
      })["catch"](function (error) {});
    },
    // changeShippingmethod() {
    //     this.changeObj();
    //     this.onlineValidation();
    // },
    cashOn: function cashOn() {
      this.online = false;
      this.Bkash = false;
      this.cash_on = true;
    },
    checkinfo: function checkinfo() {
      if (this.form.bkash_number && this.form.transaction_id != null) {
        this.isActive = true;
      }
    },
    bkash: function bkash() {
      var _this5 = this;

      this.online = false;
      this.cash_on = false;
      this.Bkash = true;

      if (this.cart_products.total > 0 && this.form.name != null && this.form.phone != null && this.form.address != null && this.shipping_charge != null) {
        //Initial Checkout For Facebook
        var price = this.totalOrderAmount;
        var skus = this.product.id; // var skus       = this.cart_products.sku;

        fbq('track', 'InitiateCheckout', {
          value: price,
          currency: 'BDT',
          content_ids: skus,
          content_type: 'product'
        }); //Initial Checkout For Facebook

        this.place_order = 'Loading. please wait...';
        this.checkoutLoader = true;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.checkout-area').css('filter', 'blur(2px)');
        var formData = new FormData();
        formData.append("name", this.form.name);
        formData.append("address", this.form.address);
        formData.append("phone", this.form.phone);
        formData.append("email", this.form.email);
        formData.append("shipping_name", this.form.shipping_name);
        formData.append("shipping_address", this.form.shipping_address);
        formData.append("shipping_phone", this.form.shipping_phone);
        formData.append("shipping_email", this.form.shipping_email);
        formData.append("shippingDisplay", this.shippingDisplay);
        formData.append("payment_method", this.payment_method);
        formData.append("transaction_id", this.form.transaction_id);
        formData.append("cashOnDelivery", this.cashOnDelivery);
        formData.append("createAccount", this.createAccount);
        formData.append("notes", this.form.notes);
        formData.append("shipping_charge_id", this.shipping_charge_id);
        formData.append("shipping_charge", this.shipping_charge);
        formData.append("delivery_date", this.form.delivery_date);
        formData.append("payment_type", this.payment_type);
        formData.append("coupon_code", this.coupon_code);
        formData.append("coupon_amount", this.coupon_amount);
        formData.append("personal_notes", this.form.personal_notes);
        formData.append("packaging_id", this.packaging_id);
        formData.append("packaging_price", this.packaging_price);
        formData.append("card_id", this.card_id);
        formData.append("card_price", this.card_price);

        if (this.form.id) {
          formData.append("user_id", this.form.id);
        } else {
          formData.append("user_id", this.form.user_id);
        }

        axios.post('order_data_bkash', formData).then(function (result) {
          _this5.place_order = 'Place Order';
          _this5.checkoutLoader = false;
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.checkout-area').css('filter', 'none');
          console.log(result);
          window.location.href = '/bkash_payment'; //this.$router.push({name: 'userDashboard'})

          _this5.$message({
            showClose: true,
            message: 'Redirecting to payment page',
            type: 'success'
          });
        })["catch"](function (error) {
          _this5.place_order = 'Place Order';
          _this5.checkoutLoader = false;
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.checkout-area').css('filter', 'none');
          _this5.errors = error.response.data.errors;
        });
      } else {
        this.$message({
          showClose: true,
          message: 'PLease fill in the required info!',
          type: 'error'
        });
      }
    },
    onlinePay: function onlinePay() {
      this.online = true;
      this.Bkash = false;
      this.cash_on = false;
      this.onlineValidation();
    },
    onlineValidation: function onlineValidation() {
      if (this.cart_products.total < 1000) {
        // console.log('your order < 1000');
        this.shippingAlert = 'your order amount should be at least 1000 tk to get free delivery';
        this.changeObj();

        if (this.shipping_charge != 0) {
          this.shippingAlert = '';
        }
      }

      if (this.form.name != "" && this.form.phone != "" && this.form.address != "" && this.shipping_charge_id != 0) {
        this.errors = {
          name: [],
          address: [],
          phone: [],
          shipping_charge_id: []
        };
      } else if (this.form.name != "" && this.form.phone == "" && this.form.address == "" && this.shipping_charge_id == 0) {
        this.errors = {
          name: [],
          address: ['The address field is required.'],
          phone: ['The phone field is required.'],
          shipping_charge_id: ['The shipping method field is required.']
        };
      } else if (this.form.name != "" && this.form.phone != "" && this.form.address == "" && this.shipping_charge_id == 0) {
        this.errors = {
          name: [],
          address: [],
          phone: ['The phone field is required.'],
          shipping_charge_id: ['The shipping method field is required.']
        };
      } else if (this.form.name != "" && this.form.phone != "" && this.form.address != "" && this.shipping_charge_id == 0) {
        this.errors = {
          name: [],
          address: [],
          phone: [],
          shipping_charge_id: ['The shipping method field is required.']
        };
      } else if (this.form.name == "" && this.form.phone != "" && this.form.address != "" && this.shipping_charge_id != 0) {
        this.errors = {
          name: ['The name field is required.'],
          address: [],
          phone: [],
          shipping_charge_id: []
        };
      } else if (this.form.name != "" && this.form.phone == "" && this.form.address != "" && this.shipping_charge_id != 0) {
        this.errors = {
          name: [],
          address: ['The address field is required.'],
          phone: [],
          shipping_charge_id: []
        };
      } else if (this.form.name == "" && this.form.phone == "" && this.form.address != "" && this.shipping_charge_id == 0) {
        this.errors = {
          name: ['The name field is required.'],
          address: [],
          phone: ['The phone field is required.'],
          shipping_charge_id: ['The shipping method field is required.']
        };
      } else if (this.form.name == "" && this.form.phone != "" && this.form.address == "" && this.shipping_charge_id == 0) {
        this.errors = {
          name: ['The name field is required.'],
          address: ['The address field is required.'],
          phone: [],
          shipping_charge_id: ['The shipping method field is required.']
        };
      } else if (this.form.name != "" && this.form.phone != "" && this.form.address == "" && this.shipping_charge_id != 0) {
        this.errors = {
          name: [],
          address: [],
          phone: ['The phone field is required.'],
          shipping_charge_id: []
        };
      } else if (this.form.name == "" && this.form.phone == "" && this.form.address == "" && this.shipping_charge_id != 0) {
        this.errors = {
          name: ['The name field is required.'],
          address: ['The address field is required.'],
          phone: ['The phone field is required.'],
          shipping_charge_id: []
        };
      } else if (this.form.name == "" && this.form.phone == "" && this.form.address == "" && this.shipping_charge_id == 0) {
        this.errors = {
          name: ['The name field is required.'],
          address: ['The address field is required.'],
          phone: ['The phone field is required.'],
          shipping_charge_id: ['The shipping method field is required.']
        };
      }
    },
    sslCommerzePayment: function sslCommerzePayment() {
      this.changeObj();

      (function (window, document) {
        var loader = function loader() {
          var script = document.createElement("script"),
              tag = document.getElementsByTagName("script")[0];
          script.src = "https://seamless-epay.sslcommerz.com/embed.min.js?" + Math.random().toString(36).substring(7); // USE THIS FOR LIVE
          //script.src = "https://sandbox.sslcommerz.com/embed.min.js?" + Math.random().toString(36).substring(7); // USE THIS FOR SANDBOX

          tag.parentNode.insertBefore(script, tag);
        };

        window.addEventListener ? window.addEventListener("load", loader, false) : window.attachEvent("onload", loader);
      })(window, document);
    },
    applyCoupon: function applyCoupon() {
      var _this6 = this;

      axios.post('apply-coupon', {
        coupon_code: this.coupon_code
      }).then(function (result) {
        if (result.data.error) {
          _this6.coupon_msg = result.data.error;
          _this6.hasError = true;
        }

        if (result.data.success) {
          _this6.changeObj();

          _this6.hasError = false;
          _this6.coupon_amount = result.data.coupon_amount;
          _this6.coupon_msg = result.data.success;
        } else {
          _this6.coupon_amount = 0;
        }
      })["catch"](function (error) {
        _this6.errors = error.response.data.errors;
      });
    }
  },
  computed: {
    // CART ALL PRODUCTS
    // filtershipping() {
    //     if(this.cart_products.total > 1000) {
    //         return this.shippings_charges.shipping_charge = this.shipping_charge.filter(this.shippings_charges.shipping_charge == 0)
    //     }
    // },
    cart_products: function cart_products() {
      return this.$store.getters['cart/productList'];
    },
    user: function user() {
      return this.$store.getters['user/getUserDetails'];
    },
    shippings_charges: function shippings_charges() {
      return this.$store.getters['shipping/sellerShippingList'];
    },
    packagings: function packagings() {
      return this.$store.getters['packaging/checkoutPackagingList'];
    },
    cards: function cards() {
      return this.$store.getters['card/checkoutCardList'];
    }
  },
  created: function created() {
    this.productList();
    this.getUser();
    this.checkoutShippingList();
    this.checkoutPackagingList();
    this.checkoutCardList();
    this.sslCommerzePayment();
  },
  mounted: function mounted() {},
  watch: {
    user: {
      handler: function handler(newVal, oldVal) {
        this.form = newVal;
        this.form.delivery_date = '';
        this.form.notes = '';
        this.form.personal_notes = '';
      },
      // IF OBJECT->OBJECT (NESTED)
      deep: true
    },
    '$route': {
      handler: function handler(to, from) {
        document.title = 'Checkout | Stygen';
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8f3afb60&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8f3afb60&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.add-on[data-v-8f3afb60] {\r\n    background-color: #5e2e87;\r\n    padding: 5px;\n}\n.selected[data-v-8f3afb60] {\r\n    border: 2px solid #5e2e87;\r\n    padding-right: 5px;\r\n    padding-left: 5px;\n}\n.bkash_img[data-v-8f3afb60] {\r\n    height: 90px;\n}\n.add-on h4[data-v-8f3afb60]{\r\n    margin-left: 5px;\r\n    padding-top: 3px;\n}\n.addtocart[data-v-8f3afb60] {\r\n    background-color: #5e2e87;\r\n    font-size: 12px;\r\n    text-transform: capitalize;\r\n    padding-left: 15px;\n}\n.addtocart i[data-v-8f3afb60] {\r\n    margin-right: 5px;\r\n    padding-left: 1px;\r\n    margin-right: 5px;\r\n    margin-left: -5px;\n}\n.payment_single i[data-v-8f3afb60] {\r\n    margin-right: 4px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8f3afb60&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8f3afb60&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_style_index_0_id_8f3afb60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckoutComponent.vue?vue&type=style&index=0&id=8f3afb60&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8f3afb60&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_style_index_0_id_8f3afb60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_style_index_0_id_8f3afb60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/frontend/checkout/CheckoutComponent.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/frontend/checkout/CheckoutComponent.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckoutComponent_vue_vue_type_template_id_8f3afb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutComponent.vue?vue&type=template&id=8f3afb60&scoped=true& */ "./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=template&id=8f3afb60&scoped=true&");
/* harmony import */ var _CheckoutComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckoutComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _CheckoutComponent_vue_vue_type_style_index_0_id_8f3afb60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckoutComponent.vue?vue&type=style&index=0&id=8f3afb60&scoped=true&lang=css& */ "./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8f3afb60&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CheckoutComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckoutComponent_vue_vue_type_template_id_8f3afb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CheckoutComponent_vue_vue_type_template_id_8f3afb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8f3afb60",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/checkout/CheckoutComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckoutComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8f3afb60&scoped=true&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8f3afb60&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_style_index_0_id_8f3afb60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckoutComponent.vue?vue&type=style&index=0&id=8f3afb60&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8f3afb60&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=template&id=8f3afb60&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=template&id=8f3afb60&scoped=true& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_template_id_8f3afb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_template_id_8f3afb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_template_id_8f3afb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckoutComponent.vue?vue&type=template&id=8f3afb60&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=template&id=8f3afb60&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=template&id=8f3afb60&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/CheckoutComponent.vue?vue&type=template&id=8f3afb60&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "checkout" } }, [
    _vm.checkoutLoader
      ? _c("div", { staticClass: "loading-checkout" })
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "checkout-area" }, [
      _c("div", { staticClass: "container checkout-page-main" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-6 col-12" }, [
            _c("form", { attrs: { action: "#" } }, [
              _c("div", { staticClass: "checkbox-form" }, [
                _c("h3", [_vm._v("Billing Details")]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "checkout-form-list" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.name,
                            expression: "form.name"
                          }
                        ],
                        attrs: { placeholder: "e.g. Rahim", type: "text" },
                        domProps: { value: _vm.form.name },
                        on: {
                          change: _vm.changeName,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "name", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors["name"]
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors["name"][0]))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "checkout-form-list" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.address,
                            expression: "form.address"
                          }
                        ],
                        attrs: {
                          placeholder: "e.g. House#1, Road#1, Dhaka",
                          type: "text"
                        },
                        domProps: { value: _vm.form.address },
                        on: {
                          change: _vm.changeAddress,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "address", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors["address"]
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors["address"][0]))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "checkout-form-list" }, [
                      _c("label", [_vm._v("Email Address")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.email,
                            expression: "form.email"
                          }
                        ],
                        attrs: {
                          placeholder: "e.g. example@exmple.com",
                          type: "email"
                        },
                        domProps: { value: _vm.form.email },
                        on: {
                          change: _vm.changeEmail,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "email", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "checkout-form-list" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.phone,
                            expression: "form.phone"
                          }
                        ],
                        attrs: {
                          type: "number",
                          placeholder: "e.g. 01xxxxxxxxx"
                        },
                        domProps: { value: _vm.form.phone },
                        on: {
                          change: _vm.changePhone,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "phone", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors["phone"]
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors["phone"][0]))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "checkout-form-list" }, [
                      _c("label", [_vm._v("Product Delivery Date (Optional)")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.delivery_date,
                            expression: "form.delivery_date"
                          }
                        ],
                        staticClass: "delivery-date",
                        attrs: { type: "date" },
                        domProps: { value: _vm.form.delivery_date },
                        on: {
                          change: _vm.changeDeliveryDate,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "delivery_date",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "order-notes" }, [
                      _c("div", { staticClass: "checkout-form-list" }, [
                        _c("label", [_vm._v("Special Notes (Optional)")]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.notes,
                              expression: "form.notes"
                            }
                          ],
                          attrs: {
                            id: "checkout-mess",
                            cols: "30",
                            rows: "10",
                            placeholder:
                              "Notes about your order, e.g. special notes for delivery."
                          },
                          domProps: { value: _vm.form.notes },
                          on: {
                            change: _vm.changeNotes,
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "notes", $event.target.value)
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  !_vm.user.id
                    ? _c("div", { staticClass: "col-md-12" }, [
                        _c("p", { staticClass: "new-account-text" }, [
                          _vm._v(
                            "For a better experience and order history, create an account with us"
                          )
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-12" }, [
                    !_vm.user.id
                      ? _c(
                          "div",
                          { staticClass: "checkout-form-list create-acc" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.createAccount,
                                  expression: "createAccount"
                                }
                              ],
                              attrs: { id: "cbox", type: "checkbox" },
                              domProps: {
                                checked: Array.isArray(_vm.createAccount)
                                  ? _vm._i(_vm.createAccount, null) > -1
                                  : _vm.createAccount
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.createAccount,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.createAccount = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.createAccount = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.createAccount = $$c
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", [_vm._v("Create an account?")])
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.createAccount
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "checkout-form-list create-account d-block",
                            attrs: { id: "cbox-info" }
                          },
                          [
                            _c("p", [
                              _vm._v(
                                "Create an account by entering the information below."
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(4),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.account_password,
                                  expression: "form.account_password"
                                }
                              ],
                              attrs: {
                                placeholder: "e.g. ********",
                                type: "password"
                              },
                              domProps: { value: _vm.form.account_password },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "account_password",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors["account_password"]
                              ? _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(_vm.errors["account_password"][0])
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "different-address" }, [
                  _c("div", { staticClass: "ship-different-title" }, [
                    _c("h3", [
                      _c("label", [_vm._v("Send this as a gift")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.shippingDisplay,
                            expression: "shippingDisplay"
                          }
                        ],
                        attrs: { id: "ship-box", type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(_vm.shippingDisplay)
                            ? _vm._i(_vm.shippingDisplay, null) > -1
                            : _vm.shippingDisplay
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.shippingDisplay,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  (_vm.shippingDisplay = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.shippingDisplay = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.shippingDisplay = $$c
                            }
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.shippingDisplay
                    ? _c(
                        "div",
                        {
                          staticClass: "row d-block",
                          attrs: { id: "ship-box-info" }
                        },
                        [
                          _c("div", { staticClass: "col-md-12" }, [
                            _c("div", { staticClass: "checkout-form-list" }, [
                              _vm._m(5),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.shipping_name,
                                    expression: "form.shipping_name"
                                  }
                                ],
                                attrs: {
                                  placeholder: "e.g. Rahim",
                                  type: "text"
                                },
                                domProps: { value: _vm.form.shipping_name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "shipping_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors["shipping_name"]
                                ? _c("span", { staticClass: "text-danger" }, [
                                    _vm._v(
                                      _vm._s(_vm.errors["shipping_name"][0])
                                    )
                                  ])
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-12" }, [
                            _c("div", { staticClass: "checkout-form-list" }, [
                              _vm._m(6),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.shipping_address,
                                    expression: "form.shipping_address"
                                  }
                                ],
                                attrs: {
                                  placeholder: "e.g. House#1, Road#1, Dhaka",
                                  type: "text"
                                },
                                domProps: { value: _vm.form.shipping_address },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "shipping_address",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors["shipping_address"]
                                ? _c("span", { staticClass: "text-danger" }, [
                                    _vm._v(
                                      _vm._s(_vm.errors["shipping_address"][0])
                                    )
                                  ])
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-12" }, [
                            _c("div", { staticClass: "checkout-form-list" }, [
                              _c("label", [_vm._v("Email Address")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.shipping_email,
                                    expression: "form.shipping_email"
                                  }
                                ],
                                attrs: {
                                  placeholder: "e.g. example@exmple.com",
                                  type: "email"
                                },
                                domProps: { value: _vm.form.shipping_email },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "shipping_email",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-12" }, [
                            _c("div", { staticClass: "checkout-form-list" }, [
                              _vm._m(7),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.shipping_phone,
                                    expression: "form.shipping_phone"
                                  }
                                ],
                                attrs: {
                                  placeholder: "e.g. 01xxxxxxxxx",
                                  type: "number"
                                },
                                domProps: { value: _vm.form.shipping_phone },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "shipping_phone",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors["shipping_phone"]
                                ? _c("span", { staticClass: "text-danger" }, [
                                    _vm._v(
                                      _vm._s(_vm.errors["shipping_phone"][0])
                                    )
                                  ])
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-12" }, [
                            _c("div", { staticClass: "order-notes" }, [
                              _c("div", { staticClass: "checkout-form-list" }, [
                                _c("label", [
                                  _vm._v(
                                    "Personal note for the recipient (Optional)"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.personal_notes,
                                      expression: "form.personal_notes"
                                    }
                                  ],
                                  attrs: {
                                    id: "checkout-mess",
                                    cols: "30",
                                    rows: "10",
                                    placeholder:
                                      "e.g. Personal notes for the recipient."
                                  },
                                  domProps: { value: _vm.form.personal_notes },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "personal_notes",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-12" }, [
                            _vm.cards && _vm.cards.length > 0
                              ? _c("div", [
                                  _c(
                                    "div",
                                    { staticClass: "country-select clearfix" },
                                    [
                                      _c("label", [
                                        _vm._v("Add Greetings Card (Optional)")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.card_id,
                                              expression: "card_id"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          on: {
                                            change: [
                                              function($event) {
                                                var $$selectedVal = Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function(o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function(o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                                _vm.card_id = $event.target
                                                  .multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              },
                                              function($event) {
                                                $event.preventDefault()
                                                return _vm.changeGreetingsCard(
                                                  $event
                                                )
                                              }
                                            ]
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "0" } },
                                            [_vm._v("Select Greetings Card")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.cards, function(card) {
                                            return _c(
                                              "option",
                                              {
                                                key: card.id,
                                                attrs: { price: card.price },
                                                domProps: { value: card.id }
                                              },
                                              [_vm._v(_vm._s(card.name))]
                                            )
                                          })
                                        ],
                                        2
                                      )
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-12" }, [
                            _vm.packagings && _vm.packagings.length > 0
                              ? _c("div", [
                                  _c(
                                    "div",
                                    { staticClass: "country-select clearfix" },
                                    [
                                      _c("label", [
                                        _vm._v("Packaging (Optional)")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.packaging_id,
                                              expression: "packaging_id"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          on: {
                                            change: [
                                              function($event) {
                                                var $$selectedVal = Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function(o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function(o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                                _vm.packaging_id = $event.target
                                                  .multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              },
                                              function($event) {
                                                $event.preventDefault()
                                                return _vm.changePackaging(
                                                  $event
                                                )
                                              }
                                            ]
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "0" } },
                                            [_vm._v("Select Packaging")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.packagings, function(
                                            packaging
                                          ) {
                                            return _c(
                                              "option",
                                              {
                                                key: packaging.id,
                                                attrs: {
                                                  price: packaging.price
                                                },
                                                domProps: {
                                                  value: packaging.id
                                                }
                                              },
                                              [_vm._v(_vm._s(packaging.name))]
                                            )
                                          })
                                        ],
                                        2
                                      )
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.shippings_charges && _vm.shippings_charges.length > 0
                    ? _c("div", [
                        _c("div", { staticClass: "country-select clearfix" }, [
                          _vm._m(8),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.shipping_charge_id,
                                  expression: "shipping_charge_id"
                                }
                              ],
                              staticClass: "form-control",
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.shipping_charge_id = $event.target
                                      .multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                  function($event) {
                                    $event.preventDefault()
                                    return _vm.shippingMethod($event)
                                  }
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "0" } }, [
                                _vm._v("Select Shipping Method")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.shippings_charges, function(
                                shippings_charge
                              ) {
                                return _c(
                                  "option",
                                  {
                                    key: shippings_charge.id,
                                    domProps: { value: shippings_charge.id }
                                  },
                                  [_vm._v(_vm._s(shippings_charge.name))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.shipping_charge_id || _vm.shippingAlert
                            ? _c("span", { staticClass: "text-danger" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.errors.shipping_charge_id[0] ||
                                      _vm.shippingAlert
                                  )
                                )
                              ])
                            : _vm._e()
                        ])
                      ])
                    : _vm._e()
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6 col-12" }, [
            _c("div", { staticClass: "row mt-3 mb-3" }, [
              _vm.cart_products.addon_products &&
              _vm.cart_products.addon_products.length > 0
                ? _c("div", { staticClass: "col-12" }, [
                    _vm._m(9),
                    _vm._v(" "),
                    _c("div", { staticClass: "addon-product-section mt-2" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "div",
                            { staticClass: "row" },
                            _vm._l(_vm.cart_products.addon_products, function(
                              addon_product
                            ) {
                              return _c(
                                "div",
                                {
                                  key: addon_product.id,
                                  staticClass: "col-md-4"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "single-product style-2" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "product-img" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              attrs: {
                                                href: "#open-modal",
                                                "data-toggle": "modal"
                                              },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.quickView(
                                                    addon_product.product,
                                                    addon_product.product
                                                      .featured_image
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("img", {
                                                staticClass: "first-img",
                                                attrs: {
                                                  src:
                                                    "/assets/uploads/product/" +
                                                    addon_product.product
                                                      .featured_image,
                                                  alt:
                                                    "addon_product.product_name"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("img", {
                                                staticClass: "hover-img",
                                                attrs: {
                                                  src:
                                                    "/assets/uploads/product/" +
                                                    addon_product.product
                                                      .featured_image,
                                                  alt:
                                                    "addon_product.product_name"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "product-content" },
                                        [
                                          _c("h4", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "#open-modal",
                                                  "data-toggle": "modal"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.quickView(
                                                      addon_product.product,
                                                      addon_product.product
                                                        .featured_image
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    addon_product.product
                                                      .product_name
                                                  )
                                                )
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "product-price" },
                                            [
                                              addon_product.product.sales_price
                                                ? _c(
                                                    "span",
                                                    { staticClass: "price" },
                                                    [
                                                      _c("del", [
                                                        _vm._v(
                                                          "৳" +
                                                            _vm._s(
                                                              _vm._f(
                                                                "numFormat"
                                                              )(
                                                                addon_product
                                                                  .product
                                                                  .regular_price
                                                              )
                                                            )
                                                        )
                                                      ]),
                                                      _vm._v(
                                                        " ৳" +
                                                          _vm._s(
                                                            _vm._f("numFormat")(
                                                              addon_product
                                                                .product
                                                                .sales_price
                                                            )
                                                          )
                                                      )
                                                    ]
                                                  )
                                                : _c(
                                                    "span",
                                                    { staticClass: "price" },
                                                    [
                                                      _vm._v(
                                                        "৳" +
                                                          _vm._s(
                                                            _vm._f("numFormat")(
                                                              addon_product
                                                                .product
                                                                .regular_price
                                                            )
                                                          )
                                                      )
                                                    ]
                                                  )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "row d-flex justify-content-center"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-flex flex-column"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "col-md-12 col-sm-12 "
                                                    },
                                                    [
                                                      _c("span", [
                                                        _c(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "btn btn-primary btn-sm pr-2 addtocart text-center",
                                                            attrs: {
                                                              href: "#"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                $event.preventDefault()
                                                                return _vm.addToCartAddon(
                                                                  addon_product.product
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "ion-bag"
                                                            }),
                                                            _vm._v("Add")
                                                          ]
                                                        )
                                                      ])
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ])
                      ])
                    ])
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "your-order" }, [
              _vm._m(10),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "coupon-checkout-content",
                  attrs: { id: "checkout_coupon" }
                },
                [
                  _c("div", { staticClass: "coupon-info" }, [
                    _c("form", { attrs: { action: "#" } }, [
                      _c("p", { staticClass: "checkout-coupon" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.coupon_code,
                              expression: "coupon_code"
                            }
                          ],
                          attrs: { placeholder: "Coupon code", type: "text" },
                          domProps: { value: _vm.coupon_code },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.coupon_code = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: { value: "Apply Coupon", type: "submit" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.applyCoupon($event)
                            }
                          }
                        }),
                        _c("br"),
                        _vm._v(" "),
                        _vm.coupon_msg && _vm.coupon_msg.length > 0
                          ? _c(
                              "span",
                              {
                                staticClass: "text-success",
                                class: { "text-danger": _vm.hasError }
                              },
                              [_vm._v(_vm._s(_vm.coupon_msg))]
                            )
                          : _vm._e()
                      ])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c("h3", { staticClass: "text-center" }, [_vm._v("Your order")]),
              _vm._v(" "),
              _c("div", { staticClass: "your-order-table table-responsive" }, [
                _c("table", { staticClass: "table" }, [
                  _vm._m(11),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.cart_products.products, function(product) {
                      return _c(
                        "tr",
                        { key: product.id, staticClass: "cart_item" },
                        [
                          _c("td", { staticClass: "cart-product-name" }, [
                            _vm._v(" " + _vm._s(product.name)),
                            _c("strong", { staticClass: "product-quantity" }, [
                              _vm._v(" × " + _vm._s(product.quantity))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "cart-product-total" }, [
                            _c("span", { staticClass: "amount" }, [
                              _vm._v(
                                "৳" + _vm._s(product.quantity * product.price)
                              )
                            ])
                          ])
                        ]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("tfoot", [
                    _c("tr", { staticClass: "cart-subtotal" }, [
                      _c("th", [_vm._v("Cart Subtotal")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("span", { staticClass: "amount" }, [
                          _vm._v("৳ " + _vm._s(_vm.cart_products.sub_total))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.cart_products.discount > 0
                      ? _c("tr", { staticClass: "cart-subtotal" }, [
                          _c("th", [_vm._v("Discount")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "amount" }, [
                              _vm._v(
                                "৳ " +
                                  _vm._s(
                                    _vm.cart_products.discount +
                                      _vm.coupon_amount
                                  )
                              )
                            ])
                          ])
                        ])
                      : _c(
                          "tr",
                          { staticClass: "cart-subtotal" },
                          [
                            _vm.coupon_amount > 0
                              ? [
                                  _c("th", [_vm._v("Discount")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c("span", { staticClass: "amount" }, [
                                      _vm._v("৳ " + _vm._s(_vm.coupon_amount))
                                    ])
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                    _vm._v(" "),
                    _vm.cart_products.vat > 0
                      ? _c("tr", { staticClass: "cart-subtotal" }, [
                          _c("th", [_vm._v("Vat")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "amount" }, [
                              _vm._v("৳ " + _vm._s(_vm.cart_products.vat))
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.shipping_charge
                      ? _c("tr", { staticClass: "cart-subtotal" }, [
                          _c("th", [_vm._v("Shipping Charge")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "span",
                              { staticClass: "amount shippingCharge" },
                              [_vm._v("৳ " + _vm._s(_vm.shipping_charge))]
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.card_price
                      ? _c("tr", { staticClass: "cart-subtotal" }, [
                          _c("th", [_vm._v("Greetings Card")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "span",
                              { staticClass: "amount shippingCharge" },
                              [_vm._v("৳ " + _vm._s(_vm.card_price))]
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.packaging_price
                      ? _c("tr", { staticClass: "cart-subtotal" }, [
                          _c("th", [_vm._v("Packaging")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "span",
                              { staticClass: "amount shippingCharge" },
                              [_vm._v("৳ " + _vm._s(_vm.packaging_price))]
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("tr", { staticClass: "order-total" }, [
                      _c("th", [_vm._v("Order Total")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("strong", [
                          _c("span", { staticClass: "amount" }, [
                            _vm._v(
                              "৳ " +
                                _vm._s(
                                  _vm.orderTotal(
                                    _vm.cart_products.total,
                                    _vm.shipping_charge,
                                    _vm.card_price,
                                    _vm.packaging_price
                                  ) - _vm.coupon_amount
                                )
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "payment-method mt-0" }, [
                _c("div", { staticClass: "payment-accordion" }, [
                  _c("div", { attrs: { id: "accordion" } }, [
                    _vm._m(12),
                    _vm._v(" "),
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "row mb-2" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-4 col-sm-12 col-12" },
                          [
                            _c(
                              "div",
                              { staticClass: "payment_single text-center" },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn",
                                    class: { selected: _vm.cash_on },
                                    attrs: {
                                      "data-toggle": "collapse",
                                      "data-target": "#cashOnDelivery",
                                      "aria-expanded": "true",
                                      "aria-controls": "cashOnDelivery"
                                    },
                                    on: { click: _vm.cashOn }
                                  },
                                  [
                                    _c("img", {
                                      staticClass:
                                        "img-fluid mx-auto d-block mb-2",
                                      attrs: {
                                        src:
                                          "assets/frontend/img/cart/cash-on-delivery.png"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm._m(13)
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                          _c(
                            "div",
                            { staticClass: "payment_single text-center" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "card-header",
                                  attrs: { id: "#payment-2" }
                                },
                                [
                                  _c("h5", { staticClass: "panel-title" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "btn",
                                        class: { selected: _vm.online },
                                        attrs: {
                                          "data-toggle": "collapse",
                                          "data-target": "#onlinePayment",
                                          "aria-expanded": "false",
                                          "aria-controls": "onlinePayment"
                                        },
                                        on: { click: _vm.onlinePay }
                                      },
                                      [
                                        _c("img", {
                                          staticClass:
                                            "img-fluid mx-auto d-block mb-2",
                                          attrs: {
                                            src:
                                              "assets/frontend/img/cart/secure.png"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm._m(14)
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                          _c(
                            "div",
                            { staticClass: "payment_single text-center" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "card-header",
                                  attrs: { id: "#payment-3" }
                                },
                                [
                                  _c("h5", { staticClass: "panel-title" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "btn collapsed",
                                        class: { selected: _vm.Bkash },
                                        on: {
                                          click: function($event) {
                                            return _vm.bkash()
                                          }
                                        }
                                      },
                                      [
                                        _c("img", {
                                          staticClass:
                                            "img-fluid mx-auto d-block bkash_img",
                                          attrs: {
                                            src:
                                              "assets/frontend/img/cart/bkash.svg"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm._m(15)
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card" }, [
                      _c(
                        "div",
                        {
                          staticClass: "collapse",
                          attrs: {
                            id: "onlinePayment",
                            "data-parent": "#accordion"
                          }
                        },
                        [
                          _c("div", { staticClass: "card-body" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn mln-btn mln-btn--border btn-block",
                                attrs: {
                                  id: "sslczPayBtn",
                                  token: "data",
                                  postdata: "data",
                                  order: "data",
                                  endpoint: "/pay-via-ajax"
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.sslCommerzePayment($event)
                                  }
                                }
                              },
                              [_vm._v("PAY NOW")]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "collapse show",
                          attrs: {
                            id: "cashOnDelivery",
                            "data-parent": "#accordion"
                          }
                        },
                        [
                          _c("div", { staticClass: "card-body" }, [
                            _vm.cart_products.total > 0
                              ? _c(
                                  "div",
                                  { staticClass: "order-button-payment" },
                                  [
                                    _c("input", {
                                      attrs: { type: "submit" },
                                      domProps: { value: _vm.place_order },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.placeOrder($event)
                                        }
                                      }
                                    })
                                  ]
                                )
                              : _vm._e()
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "open-modal",
          tabindex: "-1",
          role: "dialog",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(16),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-5" }, [
                    _c(
                      "div",
                      { staticClass: "single-product-img img-full" },
                      [
                        _vm.product.featured_image != ""
                          ? [
                              _c("img", {
                                staticClass: "first-img",
                                attrs: {
                                  src:
                                    "/assets/uploads/product/" +
                                    _vm.product_image,
                                  alt: _vm.product.product_name
                                }
                              })
                            ]
                          : [
                              _c("img", {
                                staticClass: "first-img",
                                attrs: {
                                  src:
                                    "/assets/frontend/img/icon/empty_product.jpeg"
                                }
                              })
                            ]
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "single-product-content" }, [
                      _c("h1", { staticClass: "single-product-name mb-0" }, [
                        _vm._v(_vm._s(_vm.product.product_name))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "single-product-reviews" }, [
                        _c(
                          "div",
                          { staticClass: "show-rating" },
                          [
                            _vm.product.average_ratting
                              ? _c("star-rating", {
                                  attrs: {
                                    rating: _vm.product.average_ratting,
                                    "show-rating": false,
                                    "read-only": true,
                                    increment: 0.01
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "single-product-price" }, [
                        _c("div", { staticClass: "product-discount" }, [
                          _vm.product.sales_price
                            ? _c("span", { staticClass: "regular-price" }, [
                                _c("del", [
                                  _vm._v(
                                    "৳" +
                                      _vm._s(
                                        _vm._f("numFormat")(
                                          _vm.product.regular_price
                                        )
                                      )
                                  )
                                ]),
                                _c("span", { staticClass: "price" }, [
                                  _vm._v(
                                    "৳" +
                                      _vm._s(
                                        _vm._f("numFormat")(
                                          _vm.product.sales_price
                                        )
                                      )
                                  )
                                ])
                              ])
                            : _c("span", { staticClass: "price" }, [
                                _vm._v(
                                  "৳" +
                                    _vm._s(
                                      _vm._f("numFormat")(
                                        _vm.product.regular_price
                                      )
                                    )
                                )
                              ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "product-info" }, [
                        _vm.product.short_description &&
                        _vm.product.short_description != "null"
                          ? _c("p", [
                              _c("span", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.product.short_description
                                  )
                                }
                              })
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.product.product_sku &&
                        _vm.product.product_sku != "null"
                          ? _c(
                              "p",
                              { staticClass: "mt-0 single-product-info" },
                              [
                                _c("b", [_vm._v("SKU:")]),
                                _vm._v(" " + _vm._s(_vm.product.product_sku))
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.product.brand
                          ? _c(
                              "p",
                              { staticClass: "mt-0 single-product-info" },
                              [
                                _c("b", [_vm._v("Brand:")]),
                                _vm._v(
                                  " " + _vm._s(_vm.product.brand.brand_name)
                                )
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "single-product-action" }, [
                        _c("form", { attrs: { action: "#" } }, [
                          _vm.product_variations &&
                          _vm.product_variations.length > 0
                            ? _c("span", [
                                _vm.all_attributes.color_count > 0
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "product-opts attribute-section"
                                      },
                                      [
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "product-opt-title"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                            Color\n                                                        "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "product-opt" },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "product-opt-col"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "form-check-inline"
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "attribute cf"
                                                        },
                                                        [
                                                          _c(
                                                            "section",
                                                            {
                                                              staticClass:
                                                                "plan cf"
                                                            },
                                                            _vm._l(
                                                              _vm.all_attributes
                                                                .colors,
                                                              function(
                                                                color,
                                                                index
                                                              ) {
                                                                return _c(
                                                                  "span",
                                                                  {
                                                                    key:
                                                                      color.color
                                                                  },
                                                                  [
                                                                    _c("span", [
                                                                      _c(
                                                                        "input",
                                                                        {
                                                                          directives: [
                                                                            {
                                                                              name:
                                                                                "model",
                                                                              rawName:
                                                                                "v-model",
                                                                              value:
                                                                                _vm
                                                                                  .form
                                                                                  .color,
                                                                              expression:
                                                                                "form.color"
                                                                            }
                                                                          ],
                                                                          staticClass:
                                                                            "colorCls",
                                                                          attrs: {
                                                                            type:
                                                                              "radio",
                                                                            id:
                                                                              "color" +
                                                                              index,
                                                                            "data-attr":
                                                                              "Color"
                                                                          },
                                                                          domProps: {
                                                                            value:
                                                                              color.color,
                                                                            checked: _vm._q(
                                                                              _vm
                                                                                .form
                                                                                .color,
                                                                              color.color
                                                                            )
                                                                          },
                                                                          on: {
                                                                            change: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.$set(
                                                                                _vm.form,
                                                                                "color",
                                                                                color.color
                                                                              )
                                                                            }
                                                                          }
                                                                        }
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "label",
                                                                        {
                                                                          staticClass:
                                                                            "free-label four col",
                                                                          style:
                                                                            "background:" +
                                                                            color.color_code,
                                                                          attrs: {
                                                                            for:
                                                                              "color" +
                                                                              index,
                                                                            title:
                                                                              color.color
                                                                          }
                                                                        }
                                                                      )
                                                                    ])
                                                                  ]
                                                                )
                                                              }
                                                            ),
                                                            0
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.color_msg
                                            ? _c(
                                                "span",
                                                { staticClass: "text-danger" },
                                                [_vm._v("Please select color")]
                                              )
                                            : _vm._e()
                                        ]
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.all_attributes.size_count > 0
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "product-opts attribute-section"
                                      },
                                      [
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "product-opt-title"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                            Size\n                                                        "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "product-opt" },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "product-opt-col"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "form-check-inline"
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "attribute cf"
                                                        },
                                                        [
                                                          _c(
                                                            "section",
                                                            {
                                                              staticClass:
                                                                "plan cf"
                                                            },
                                                            _vm._l(
                                                              _vm.all_attributes
                                                                .sizes,
                                                              function(
                                                                size,
                                                                index
                                                              ) {
                                                                return _c(
                                                                  "span",
                                                                  {
                                                                    key:
                                                                      size.size
                                                                  },
                                                                  [
                                                                    _c("span", [
                                                                      _c(
                                                                        "input",
                                                                        {
                                                                          directives: [
                                                                            {
                                                                              name:
                                                                                "model",
                                                                              rawName:
                                                                                "v-model",
                                                                              value:
                                                                                _vm
                                                                                  .form
                                                                                  .size,
                                                                              expression:
                                                                                "form.size"
                                                                            }
                                                                          ],
                                                                          staticClass:
                                                                            "colorCls",
                                                                          attrs: {
                                                                            type:
                                                                              "radio",
                                                                            id:
                                                                              "size" +
                                                                              index,
                                                                            "data-attr":
                                                                              "Size"
                                                                          },
                                                                          domProps: {
                                                                            value:
                                                                              size.size,
                                                                            checked: _vm._q(
                                                                              _vm
                                                                                .form
                                                                                .size,
                                                                              size.size
                                                                            )
                                                                          },
                                                                          on: {
                                                                            change: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.$set(
                                                                                _vm.form,
                                                                                "size",
                                                                                size.size
                                                                              )
                                                                            }
                                                                          }
                                                                        }
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "label",
                                                                        {
                                                                          staticClass:
                                                                            "free-label four col",
                                                                          attrs: {
                                                                            for:
                                                                              "size" +
                                                                              index,
                                                                            title:
                                                                              size.size
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            _vm._s(
                                                                              size.size
                                                                            )
                                                                          )
                                                                        ]
                                                                      )
                                                                    ])
                                                                  ]
                                                                )
                                                              }
                                                            ),
                                                            0
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.size_msg
                                            ? _c(
                                                "span",
                                                { staticClass: "text-danger" },
                                                [_vm._v("Please select size")]
                                              )
                                            : _vm._e()
                                        ]
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.all_attributes.weight_count > 0
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "product-opts attribute-section"
                                      },
                                      [
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "product-opt-title"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                        Weight\n                                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "product-opt" },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "product-opt-col"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "form-check-inline"
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "attribute cf"
                                                        },
                                                        [
                                                          _c(
                                                            "section",
                                                            {
                                                              staticClass:
                                                                "plan cf"
                                                            },
                                                            _vm._l(
                                                              _vm.all_attributes
                                                                .weights,
                                                              function(
                                                                weight,
                                                                index
                                                              ) {
                                                                return _c(
                                                                  "span",
                                                                  {
                                                                    key:
                                                                      weight.weight
                                                                  },
                                                                  [
                                                                    _c("span", [
                                                                      _c(
                                                                        "input",
                                                                        {
                                                                          directives: [
                                                                            {
                                                                              name:
                                                                                "model",
                                                                              rawName:
                                                                                "v-model",
                                                                              value:
                                                                                _vm
                                                                                  .form
                                                                                  .weight,
                                                                              expression:
                                                                                "form.weight"
                                                                            }
                                                                          ],
                                                                          staticClass:
                                                                            "colorCls",
                                                                          attrs: {
                                                                            type:
                                                                              "radio",
                                                                            id:
                                                                              "weight" +
                                                                              index,
                                                                            "data-attr":
                                                                              "Weight"
                                                                          },
                                                                          domProps: {
                                                                            value:
                                                                              weight.weight,
                                                                            checked: _vm._q(
                                                                              _vm
                                                                                .form
                                                                                .weight,
                                                                              weight.weight
                                                                            )
                                                                          },
                                                                          on: {
                                                                            change: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.$set(
                                                                                _vm.form,
                                                                                "weight",
                                                                                weight.weight
                                                                              )
                                                                            }
                                                                          }
                                                                        }
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "label",
                                                                        {
                                                                          staticClass:
                                                                            "free-label four col",
                                                                          attrs: {
                                                                            for:
                                                                              "weight" +
                                                                              index,
                                                                            title:
                                                                              weight.weight
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            _vm._s(
                                                                              weight.weight
                                                                            )
                                                                          )
                                                                        ]
                                                                      )
                                                                    ])
                                                                  ]
                                                                )
                                                              }
                                                            ),
                                                            0
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.weight_msg
                                            ? _c(
                                                "span",
                                                { staticClass: "text-danger" },
                                                [_vm._v("Please select weight")]
                                              )
                                            : _vm._e()
                                        ]
                                      ],
                                      2
                                    )
                                  : _vm._e()
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.cartMsg
                            ? _c("span", { staticClass: "text-danger" }, [
                                _vm._v("This product is out of stock.")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "product-add-to-cart" }, [
                            _c("div", { staticClass: "add mt-4" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "add-to-cart",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.addToCartAddon(_vm.product)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "zmdi zmdi-shopping-cart-plus"
                                  }),
                                  _vm._v(" add-to-cart")
                                ]
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" })
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "coupon-accordion" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Full Name "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Address "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Phone  "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Account password  "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Full Name "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Address "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Phone  "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Shipping Method "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center add-on" }, [
      _c("h4", { staticClass: "text-white ml-2 mb-2 mt-2" }, [
        _vm._v("Addons:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "CouponCss mb-4" }, [
      _vm._v("Have a coupon ? "),
      _c("span", { attrs: { id: "showcoupon" } }, [
        _vm._v(" Click here to enter your code")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "cart-product-name" }, [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", { staticClass: "cart-product-total" }, [_vm._v("Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("Select a Payment Method")]),
      _vm._v(" "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fas fa-truck" }),
      _c("b", [_vm._v("Cash On Delivery")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fas fa-money-check" }),
      _c("b", [_vm._v("Online Payment")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("b", [_vm._v("Bkash")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);