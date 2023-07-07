"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["GiftLogin"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/auth/GiftLogin.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/auth/GiftLogin.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "GiftLogin",
  data: function data() {
    return {
      errors: {},
      form: {
        is_coupon: 1
      }
    };
  },
  methods: {
    userRegister: function userRegister() {
      var _this = this;

      // console.log(this.form);
      axios.post('/custom_register', this.form).then(function (result) {
        localStorage.setItem('userLoggedIn', true);

        _this.$router.push({
          name: 'userDashboard'
        });

        _this.$message({
          showClose: true,
          message: 'Thank you for Registration. Check your mail for the discount coupon',
          type: 'success'
        });
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
      });
    }
  },
  watch: {
    '$route': {
      handler: function handler(to, from) {
        document.title = 'Register | Stygen';
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./resources/js/components/frontend/auth/GiftLogin.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/frontend/auth/GiftLogin.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GiftLogin_vue_vue_type_template_id_dee22c18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GiftLogin.vue?vue&type=template&id=dee22c18&scoped=true& */ "./resources/js/components/frontend/auth/GiftLogin.vue?vue&type=template&id=dee22c18&scoped=true&");
/* harmony import */ var _GiftLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GiftLogin.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/auth/GiftLogin.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GiftLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GiftLogin_vue_vue_type_template_id_dee22c18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GiftLogin_vue_vue_type_template_id_dee22c18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "dee22c18",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/auth/GiftLogin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/auth/GiftLogin.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/frontend/auth/GiftLogin.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GiftLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GiftLogin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/auth/GiftLogin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GiftLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/auth/GiftLogin.vue?vue&type=template&id=dee22c18&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/frontend/auth/GiftLogin.vue?vue&type=template&id=dee22c18&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GiftLogin_vue_vue_type_template_id_dee22c18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GiftLogin_vue_vue_type_template_id_dee22c18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GiftLogin_vue_vue_type_template_id_dee22c18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GiftLogin.vue?vue&type=template&id=dee22c18&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/auth/GiftLogin.vue?vue&type=template&id=dee22c18&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/auth/GiftLogin.vue?vue&type=template&id=dee22c18&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/auth/GiftLogin.vue?vue&type=template&id=dee22c18&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "user_register" } }, [
    _c("div", { staticClass: "register-area" }, [
      _c("div", { staticClass: "container register-page-main" }, [
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
                  _c("div", { staticClass: "login-form" }, [
                    _c(
                      "form",
                      {
                        attrs: { action: "#" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.userRegister()
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
                              value: _vm.form.name,
                              expression: "form.name"
                            }
                          ],
                          attrs: { placeholder: "e.g. Rahim", type: "text" },
                          domProps: { value: _vm.form.name },
                          on: {
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
                          : _vm._e(),
                        _c("br"),
                        _vm._v(" "),
                        _vm._m(2),
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
                              _vm.$set(_vm.form, "phone", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors["phone"]
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors["phone"][0]))
                            ])
                          : _vm._e(),
                        _c("br"),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.is_coupon,
                              expression: "form.is_coupon"
                            }
                          ],
                          attrs: { type: "hidden", value: "1" },
                          domProps: { value: _vm.form.is_coupon },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "is_coupon",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm._m(3),
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
                            type: "email",
                            placeholder: "e.g. example@example.com"
                          },
                          domProps: { value: _vm.form.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "email", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors["email"]
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors["email"][0]))
                            ])
                          : _vm._e(),
                        _c("br"),
                        _vm._v(" "),
                        _vm._m(4),
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
                            type: "text",
                            placeholder: "e.g. House#1, Road#1, Flat#1A"
                          },
                          domProps: { value: _vm.form.address },
                          on: {
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
                          : _vm._e(),
                        _c("br"),
                        _vm._v(" "),
                        _vm._m(5),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password,
                              expression: "form.password"
                            }
                          ],
                          attrs: {
                            type: "password",
                            placeholder: "e.g. ********"
                          },
                          domProps: { value: _vm.form.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors["password"]
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors["password"][0]))
                            ])
                          : _vm._e(),
                        _c("br"),
                        _vm._v(" "),
                        _vm._m(6),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password_confirmation,
                              expression: "form.password_confirmation"
                            }
                          ],
                          attrs: {
                            type: "password",
                            placeholder: "e.g. ********"
                          },
                          domProps: { value: _vm.form.password_confirmation },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password_confirmation",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors["password_confirmation"]
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(_vm.errors["password_confirmation"][0])
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._m(7),
                        _vm._v(" "),
                        _c(
                          "p",
                          [
                            _vm._v("Already have an account? "),
                            _c(
                              "router-link",
                              { attrs: { to: { name: "userLogin" } } },
                              [_vm._v("Log in instead!")]
                            )
                          ],
                          1
                        )
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
            _c("h3", { staticClass: "landing-register-title-tag" }, [
              _vm._v("REGISTER TO STYGEN")
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
    return _c("label", [_vm._v("Name"), _c("span", [_vm._v("*")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_vm._v("Phone"), _c("span", [_vm._v("*")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_vm._v("Email"), _c("span", [_vm._v("*")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_vm._v("Address"), _c("span", [_vm._v("*")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_vm._v("Password"), _c("span", [_vm._v("*")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_vm._v("Confirm Password"), _c("span", [_vm._v("*")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "button-box" }, [
      _c(
        "button",
        {
          staticClass: "default-btn user-register-btn",
          attrs: { type: "submit" }
        },
        [_vm._v("Register")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);