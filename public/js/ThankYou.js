"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ThankYou"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ThankYou',
  props: ['order_id'],
  methods: {
    googlePurchaseEvent: function googlePurchaseEvent() {
      var orderId = this.$route.query.order_id;
      axios.post('get-purchase-record', {
        'order_id': orderId
      }).then(function (result) {
        var total_amount = result.data.total_amount;
        var product_skus = result.data.skus;
        var productdata = result.data.productInfos;
        gtag('event', 'conversion', {
          'send_to': 'AW-10829188403/EXp_CKrVo6IDELOa4aso',
          'transaction_id': orderId,
          'value': total_amount,
          'currency': 'BDT'
        }); // for (let i = 0; i < productdata.length; i++) {
        //     product_data = productdata[i];

        console.log(productdata);
        dataLayer.push({
          ecommerce: null
        }); // Clear the previous ecommerce object.

        dataLayer.push({
          'event': 'transaction',
          'ecommerce': {
            'purchase': {
              'actionField': {
                'id': orderId,
                // Transaction ID. Required for purchases and refunds.
                'affiliation': 'Online Store',
                "currency": "BDT",
                'revenue': total_amount // Total transaction value (incl. tax and shipping),

              },
              'products': [{
                // List of productFieldObjects.
                'name': productdata.product_name,
                // Name or ID is required.
                'id': productdata.id,
                'price': productdata.regular_price // Optional fields may be omitted or set to empty string.

              }]
            }
          }
        }); // }
        // productdata.forEach(element => console.log(element));
      })["catch"](function (error) {});
      console.log(orderId);
    },
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
    this.googlePurchaseEvent();
  },
  watch: {
    '$route': {
      handler: function handler(to, from) {
        document.title = 'Thank You | Stygen';
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=style&index=0&id=3ccd4eec&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=style&index=0&id=3ccd4eec&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.error-text h2[data-v-3ccd4eec] {\r\n    font-size: 25px;\r\n    font-weight: 600;\n}\n.error-text p[data-v-3ccd4eec] {\r\n    font-size: 18px;\r\n    font-weight: 500;\n}\n.card-img-top[data-v-3ccd4eec] {\r\n    height: 150px;\r\n    width: 150px;\n}\n.review-btn[data-v-3ccd4eec] {\r\n    background-color: #5e2e87;\r\n    border-radius: 25px;\n}\n.center-block[data-v-3ccd4eec] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=style&index=0&id=3ccd4eec&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=style&index=0&id=3ccd4eec&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_3ccd4eec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ThankYou.vue?vue&type=style&index=0&id=3ccd4eec&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=style&index=0&id=3ccd4eec&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_3ccd4eec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_3ccd4eec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/frontend/checkout/ThankYou.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/frontend/checkout/ThankYou.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ThankYou_vue_vue_type_template_id_3ccd4eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThankYou.vue?vue&type=template&id=3ccd4eec&scoped=true& */ "./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=template&id=3ccd4eec&scoped=true&");
/* harmony import */ var _ThankYou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThankYou.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=script&lang=js&");
/* harmony import */ var _ThankYou_vue_vue_type_style_index_0_id_3ccd4eec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThankYou.vue?vue&type=style&index=0&id=3ccd4eec&scoped=true&lang=css& */ "./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=style&index=0&id=3ccd4eec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ThankYou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ThankYou_vue_vue_type_template_id_3ccd4eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ThankYou_vue_vue_type_template_id_3ccd4eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3ccd4eec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/checkout/ThankYou.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ThankYou.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=style&index=0&id=3ccd4eec&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=style&index=0&id=3ccd4eec&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_3ccd4eec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ThankYou.vue?vue&type=style&index=0&id=3ccd4eec&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=style&index=0&id=3ccd4eec&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=template&id=3ccd4eec&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=template&id=3ccd4eec&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_template_id_3ccd4eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_template_id_3ccd4eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_template_id_3ccd4eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ThankYou.vue?vue&type=template&id=3ccd4eec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=template&id=3ccd4eec&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=template&id=3ccd4eec&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/ThankYou.vue?vue&type=template&id=3ccd4eec&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-5", attrs: { id: "thank_you" } }, [
      _c("div", { staticClass: "error-404-area mt-4" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "error-wrapper text-center mb-5" }, [
                _c("div", { staticClass: "error-text" }, [
                  _c("h2", [_vm._v("Thank You!")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "We have received your order. You will get an Email containing the details of the purchase."
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("h3", { staticClass: "card-title" }, [
                        _vm._v("Rate your shopping experince")
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "card-text mb-2" }, [
                        _vm._v("Provide us a review of your shopping")
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-primary review-btn",
                          attrs: {
                            href: "https://g.page/r/CUAAp1F64rPOEAg/review"
                          }
                        },
                        [_vm._v("Write a review")]
                      )
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
]
render._withStripped = true



/***/ })

}]);