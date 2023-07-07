"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["PaymentFailed"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/PaymentFailed.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/PaymentFailed.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PaymentFailed',
  props: ['order_id'],
  methods: {
    facebookPurchaseEvent: function facebookPurchaseEvent() {
      var orderId = this.$route.query.order_id;
      axios.post('get-purchase-record', {
        'order_id': orderId
      }).then(function (result) {
        var total_amount = result.data.total_amount;
        var product_skus = result.data.skus;
        fbq('track', 'Purchase', {
          value: total_amount,
          currency: 'BDT',
          content_ids: product_skus,
          content_type: 'product'
        });
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.facebookPurchaseEvent();
  },
  watch: {
    '$route': {
      handler: function handler(to, from) {
        document.title = 'Payment Failed | Stygen';
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./resources/js/components/frontend/checkout/PaymentFailed.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/frontend/checkout/PaymentFailed.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaymentFailed_vue_vue_type_template_id_0b498c5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentFailed.vue?vue&type=template&id=0b498c5c&scoped=true& */ "./resources/js/components/frontend/checkout/PaymentFailed.vue?vue&type=template&id=0b498c5c&scoped=true&");
/* harmony import */ var _PaymentFailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentFailed.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/checkout/PaymentFailed.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaymentFailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaymentFailed_vue_vue_type_template_id_0b498c5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PaymentFailed_vue_vue_type_template_id_0b498c5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0b498c5c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/checkout/PaymentFailed.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/checkout/PaymentFailed.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/frontend/checkout/PaymentFailed.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentFailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentFailed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/PaymentFailed.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentFailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/checkout/PaymentFailed.vue?vue&type=template&id=0b498c5c&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/checkout/PaymentFailed.vue?vue&type=template&id=0b498c5c&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentFailed_vue_vue_type_template_id_0b498c5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentFailed_vue_vue_type_template_id_0b498c5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentFailed_vue_vue_type_template_id_0b498c5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentFailed.vue?vue&type=template&id=0b498c5c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/PaymentFailed.vue?vue&type=template&id=0b498c5c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/PaymentFailed.vue?vue&type=template&id=0b498c5c&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/PaymentFailed.vue?vue&type=template&id=0b498c5c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "payment_failed" } }, [
    _c("div", { staticClass: "error-404-area mt-4" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "error-wrapper text-center" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "error-button mb-5" },
                [
                  _c("router-link", { attrs: { to: { name: "landing" } } }, [
                    _vm._v("Back to Home Page")
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    { attrs: { to: { name: "userDashboard" } } },
                    [_vm._v("My Account")]
                  )
                ],
                1
              )
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
    return _c("div", { staticClass: "error-text" }, [
      _c("h2", [_vm._v("Payment Failed!")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Payment failed but we have received your order. You can pay later."
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);