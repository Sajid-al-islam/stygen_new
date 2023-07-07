"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["CartComponent"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/cart/CartComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/cart/CartComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "CartComponent",
  data: function data() {
    return {
      product: {
        quantity: 1
      }
    };
  },
  methods: {
    // CART ALL PRODUCTS
    productList: function productList() {
      this.$store.dispatch('cart/productList');
    },
    // REMOVE CART SINGLE PRODUCT
    removeCartProduct: function removeCartProduct(id) {
      var _this = this;

      axios.get('cart/remove-cart-product/' + id).then(function (result) {
        _this.productList();
      })["catch"](function (error) {});
    },
    //  QUANTITY KEYPRESS SECTION
    updateQty: function updateQty(id, qty) {
      var _this2 = this;

      axios.post("cart/update-cart", {
        id: id,
        qty: qty
      }).then(function (result) {
        _this2.productList();
      })["catch"](function (error) {});
    }
  },
  computed: {
    // CART ALL PRODUCTS
    cart_products: function cart_products() {
      return this.$store.getters['cart/productList'];
    }
  },
  created: function created() {
    this.productList();
  },
  watch: {
    '$route': {
      handler: function handler(to, from) {
        document.title = 'Cart View | Stygen';
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./resources/js/components/frontend/cart/CartComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/frontend/cart/CartComponent.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CartComponent_vue_vue_type_template_id_0e457f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartComponent.vue?vue&type=template&id=0e457f90&scoped=true& */ "./resources/js/components/frontend/cart/CartComponent.vue?vue&type=template&id=0e457f90&scoped=true&");
/* harmony import */ var _CartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/cart/CartComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CartComponent_vue_vue_type_template_id_0e457f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CartComponent_vue_vue_type_template_id_0e457f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0e457f90",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/cart/CartComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/cart/CartComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/frontend/cart/CartComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CartComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/cart/CartComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/cart/CartComponent.vue?vue&type=template&id=0e457f90&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/cart/CartComponent.vue?vue&type=template&id=0e457f90&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_template_id_0e457f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_template_id_0e457f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_template_id_0e457f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CartComponent.vue?vue&type=template&id=0e457f90&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/cart/CartComponent.vue?vue&type=template&id=0e457f90&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/cart/CartComponent.vue?vue&type=template&id=0e457f90&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/cart/CartComponent.vue?vue&type=template&id=0e457f90&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "cart" } }, [
    _c("div", { staticClass: "Shopping-cart-area" }, [
      _c("div", { staticClass: "container cart-page-main" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("form", { attrs: { action: "#" } }, [
              _c("div", { staticClass: "table-content table-responsive" }, [
                _c("table", { staticClass: "table" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.cart_products.products, function(product) {
                      return _c("tr", { key: product.id }, [
                        _c("td", { staticClass: "picaboo-product-remove" }, [
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.removeCartProduct(product.id)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fa fa-times" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "picaboo-product-thumbnail" }, [
                          _c("a", { attrs: { href: "#" } }, [
                            product.attributes.image
                              ? _c("img", {
                                  attrs: {
                                    src:
                                      "assets/uploads/product/" +
                                      product.attributes.image,
                                    width: "100px",
                                    alt: product.name
                                  }
                                })
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "picaboo-product-name" }, [
                          _c("a", { attrs: { href: "#" } }, [
                            _vm._v(_vm._s(product.name))
                          ]),
                          _c("br"),
                          _vm._v(" "),
                          product.attributes.color
                            ? _c("span", [
                                _c("small", [
                                  _vm._v(
                                    "Color: " + _vm._s(product.attributes.color)
                                  )
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          product.attributes.size
                            ? _c("span", [
                                _c("small", [
                                  _vm._v(
                                    ", Size: " + _vm._s(product.attributes.size)
                                  )
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          product.attributes.weight
                            ? _c("span", [
                                _c("small", [
                                  _vm._v(
                                    ", Weight: " +
                                      _vm._s(product.attributes.weight)
                                  )
                                ])
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "picaboo-product-price" }, [
                          _c("span", { staticClass: "amount" }, [
                            _vm._v("৳" + _vm._s(product.price))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "picaboo-product-quantity" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: product.quantity,
                                expression: "product.quantity"
                              }
                            ],
                            attrs: { min: "1", value: "1", type: "number" },
                            domProps: { value: product.quantity },
                            on: {
                              keyup: function($event) {
                                $event.preventDefault()
                                return _vm.updateQty(
                                  product.id,
                                  product.quantity
                                )
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  product,
                                  "quantity",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "product-subtotal" }, [
                          _c("span", { staticClass: "amount" }, [
                            _vm._v(
                              "৳ " + _vm._s(product.price * product.quantity)
                            )
                          ])
                        ])
                      ])
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-5 ml-auto" }, [
                  _c("div", { staticClass: "cart-page-total pt-0" }, [
                    _c("h2", [_vm._v("Cart totals")]),
                    _vm._v(" "),
                    _c("ul", [
                      _c("li", [
                        _vm._v("Subtotal "),
                        _c("span", [
                          _vm._v("৳ " + _vm._s(_vm.cart_products.sub_total))
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.cart_products.discount > 0
                        ? _c("li", [
                            _vm._v("Discount "),
                            _c("span", [
                              _vm._v("৳ " + _vm._s(_vm.cart_products.discount))
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.cart_products.vat > 0
                        ? _c("li", [
                            _vm._v("Vat "),
                            _c("span", [
                              _vm._v("৳ " + _vm._s(_vm.cart_products.vat))
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v("Total "),
                        _c("span", [
                          _vm._v("৳ " + _vm._s(_vm.cart_products.total))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "/checkout" } }, [
                      _vm._v("Proceed to checkout")
                    ])
                  ])
                ])
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
        _c("th", { staticClass: "picaboo-product-quantity" }, [
          _vm._v("Quantity")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "picaboo-product-subtotal" }, [_vm._v("Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "coupon-all" })
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);