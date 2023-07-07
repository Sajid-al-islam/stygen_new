"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["OrdersComponent"],{

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



/***/ })

}]);