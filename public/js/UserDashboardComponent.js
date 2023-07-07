"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["UserDashboardComponent"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/order/DownloadComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/order/DownloadComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "DownloadComponent",
  data: function data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    order_downloads: function order_downloads() {
      return this.$store.getters['order/user_orders'];
    }
  },
  methods: {
    user_orders: function user_orders() {
      this.$store.dispatch('order/user_orders', this.currentPage);
    },
    paginationChange: function paginationChange() {
      this.$store.dispatch('order/user_orders', this.currentPage);
    },
    invoiceDownload: function invoiceDownload(id) {
      axios({
        url: '/user/invoice-download/' + id,
        method: 'GET',
        responseType: 'blob'
      }).then(function (response) {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', 'invoice-' + id + '.pdf');
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    }
  },
  created: function created() {
    this.user_orders();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/order/OrdersComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/order/OrdersComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "OrdersComponent",
  data: function data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    user: function user() {
      return this.$store.getters['user/getUserDetails'];
    },
    orders: function orders() {
      return this.$store.getters['order/user_orders'];
    }
  },
  methods: {
    user_orders: function user_orders() {
      this.$store.dispatch('order/user_orders', this.currentPage);
    },
    paginationChange: function paginationChange() {
      this.$store.dispatch('order/user_orders', this.currentPage);
    },
    getUser: function getUser() {
      this.$store.dispatch('user/getUser');
    },
    userLogout: function userLogout() {
      this.$store.dispatch('user/userLogout');
      localStorage.removeItem('userLoggedIn');
      this.$router.push({
        name: 'landing'
      });
      this.$message({
        message: 'You have logged out.',
        type: 'success'
      });
    }
  },
  created: function created() {
    this.getUser();
    this.user_orders();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/user/UserDashboardComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/user/UserDashboardComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _order_OrdersComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../order/OrdersComponent */ "./resources/js/components/frontend/order/OrdersComponent.vue");
/* harmony import */ var _wishlist_DashboardWishlistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wishlist/DashboardWishlistComponent */ "./resources/js/components/frontend/wishlist/DashboardWishlistComponent.vue");
/* harmony import */ var _order_DownloadComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order/DownloadComponent */ "./resources/js/components/frontend/order/DownloadComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import GameComponent from "../Games/GameComponent";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UserDashboardComponent",
  components: {
    OrdersComponent: _order_OrdersComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashboardWishlistComponent: _wishlist_DashboardWishlistComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    DownloadComponent: _order_DownloadComponent__WEBPACK_IMPORTED_MODULE_2__["default"] // GameComponent

  },
  data: function data() {
    return {
      errors: {},
      form: {
        address: ''
      }
    };
  },
  computed: {
    user: function user() {
      return this.$store.getters['user/getUserDetails'];
    }
  },
  methods: {
    getUser: function getUser() {
      this.$store.dispatch('user/getUser');
    },
    userLogout: function userLogout() {
      this.$store.dispatch('user/userLogout');
      localStorage.removeItem('userLoggedIn');
      this.$router.push({
        name: 'landing'
      });
      this.$message({
        message: 'You have logged out.',
        type: 'success'
      });
    },
    updateAddress: function updateAddress() {
      var _this = this;

      axios.post('/user/update-address', {
        'address': this.form.address
      }).then(function (result) {
        _this.getUser();

        _this.$message({
          message: 'Address updated Successfully.',
          type: 'success'
        });
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getUser();
  },
  watch: {
    user: function user() {
      this.form.address = this.user.address;
    },
    '$route': {
      handler: function handler(to, from) {
        document.title = 'Dashboard | Stygen';
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/wishlist/DashboardWishlistComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/wishlist/DashboardWishlistComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "DashboardWishlistComponent",
  data: function data() {
    return {
      currentPage: 1,
      cartQty: 1
    };
  },
  computed: {
    user: function user() {
      return this.$store.getters['user/getUserDetails'];
    },
    wishlists: function wishlists() {
      return this.$store.getters['wishlist/getWishlist'];
    }
  },
  methods: {
    getWishlist: function getWishlist() {
      this.$store.dispatch('wishlist/getWishlist', this.currentPage);
    },
    paginationChange: function paginationChange() {
      this.$store.dispatch('wishlist/getWishlist', this.currentPage);
    },
    addToCart: function addToCart(product) {
      var _this = this;

      axios.post('/cart/add-to-cart', {
        'product': product,
        'qty': this.cartQty
      }).then(function (result) {
        _this.$store.dispatch('cart/productList');

        _this.$message({
          message: 'Product added to cart successfully.',
          type: 'success'
        });
      })["catch"](function (error) {});
    },
    wishlistDelete: function wishlistDelete(id) {
      var _this2 = this;

      axios["delete"]("/user/wishlist/".concat(id)).then(function (result) {
        _this2.getWishlist();

        _this2.$message({
          message: 'wishlist deleted successfully.',
          type: 'success'
        });
      })["catch"](function (error) {});
    },
    getUser: function getUser() {
      this.$store.dispatch('user/getUser');
    },
    userLogout: function userLogout() {
      this.$store.dispatch('user/userLogout');
      localStorage.removeItem('userLoggedIn');
      this.$router.push({
        name: 'landing'
      });
      this.$message({
        message: 'You have logged out.',
        type: 'success'
      });
    }
  },
  created: function created() {
    this.getUser();
    this.getWishlist();
  }
});

/***/ }),

/***/ "./resources/js/components/frontend/order/DownloadComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/frontend/order/DownloadComponent.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DownloadComponent_vue_vue_type_template_id_bc6c0efc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DownloadComponent.vue?vue&type=template&id=bc6c0efc&scoped=true& */ "./resources/js/components/frontend/order/DownloadComponent.vue?vue&type=template&id=bc6c0efc&scoped=true&");
/* harmony import */ var _DownloadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DownloadComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/order/DownloadComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DownloadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DownloadComponent_vue_vue_type_template_id_bc6c0efc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DownloadComponent_vue_vue_type_template_id_bc6c0efc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bc6c0efc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/order/DownloadComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/order/OrdersComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/frontend/order/OrdersComponent.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrdersComponent_vue_vue_type_template_id_3a3b9e85_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrdersComponent.vue?vue&type=template&id=3a3b9e85&scoped=true& */ "./resources/js/components/frontend/order/OrdersComponent.vue?vue&type=template&id=3a3b9e85&scoped=true&");
/* harmony import */ var _OrdersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrdersComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/order/OrdersComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrdersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrdersComponent_vue_vue_type_template_id_3a3b9e85_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _OrdersComponent_vue_vue_type_template_id_3a3b9e85_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3a3b9e85",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/order/OrdersComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/user/UserDashboardComponent.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/frontend/user/UserDashboardComponent.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserDashboardComponent_vue_vue_type_template_id_4d530da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDashboardComponent.vue?vue&type=template&id=4d530da6&scoped=true& */ "./resources/js/components/frontend/user/UserDashboardComponent.vue?vue&type=template&id=4d530da6&scoped=true&");
/* harmony import */ var _UserDashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDashboardComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/user/UserDashboardComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserDashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserDashboardComponent_vue_vue_type_template_id_4d530da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserDashboardComponent_vue_vue_type_template_id_4d530da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4d530da6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/user/UserDashboardComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/wishlist/DashboardWishlistComponent.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/frontend/wishlist/DashboardWishlistComponent.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashboardWishlistComponent_vue_vue_type_template_id_70cd34fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardWishlistComponent.vue?vue&type=template&id=70cd34fc&scoped=true& */ "./resources/js/components/frontend/wishlist/DashboardWishlistComponent.vue?vue&type=template&id=70cd34fc&scoped=true&");
/* harmony import */ var _DashboardWishlistComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardWishlistComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/wishlist/DashboardWishlistComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardWishlistComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardWishlistComponent_vue_vue_type_template_id_70cd34fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DashboardWishlistComponent_vue_vue_type_template_id_70cd34fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "70cd34fc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/wishlist/DashboardWishlistComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/order/DownloadComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/frontend/order/DownloadComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DownloadComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/order/DownloadComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/order/OrdersComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/frontend/order/OrdersComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrdersComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/order/OrdersComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/user/UserDashboardComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/frontend/user/UserDashboardComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDashboardComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/user/UserDashboardComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/wishlist/DashboardWishlistComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/frontend/wishlist/DashboardWishlistComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardWishlistComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardWishlistComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/wishlist/DashboardWishlistComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardWishlistComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/order/DownloadComponent.vue?vue&type=template&id=bc6c0efc&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/order/DownloadComponent.vue?vue&type=template&id=bc6c0efc&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadComponent_vue_vue_type_template_id_bc6c0efc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadComponent_vue_vue_type_template_id_bc6c0efc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadComponent_vue_vue_type_template_id_bc6c0efc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DownloadComponent.vue?vue&type=template&id=bc6c0efc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/order/DownloadComponent.vue?vue&type=template&id=bc6c0efc&scoped=true&");


/***/ }),

/***/ "./resources/js/components/frontend/order/OrdersComponent.vue?vue&type=template&id=3a3b9e85&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/order/OrdersComponent.vue?vue&type=template&id=3a3b9e85&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersComponent_vue_vue_type_template_id_3a3b9e85_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersComponent_vue_vue_type_template_id_3a3b9e85_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersComponent_vue_vue_type_template_id_3a3b9e85_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrdersComponent.vue?vue&type=template&id=3a3b9e85&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/order/OrdersComponent.vue?vue&type=template&id=3a3b9e85&scoped=true&");


/***/ }),

/***/ "./resources/js/components/frontend/user/UserDashboardComponent.vue?vue&type=template&id=4d530da6&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/user/UserDashboardComponent.vue?vue&type=template&id=4d530da6&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashboardComponent_vue_vue_type_template_id_4d530da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashboardComponent_vue_vue_type_template_id_4d530da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashboardComponent_vue_vue_type_template_id_4d530da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDashboardComponent.vue?vue&type=template&id=4d530da6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/user/UserDashboardComponent.vue?vue&type=template&id=4d530da6&scoped=true&");


/***/ }),

/***/ "./resources/js/components/frontend/wishlist/DashboardWishlistComponent.vue?vue&type=template&id=70cd34fc&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/wishlist/DashboardWishlistComponent.vue?vue&type=template&id=70cd34fc&scoped=true& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardWishlistComponent_vue_vue_type_template_id_70cd34fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardWishlistComponent_vue_vue_type_template_id_70cd34fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardWishlistComponent_vue_vue_type_template_id_70cd34fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardWishlistComponent.vue?vue&type=template&id=70cd34fc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/wishlist/DashboardWishlistComponent.vue?vue&type=template&id=70cd34fc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/order/DownloadComponent.vue?vue&type=template&id=bc6c0efc&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/order/DownloadComponent.vue?vue&type=template&id=bc6c0efc&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "download_order" } }, [
    _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.order_downloads.data, function(order) {
            return _c("tr", { key: order.id }, [
              _c("td", [_vm._v(_vm._s(order.invoice_no))]),
              _vm._v(" "),
              _c("td", [
                _vm._v(_vm._s(_vm._f("timeFormat")(order.invoice_date)))
              ]),
              _vm._v(" "),
              _c("td", [
                _c("span", { staticClass: "badge badge-success" }, [
                  _vm._v(_vm._s(order.order_status))
                ])
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(order.total_amount))]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "a",
                  {
                    staticClass: "view",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.invoiceDownload(order.id)
                      }
                    }
                  },
                  [_vm._v("Download")]
                )
              ])
            ])
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "product__pagination text-center" },
      [
        _c("el-pagination", {
          staticClass: "text-center mt-3",
          attrs: {
            background: "",
            "current-page": _vm.currentPage,
            "page-size": _vm.order_downloads.per_page,
            layout: "prev, pager, next",
            total: _vm.order_downloads.total
          },
          on: {
            "current-change": _vm.paginationChange,
            "update:currentPage": function($event) {
              _vm.currentPage = $event
            },
            "update:current-page": function($event) {
              _vm.currentPage = $event
            }
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Invoice#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total (৳)")]),
        _vm._v(" "),
        _c("th", [_vm._v("Invoice")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/order/OrdersComponent.vue?vue&type=template&id=3a3b9e85&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/order/OrdersComponent.vue?vue&type=template&id=3a3b9e85&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "orders" } }, [
    _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.orders.data, function(order) {
            return _c("tr", { key: order.id }, [
              _c("td", [_vm._v(_vm._s(order.invoice_no))]),
              _vm._v(" "),
              _c("td", [
                _vm._v(_vm._s(_vm._f("timeFormat")(order.invoice_date)))
              ]),
              _vm._v(" "),
              _c("td", [
                _c("span", { staticClass: "badge badge-success" }, [
                  _vm._v(_vm._s(order.order_status))
                ])
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(order.total_amount))])
            ])
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "product__pagination text-center" },
      [
        _c("el-pagination", {
          staticClass: "text-center mt-3",
          attrs: {
            background: "",
            "current-page": _vm.currentPage,
            "page-size": _vm.orders.per_page,
            layout: "prev, pager, next",
            total: _vm.orders.total
          },
          on: {
            "current-change": _vm.paginationChange,
            "update:currentPage": function($event) {
              _vm.currentPage = $event
            },
            "update:current-page": function($event) {
              _vm.currentPage = $event
            }
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Invoice#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total (৳)")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/user/UserDashboardComponent.vue?vue&type=template&id=4d530da6&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/user/UserDashboardComponent.vue?vue&type=template&id=4d530da6&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "user_dashboard" } }, [
    _c("div", { staticClass: "breadcrumb-area" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "breadcrumb-content text-center" }, [
              _c("ul", [
                _c(
                  "li",
                  [
                    _c("router-link", { attrs: { to: { name: "landing" } } }, [
                      _vm._v("Home")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", { staticClass: "active" }, [_vm._v("My Account")])
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "my-account white-bg mt-4" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "account-dashboard" }, [
          _c("div", { staticClass: "dashboard-upper-info" }, [
            _c("div", { staticClass: "row align-items-center no-gutters" }, [
              _c("div", { staticClass: "col-lg-3 col-md-12" }, [
                _c("div", { staticClass: "d-single-info" }, [
                  _c("p", { staticClass: "user-name" }, [
                    _vm._v("Hello "),
                    _c("span", [_vm._v(_vm._s(_vm.user.name))])
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v("(not " + _vm._s(_vm.user.name) + "? "),
                    _c(
                      "a",
                      {
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.userLogout()
                          }
                        }
                      },
                      [_vm._v("Log Out")]
                    ),
                    _vm._v(")")
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-2 col-md-12" }, [
                _c(
                  "div",
                  { staticClass: "d-single-info text-lg-center" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "view-cart",
                        attrs: { to: { name: "cartView" } }
                      },
                      [
                        _c("i", { staticClass: "fa fa-cart-plus" }),
                        _vm._v("view cart")
                      ]
                    )
                  ],
                  1
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12 col-lg-2" }, [
              _c(
                "ul",
                {
                  staticClass: "nav flex-column dashboard-list",
                  attrs: { role: "tablist" }
                },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.userLogout($event)
                          }
                        }
                      },
                      [_vm._v("logout")]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12 col-lg-10" }, [
              _c("div", { staticClass: "tab-content dashboard-content" }, [
                _vm._m(7),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane fade", attrs: { id: "orders" } },
                  [
                    _c("h3", [_vm._v("Orders")]),
                    _vm._v(" "),
                    _c("orders-component")
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane fade", attrs: { id: "downloads" } },
                  [
                    _c("h3", [_vm._v("Downloads")]),
                    _vm._v(" "),
                    _c("download-component")
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane", attrs: { id: "address" } },
                  [
                    _c("p", [
                      _vm._v(
                        "The following addresses will be used on the checkout page by default."
                      )
                    ]),
                    _vm._v(" "),
                    _c("h4", { staticClass: "billing-address" }, [
                      _vm._v("Billing address")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "checkout-form-list" }, [
                          _vm._m(8),
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
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "address",
                                  $event.target.value
                                )
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
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "view",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.updateAddress($event)
                          }
                        }
                      },
                      [_vm._v("Update")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane fade", attrs: { id: "wishlist" } },
                  [
                    _c("h3", [_vm._v("Wishlists")]),
                    _vm._v(" "),
                    _c("dashboard-wishlist-component")
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-4 col-md-12" }, [
      _c("div", { staticClass: "d-single-info" }, [
        _c("p", [_vm._v("Need Assistance? Call at:")]),
        _vm._v(" "),
        _c("p", [_vm._v("+880 1971-971520")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-12" }, [
      _c("div", { staticClass: "d-single-info" }, [
        _c("p", [_vm._v("E-mail them at ")]),
        _vm._v(" "),
        _c("p", [_vm._v("contact@stygen.gift")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        {
          staticClass: "nav-link active",
          attrs: { "data-toggle": "tab", href: "#dashboard" }
        },
        [_vm._v("Dashboard")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        {
          staticClass: "nav-link",
          attrs: { "data-toggle": "tab", href: "#orders" }
        },
        [_vm._v("Orders")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        {
          staticClass: "nav-link",
          attrs: { "data-toggle": "tab", href: "#downloads" }
        },
        [_vm._v("Downloads")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        {
          staticClass: "nav-link",
          attrs: { "data-toggle": "tab", href: "#address" }
        },
        [_vm._v("Addresses")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        {
          staticClass: "nav-link",
          attrs: { "data-toggle": "tab", href: "#wishlist" }
        },
        [_vm._v("Wishlist")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "tab-pane fade show active", attrs: { id: "dashboard" } },
      [
        _c("h3", [_vm._v("Dashboard ")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details."
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Address "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/wishlist/DashboardWishlistComponent.vue?vue&type=template&id=70cd34fc&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/wishlist/DashboardWishlistComponent.vue?vue&type=template&id=70cd34fc&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "dashboard_wishlist" } }, [
    _c("div", { staticClass: "wishlist-area mt-4" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("form", { attrs: { action: "#" } }, [
              _c("div", { staticClass: "table-content table-responsive" }, [
                _c("table", { staticClass: "table" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.wishlists.data, function(wishlist) {
                      return _c("tr", { key: wishlist.id }, [
                        _c("td", { staticClass: "picaboo-product-remove" }, [
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.wishlistDelete(wishlist.id)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fa fa-times" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "picaboo-product-thumbnail" }, [
                          _c("a", { attrs: { href: "#" } }, [
                            _c("img", {
                              attrs: {
                                src:
                                  "/assets/uploads/product/" +
                                  wishlist.product.featured_image,
                                width: "100px",
                                alt: wishlist.product.product_name
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "picaboo-product-name" }, [
                          _c("a", { attrs: { href: "#" } }, [
                            _vm._v(_vm._s(wishlist.product.product_name))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "picaboo-product-price" }, [
                          wishlist.product.sales_price
                            ? _c("span", { staticClass: "amount" }, [
                                _c("del", [
                                  _vm._v(
                                    "৳" + _vm._s(wishlist.product.regular_price)
                                  )
                                ]),
                                _vm._v(
                                  " ৳" + _vm._s(wishlist.product.sales_price)
                                )
                              ])
                            : _c("span", { staticClass: "amount" }, [
                                _vm._v(
                                  "৳" + _vm._s(wishlist.product.regular_price)
                                )
                              ])
                        ]),
                        _vm._v(" "),
                        _vm._m(1, true),
                        _vm._v(" "),
                        _c("td", { staticClass: "picaboo-product-add-cart" }, [
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.addToCart(wishlist.product)
                                }
                              }
                            },
                            [_vm._v("add to cart")]
                          )
                        ])
                      ])
                    }),
                    0
                  )
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
      { staticClass: "product__pagination text-center" },
      [
        _c("el-pagination", {
          staticClass: "text-center mt-3",
          attrs: {
            background: "",
            "current-page": _vm.currentPage,
            "page-size": _vm.wishlists.per_page,
            layout: "prev, pager, next",
            total: _vm.wishlists.total
          },
          on: {
            "current-change": _vm.paginationChange,
            "update:currentPage": function($event) {
              _vm.currentPage = $event
            },
            "update:current-page": function($event) {
              _vm.currentPage = $event
            }
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "picaboo-product-remove" }, [_vm._v("remove")]),
        _vm._v(" "),
        _c("th", { staticClass: "picaboo-product-thumbnail" }, [
          _vm._v("images")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "cart-product-name" }, [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", { staticClass: "picaboo-product-price" }, [
          _vm._v("Unit Price")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "picaboo-product-stock-status" }, [
          _vm._v("Stock Status")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "picaboo-product-add-cart" }, [
          _vm._v("add to cart")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "picaboo-product-stock-status" }, [
      _c("span", { staticClass: "in-stock" }, [_vm._v("in stock")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);