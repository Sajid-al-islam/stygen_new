<template>
    <div id="seller_forgot_password">
        <div class="login-box ml-auto mr-auto">
            <div class="login-logo mb-2 mt-0">
                <a href="/">
                    <img src="/assets/frontend/img/logo/logo.png" width="100px" alt="STYGEN">
                </a>
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
                    <h3 class="text-center text-uppercase">FORGOT PASSWORD</h3>

                    <form action="#" method="post" @submit.prevent="sellerForgotPassword()">
                        <label>Email <span class="text-danger">*</span></label>
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" v-model="form.email" placeholder="e.g. example@example.com">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <span class="text-danger" v-if="errors['email']">{{ errors['email'][0] }}</span>

                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary btn-block">Send Password Reset Link</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>

                    <p class="mb-0 mt-2">
                        <router-link :to="{name: 'sellerLogin'}" class="text-center">Back to Login?</router-link>
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
        <!-- /.login-box -->
    </div>
</template>

<script>
    export default {
        name: "ForgotPassword",
        data(){
            return{
                errors:{},
                form: {

                }
            }
        },
        methods:{
            sellerForgotPassword(){
                axios.post('/seller/password/email', this.form)
                .then((result) => {
                    this.$message({
                        showClose: true,
                        message: 'Congrats, Password reset link successfully send to your email.',
                        type: 'success'
                    });
                }).catch((error) => {
                    this.errors = error.response.data.errors
                });
            }
        }
    }
</script>

<style scoped>

</style>

