"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["SellerPage"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/SellerComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/SellerComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TermsCondition',
  methods: {
    getLandingCompanyInfo: function getLandingCompanyInfo() {
      this.$store.dispatch('cinfo/getLandingCompanyInfo');
    }
  },
  computed: {
    companyInfo: function companyInfo() {
      return this.$store.getters['cinfo/getLandingCompanyInfo'];
    }
  },
  created: function created() {
    this.getLandingCompanyInfo();
  },
  watch: {
    '$route': {
      handler: function handler(to, from) {
        document.title = 'Term & Condition | Stygen';
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./resources/js/components/frontend/SellerComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/frontend/SellerComponent.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SellerComponent_vue_vue_type_template_id_0b888cec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SellerComponent.vue?vue&type=template&id=0b888cec&scoped=true& */ "./resources/js/components/frontend/SellerComponent.vue?vue&type=template&id=0b888cec&scoped=true&");
/* harmony import */ var _SellerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SellerComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/SellerComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SellerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SellerComponent_vue_vue_type_template_id_0b888cec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SellerComponent_vue_vue_type_template_id_0b888cec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0b888cec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/SellerComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/SellerComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/frontend/SellerComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellerComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/SellerComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/SellerComponent.vue?vue&type=template&id=0b888cec&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/frontend/SellerComponent.vue?vue&type=template&id=0b888cec&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerComponent_vue_vue_type_template_id_0b888cec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerComponent_vue_vue_type_template_id_0b888cec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerComponent_vue_vue_type_template_id_0b888cec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellerComponent.vue?vue&type=template&id=0b888cec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/SellerComponent.vue?vue&type=template&id=0b888cec&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/SellerComponent.vue?vue&type=template&id=0b888cec&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/SellerComponent.vue?vue&type=template&id=0b888cec&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "seller_page" }, [
    _c("div", { staticClass: "breadcrumb-area" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "breadcrumb-content text-right" }, [
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
                _c(
                  "li",
                  { staticClass: "pl-5" },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "sellerTermandCondition" } } },
                      [_vm._v("Terms & Condition")]
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "Shopping-cart-area" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("img", {
              staticStyle: { width: "100%" },
              attrs: {
                src: "/assets/frontend/img/bg/terms_condition.jpg",
                alt: "Snow"
              }
            }),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("p", {
              staticClass: "mt-4 mb-4",
              domProps: { innerHTML: _vm._s(_vm.companyInfo.seller_page) }
            })
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
    return _c("div", { staticClass: "top-left" }, [
      _c("p", {}, [
        _vm._v(
          "\n                            Have goodies you wanna sell? We are currently accepting applications for seller/vendor who wishes to sell their goods or products on Stygen.\n                        "
        )
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "LoginRegisterBtn",
          attrs: { href: "/seller/register" }
        },
        [_vm._v("Register")]
      ),
      _vm._v(" "),
      _c("p", { staticClass: "mt-5 mb-1 alreadySellerCss" }, [
        _vm._v("Already a seller?")
      ]),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "LoginRegisterBtn", attrs: { href: "/seller/login" } },
        [_vm._v("Login")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);