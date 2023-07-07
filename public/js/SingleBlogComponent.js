"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["SingleBlogComponent"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/BlogProduct.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/BlogProduct.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      blogproduct: '',
      descriptions: '',
      description_split: '',
      blog_slug: ''
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/SingleBlogComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/SingleBlogComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blog_BlogProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blog/BlogProduct */ "./resources/js/components/frontend/blog/BlogProduct.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SingleBlogComponent",
  data: function data() {
    return {
      blogproduct: '',
      descriptions: '',
      description_split: '',
      blog_slug: ''
    };
  },
  computed: {
    blog: function blog() {
      return this.$store.getters['blog/getSingleBlog'];
    }
  },
  methods: {
    getSingleBlog: function getSingleBlog() {
      this.$store.dispatch('blog/getSingleBlog', this.$route.params.blogSlug);
    },
    // blogslug() {
    //     let sku = this.blog.description.split("--");
    //     console.log(sku);
    // },
    singleBlogName: function singleBlogName() {
      var _this = this;

      axios.post('/single-blog-name', {
        'blog_slug': this.$route.params.blogSlug
      }).then(function (result) {
        _this.blog_slug = result.data.blog_name;
        document.title = result.data.blog_name + ' | Stygen';
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getSingleBlog();
    this.singleBlogName();
    this.blogProducts();
  }
});

/***/ }),

/***/ "./resources/js/components/frontend/blog/BlogProduct.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/frontend/blog/BlogProduct.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlogProduct_vue_vue_type_template_id_af9efffc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogProduct.vue?vue&type=template&id=af9efffc& */ "./resources/js/components/frontend/blog/BlogProduct.vue?vue&type=template&id=af9efffc&");
/* harmony import */ var _BlogProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/blog/BlogProduct.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogProduct_vue_vue_type_template_id_af9efffc___WEBPACK_IMPORTED_MODULE_0__.render,
  _BlogProduct_vue_vue_type_template_id_af9efffc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/blog/BlogProduct.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/blog/SingleBlogComponent.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/frontend/blog/SingleBlogComponent.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SingleBlogComponent_vue_vue_type_template_id_4d98d928_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleBlogComponent.vue?vue&type=template&id=4d98d928&scoped=true& */ "./resources/js/components/frontend/blog/SingleBlogComponent.vue?vue&type=template&id=4d98d928&scoped=true&");
/* harmony import */ var _SingleBlogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleBlogComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/blog/SingleBlogComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SingleBlogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleBlogComponent_vue_vue_type_template_id_4d98d928_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SingleBlogComponent_vue_vue_type_template_id_4d98d928_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4d98d928",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/blog/SingleBlogComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/blog/BlogProduct.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/frontend/blog/BlogProduct.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlogProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/BlogProduct.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/blog/SingleBlogComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/frontend/blog/SingleBlogComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SingleBlogComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/SingleBlogComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/blog/BlogProduct.vue?vue&type=template&id=af9efffc&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/frontend/blog/BlogProduct.vue?vue&type=template&id=af9efffc& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogProduct_vue_vue_type_template_id_af9efffc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogProduct_vue_vue_type_template_id_af9efffc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogProduct_vue_vue_type_template_id_af9efffc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlogProduct.vue?vue&type=template&id=af9efffc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/BlogProduct.vue?vue&type=template&id=af9efffc&");


/***/ }),

/***/ "./resources/js/components/frontend/blog/SingleBlogComponent.vue?vue&type=template&id=4d98d928&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/blog/SingleBlogComponent.vue?vue&type=template&id=4d98d928&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlogComponent_vue_vue_type_template_id_4d98d928_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlogComponent_vue_vue_type_template_id_4d98d928_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlogComponent_vue_vue_type_template_id_4d98d928_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SingleBlogComponent.vue?vue&type=template&id=4d98d928&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/SingleBlogComponent.vue?vue&type=template&id=4d98d928&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/BlogProduct.vue?vue&type=template&id=af9efffc&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/BlogProduct.vue?vue&type=template&id=af9efffc& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "card h-100" }, [
      _c("h2", [_vm._v("blog component test")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body p-4" }, [
        _c("div", { staticClass: "text-center" }, [
          _c("h5", { staticClass: "fw-bolder" }, [_vm._v("new pro")]),
          _vm._v(" "),
          _vm._v("\n            $120\n        ")
        ])
      ]),
      _vm._v(" "),
      _c("div", {
        staticClass: "card-footer p-4 pt-0 border-top-0 bg-transparent"
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/SingleBlogComponent.vue?vue&type=template&id=4d98d928&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/SingleBlogComponent.vue?vue&type=template&id=4d98d928&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "single_blog" } }, [
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
                      _vm._v("Home ")
                    ]),
                    _vm._v(" "),
                    _c("router-link", { attrs: { to: { name: "blog" } } }, [
                      _vm._v("/ Blog")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", { staticClass: "active" }, [
                  _vm._v(_vm._s(_vm.blog.title))
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "blog-area mt-4" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-9 ml-auto mr-auto" }, [
            _c("div", { staticClass: "blog_area" }, [
              _c("article", { staticClass: "blog_single blog-details" }, [
                _c("header", { staticClass: "entry-header" }, [
                  _c("h2", { staticClass: "entry-title" }, [
                    _vm._v(
                      "\n                                    " +
                        _vm._s(_vm.blog.title) +
                        "\n                                "
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c("span", { staticClass: "post-separator" }, [_vm._v("|")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "blog-post-date" }, [
                    _c("i", { staticClass: "fas fa-calendar-alt" }),
                    _vm._v(
                      " " + _vm._s(_vm._f("timeFormat")(_vm.blog.created_at))
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "post-thumbnail img-full" }, [
                  _c("img", {
                    attrs: {
                      src: "/assets/uploads/blog/" + _vm.blog.image,
                      alt: _vm.blog.title
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "postinfo-wrapper" }, [
                  _c("div", { staticClass: "post-info" }, [
                    _c(
                      "div",
                      { staticClass: "entry-summary blog-post-description" },
                      [
                        _vm.blogproduct
                          ? _c("p", {
                              domProps: { innerHTML: _vm._s(_vm.blogproduct) }
                            })
                          : _c("p", {
                              domProps: {
                                innerHTML: _vm._s(_vm.blog.description)
                              }
                            })
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "post-author" }, [
      _c("span", { staticClass: "post-by" }, [_vm._v(" Posts by : ")]),
      _vm._v(" admin ")
    ])
  }
]
render._withStripped = true



/***/ })

}]);