"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["WishlistComponent"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/wishlist/WishlistComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/wishlist/WishlistComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
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
  name: "WishlistComponent",
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

/***/ "./resources/js/components/frontend/wishlist/WishlistComponent.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/frontend/wishlist/WishlistComponent.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WishlistComponent_vue_vue_type_template_id_772f8f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WishlistComponent.vue?vue&type=template&id=772f8f70&scoped=true& */ "./resources/js/components/frontend/wishlist/WishlistComponent.vue?vue&type=template&id=772f8f70&scoped=true&");
/* harmony import */ var _WishlistComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WishlistComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/wishlist/WishlistComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WishlistComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WishlistComponent_vue_vue_type_template_id_772f8f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _WishlistComponent_vue_vue_type_template_id_772f8f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "772f8f70",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/wishlist/WishlistComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/wishlist/WishlistComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/frontend/wishlist/WishlistComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WishlistComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/wishlist/WishlistComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/wishlist/WishlistComponent.vue?vue&type=template&id=772f8f70&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/wishlist/WishlistComponent.vue?vue&type=template&id=772f8f70&scoped=true& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistComponent_vue_vue_type_template_id_772f8f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistComponent_vue_vue_type_template_id_772f8f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistComponent_vue_vue_type_template_id_772f8f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WishlistComponent.vue?vue&type=template&id=772f8f70&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/wishlist/WishlistComponent.vue?vue&type=template&id=772f8f70&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/wishlist/WishlistComponent.vue?vue&type=template&id=772f8f70&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/wishlist/WishlistComponent.vue?vue&type=template&id=772f8f70&scoped=true& ***!
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
  return _c("div", { attrs: { id: "wishlist" } }, [
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
                _c("li", { staticClass: "active" }, [_vm._v("Wishlist")])
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
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