"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[619],{2620:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});const n={name:"OTPLogin",data:function(){return{errors:{},form:{},errorMsg:!1}},methods:{sendOtpLogin:function(){var t=this;axios.post("/login-otp",this.form).then((function(e){t.getUser()})).catch((function(e){t.errors=e.response.data.errors}))},getUser:function(){this.$store.dispatch("user/getUser")},submitPin:function(){var t=this;axios.post("/login-otp-confirm",this.form).then((function(e){"success"==e.data&&(t.errorMsg=!1,window.location="/checkout"),"error"==e.data&&(t.errorMsg=!0)})).catch((function(e){t.errors=e.response.data.errors}))}},computed:{user:function(){return this.$store.getters["user/getUserDetails"]}},created:function(){this.getUser()},watch:{$route:{handler:function(t,e){document.title="Login | Stygen"},immediate:!0},user:function(){this.form.phone=this.user.phone}}};const r=(0,s(1900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"otp_login"}},[s("div",{staticClass:"login-area"},[s("div",{staticClass:"container login-page-main"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-12 col-lg-6 col-xl-6 ml-auto mr-auto"},[s("div",{staticClass:"login"},[s("div",{staticClass:"login-form-container"},[t._m(0),t._v(" "),t.user.id?s("div",{staticClass:"login-form"},[s("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.sendOtpLogin()}}},[t._m(3),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],attrs:{type:"text",placeholder:"e.g. 01xxxxxxxxx"},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}}),t._v(" "),t.errors.phone?s("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.phone[0]))]):t._e(),t._v(" "),t._m(4)]),t._v(" "),s("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[t._v("\n                                    We've sent a 4-digit one-time PIN in your phone# "+t._s(t.user.phone)+", Please type PIN\n                                    "),t._m(5)]),t._v(" "),s("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submitPin()}}},[t._m(6),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.pin,expression:"form.pin"}],attrs:{type:"text",placeholder:"e.g. 2356"},domProps:{value:t.form.pin},on:{input:function(e){e.target.composing||t.$set(t.form,"pin",e.target.value)}}}),t._v(" "),t.errors.pin?s("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.pin[0]))]):t._e(),t._v(" "),t.errorMsg?s("span",{staticClass:"text-danger"},[t._v("Your PIN code is invalid or expired.")]):t._e(),t._v(" "),t._m(7)])]):s("div",{staticClass:"login-form"},[s("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.sendOtpLogin()}}},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],attrs:{type:"text",placeholder:"e.g. 01xxxxxxxxx"},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}}),t._v(" "),t.errors.phone?s("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.phone[0]))]):t._e(),t._v(" "),t._m(2)])])])])])])])])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container login-container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-12"},[s("div",{staticClass:"row text-center"},[s("h3",{staticClass:"landing-login-title-tag"},[t._v("Login with Mobile OTP")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",[t._v("Phone Number"),s("span",[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"button-box"},[s("button",{staticClass:"default-btn user-login-btn",attrs:{type:"submit"}},[t._v("SEND PIN")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",[t._v("Phone Number"),s("span",[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"button-box"},[s("button",{staticClass:"default-btn user-login-btn",attrs:{type:"submit"}},[t._v("RESEND PIN")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",[t._v("OTP Code"),s("span",[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"button-box"},[s("button",{staticClass:"default-btn user-login-btn",attrs:{type:"submit"}},[t._v("SUBMIT PIN")])])}],!1,null,"8c737ca6",null).exports}}]);