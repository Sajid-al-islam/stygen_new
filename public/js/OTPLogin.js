"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["OTPLogin"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/OTPLogin.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/OTPLogin.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "OTPLogin",
  data: function data() {
    return {
      errors: {},
      form: {},
      errorMsg: false
    };
  },
  methods: {
    sendOtpLogin: function sendOtpLogin() {
      var _this = this;

      axios.post('/login-otp', this.form).then(function (result) {
        _this.getUser();
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
      });
    },
    getUser: function getUser() {
      this.$store.dispatch('user/getUser');
    },
    submitPin: function submitPin() {
      var _this2 = this;

      axios.post('/login-otp-confirm', this.form).then(function (result) {
        if (result.data == 'success') {
          _this2.errorMsg = false;
          window.location = '/checkout';
        }

        if (result.data == 'error') {
          _this2.errorMsg = true;
        }
      })["catch"](function (error) {
        _this2.errors = error.response.data.errors;
      });
    }
  },
  computed: {
    user: function user() {
      return this.$store.getters['user/getUserDetails'];
    }
  },
  created: function created() {
    this.getUser();
  },
  watch: {
    '$route': {
      handler: function handler(to, from) {
        document.title = 'Login | Stygen';
      },
      immediate: true
    },
    user: function user() {
      this.form.phone = this.user.phone;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/frontend/checkout/OTPLogin.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/frontend/checkout/OTPLogin.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OTPLogin_vue_vue_type_template_id_03fc1495_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OTPLogin.vue?vue&type=template&id=03fc1495&scoped=true& */ "./resources/js/components/frontend/checkout/OTPLogin.vue?vue&type=template&id=03fc1495&scoped=true&");
/* harmony import */ var _OTPLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OTPLogin.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/checkout/OTPLogin.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OTPLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OTPLogin_vue_vue_type_template_id_03fc1495_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _OTPLogin_vue_vue_type_template_id_03fc1495_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "03fc1495",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/checkout/OTPLogin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/checkout/OTPLogin.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/frontend/checkout/OTPLogin.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OTPLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OTPLogin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/OTPLogin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OTPLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/checkout/OTPLogin.vue?vue&type=template&id=03fc1495&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/frontend/checkout/OTPLogin.vue?vue&type=template&id=03fc1495&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OTPLogin_vue_vue_type_template_id_03fc1495_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OTPLogin_vue_vue_type_template_id_03fc1495_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OTPLogin_vue_vue_type_template_id_03fc1495_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OTPLogin.vue?vue&type=template&id=03fc1495&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/OTPLogin.vue?vue&type=template&id=03fc1495&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/OTPLogin.vue?vue&type=template&id=03fc1495&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/checkout/OTPLogin.vue?vue&type=template&id=03fc1495&scoped=true& ***!
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
  return _c("div", { attrs: { id: "otp_login" } }, [
    _c("div", { staticClass: "login-area" }, [
      _c("div", { staticClass: "container login-page-main" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-md-12 col-12 col-lg-6 col-xl-6 ml-auto mr-auto"
            },
            [
              _c("div", { staticClass: "login" }, [
                _c("div", { staticClass: "login-form-container" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  !_vm.user.id
                    ? _c("div", { staticClass: "login-form" }, [
                        _c(
                          "form",
                          {
                            attrs: { action: "#" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.sendOtpLogin()
                              }
                            }
                          },
                          [
                            _vm._m(1),
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
                                type: "text",
                                placeholder: "e.g. 01xxxxxxxxx"
                              },
                              domProps: { value: _vm.form.phone },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "phone",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors["phone"]
                              ? _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.errors["phone"][0]))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._m(2)
                          ]
                        )
                      ])
                    : _c("div", { staticClass: "login-form" }, [
                        _c(
                          "form",
                          {
                            attrs: { action: "#" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.sendOtpLogin()
                              }
                            }
                          },
                          [
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
                                type: "text",
                                placeholder: "e.g. 01xxxxxxxxx"
                              },
                              domProps: { value: _vm.form.phone },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "phone",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors["phone"]
                              ? _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.errors["phone"][0]))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._m(4)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "alert alert-success alert-dismissible fade show",
                            attrs: { role: "alert" }
                          },
                          [
                            _vm._v(
                              "\n                                    We've sent a 4-digit one-time PIN in your phone# " +
                                _vm._s(_vm.user.phone) +
                                ", Please type PIN\n                                    "
                            ),
                            _vm._m(5)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "form",
                          {
                            attrs: { action: "#" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.submitPin()
                              }
                            }
                          },
                          [
                            _vm._m(6),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.pin,
                                  expression: "form.pin"
                                }
                              ],
                              attrs: { type: "text", placeholder: "e.g. 2356" },
                              domProps: { value: _vm.form.pin },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(_vm.form, "pin", $event.target.value)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors["pin"]
                              ? _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.errors["pin"][0]))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.errorMsg
                              ? _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("Your PIN code is invalid or expired.")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._m(7)
                          ]
                        )
                      ])
                ])
              ])
            ]
          )
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
    return _c("div", { staticClass: "container login-container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12 col-md-12" }, [
          _c("div", { staticClass: "row text-center" }, [
            _c("h3", { staticClass: "landing-login-title-tag" }, [
              _vm._v("Login with Mobile OTP")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_vm._v("Phone Number"), _c("span", [_vm._v("*")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "button-box" }, [
      _c(
        "button",
        {
          staticClass: "default-btn user-login-btn",
          attrs: { type: "submit" }
        },
        [_vm._v("SEND PIN")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_vm._v("Phone Number"), _c("span", [_vm._v("*")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "button-box" }, [
      _c(
        "button",
        {
          staticClass: "default-btn user-login-btn",
          attrs: { type: "submit" }
        },
        [_vm._v("RESEND PIN")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_vm._v("OTP Code"), _c("span", [_vm._v("*")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "button-box" }, [
      _c(
        "button",
        {
          staticClass: "default-btn user-login-btn",
          attrs: { type: "submit" }
        },
        [_vm._v("SUBMIT PIN")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);