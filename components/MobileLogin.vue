<!-- Please remove this file from your project -->
<template>
  <div class="big-bg container-fluid">
    <div class="">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 ">
                <div class="inner-space">
                    <div class="text-center">   
                        <nuxt-link to="/">
                            <img src="/images/logo_admin.png" alt="" class="img-logo" srcset="">
                        </nuxt-link>
                    </div>

                    <div class="bg-mobile shadow">                    
                        <div class="text-center">   
                            <div class="header-title">Login to your account</div>
                            <p>Securely login to Rtech</p>
                        </div>
                        <form action="" @submit.prevent>
                            <div class="form-edit">
                                <div class="mb-4">
                                    <label class="form-label">Email </label>
                                    <div class="d-flex form-control-1">
                                        <div class="icon-pad">
                                            <img src="/images/sms.png" alt="" srcset="">
                                        </div>
                                        <input v-model="email" type="email" class="form-control form-control-plaintext w-100 mr-3" placeholder="Enter email adddress">
                                    </div>
                                    <p  v-if="field_errors.email" class="text-danger"> {{ field_errors.email[0]}}</p>
                                    
                                </div>
                                <div class="mb-4">
                                    <label class="form-label">Password </label>
                                    <div class="d-flex form-control-1">
                                        <div class="icon-pad">
                                            <img src="/images/key.png" alt="" srcset="">
                                        </div>
                                        <input v-model="password" type="password" class="form-control form-control-plaintext w-100 mr-3" placeholder="Password">
                                    </div>
                                    <p  v-if="field_errors.password" class="text-danger"> {{ field_errors.password[0]}}</p>
                                    
                                </div>
                                <button type="submit" :disabled="logining" :class="{'allowed' : logining}" class="btn-login btn" @click="loginUser">{{logining ? 'Logining...' : 'LOG IN'}}</button>
                            </div>
                        </form>
                    </div>

                    <p class="text-center new-account">Don’t have an account? <nuxt-link to="/signin"><span class="new-acc">Register</span></nuxt-link> </p>
                    <p class="text-center new-account mt-3">
                        <nuxt-link to="/forgot-password"> Forgot password? </nuxt-link>
                    </p>
                </div>
            </div>
           
        </div>
    </div>
    <notifications position="top right" group="all" />
  </div>
</template>

<script>
import {mapActions, mapMutations , mapGetters} from 'vuex'

export default {
    
   data(){
    return{
      email: null,
      password: null,
      errors : null
    }
  },
  computed:{
    ...mapGetters({
        logining: "logining",
    }),
  },
  methods:{
      ...mapMutations({
            SET_LOGGING_IN: "SET_LOGGING_IN",
        }),

      async loginUser() {
            this.SET_LOGGING_IN(true);
           
            const data = {
                email: this.email,
                password: this.password,
            };
            // console.log("data-v", data)
            await this.$auth
                .loginWith('local', {data})
                .then((response) => {
                    this.SET_LOGGING_IN(false);

                    let redirect = this.$route.query.redirect ? this.$route.query.redirect : "/dashboard";
                   
                   this.$router.push(redirect);
                   
                })
                .catch(({ response }) => {
                    this.SET_LOGGING_IN(false);
                    this.errors = response.data.message;
                    // console.log("error", this.errors)
                    let vthis = this
                  if (response.status === 400) {
                     vthis.$notify({
                        group: "all",
                        title: "Message",
                        text: response.data.message,
                        //  text: "Sorry! We are not operating in your location yet",
                        type: "error",
                        duration: 10000,
                    });  
                }
                });
        },
  },
   mounted(){
        let redirect = this.$route.query.redirect ? this.$route.query.redirect : "/";
        if (this.$auth.loggedIn) {

        if (this.$auth.$storage.getUniversal('redirect')) {
          this.$router.replace(this.$auth.$storage.getUniversal('redirect'))
          this.$auth.$storage.removeUniversal('redirect')
          return;
        }

        this.$router.replace(redirect)
        return
      }
    }
   
}
</script>
<style scoped>
*{
    /* padding: 0;
    margin: 0; */
    /* box-sizing: border-box; */
    /* font-family: 'Work Sans', sans-serif; */
}
.img-class{
    /* width: 732px;
    height: 732px; */
    /* margin-top: 2rem; */
}
.form-label{
    font-size: .75rem;
}
.bg-mobile{
    background: #FFFFFF;
    padding: 1rem 1rem;
    border-top-right-radius: 1.25rem;
    border-top-left-radius: 1.25rem;
    border-bottom-right-radius: 1.25rem;
    margin-top: 2rem;
}
.allowed{
   cursor: not-allowed;
}
a{
    text-decoration: none;
    color: #FFFFFF;
}
.card-image-s{
    background: url("/images/login_bg.png");
    background-size: cover;
    height: 100vh;
    padding: 10rem;
    /* background: #000000; */
}
.big-bg{
    background-color: #0C64E6;
    height: 100vh;
}
.header-title{
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 28px;
    color: #0C64E6;
    /* margin-top: 2rem; */
}
.inner-space {
    margin-top: 3rem;
}
.img-logo{
    /* width: 80px;
    height: 80px; */
}
.form-edit{
   padding: 3rem 5rem;
}
label{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: #0C64E6;
}
.form-control{
    /* box-sizing: border-box;
    width: 650px; */
    height: auto;
    border: none;
    font-size: .75rem;
    padding: .3rem;
    color: #000000;
}
.icon-pad{
    padding: .8rem;
}
.form-control:focus{
     border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  background: #ECF3F9;
}
.form-control-1{
    box-sizing: border-box;
    width: 650px;
    /* height: 70px; */
    background: #ECF3F9;
    border: 1px solid rgba(189, 189, 189, 0.5);
    box-shadow: 0px 0px 13px 5px rgba(255, 255, 255, 0.15);
    border-radius: 5px;
    flex: none;
    order: 1;
    flex-grow: 0;
    font-size: .75rem;
    /* padding: .3rem; */
}
::placeholder{
    color: rgba(12, 100, 230, 0.5);
    padding-left: 1rem;
    font-size: .75rem;
}
.btn-login{
    padding: 15px 40px;
    width: 650px;
    /* height: 50px; */
    background: #F9DF4C;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border: none;
    /* margin-top: .4rem; */
    font-weight: 700;
    font-size: .875rem;
    line-height: 28px;
    color: #000000;
}
.new-account{
    font-style: normal;
    font-weight: 400;
    font-size: .75rem;
    line-height: 23px;
    margin-top: 1rem;
    color: #FFFFFF;
}
.new-acc{
    font-weight: 700;
    color: #FFFFFF;
}
.inner-header{
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
    color: #FFFFFF;
    padding-top: 2rem;
}
.inner-text{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    width: 90%;
    color: #FFFFFF;
    margin-top: 1rem;
}
.img-arrow-1{
    margin-top: 1.5rem;
}
.img-arrow{
    float: right;
}
@media screen and (max-width : 578px){
    .on-mobile{
        display: none;
    }
    .inner-space {
        margin-top: 3rem;
    }
    .form-edit{
        padding: 0;
        margin-top: 2rem;
    }
    .big-bg{
        background-color: #0C64E6;
        height: 100vh;
    }
    .form-control-1{
        box-sizing: border-box;
        width: 100% !important ;
    }
    .btn-login{
        width: 100% !important;
    }
}
@media screen and (max-width : 768px){
     .on-mobile{
        display: none;
    }
    .inner-space {
        margin-top: 3rem;
    }
    .form-edit{
        padding: 0;
        margin-top: 2rem;
    }
    .form-control-1{
        box-sizing: border-box;
        width: 100% !important ;
    }
    .btn-login{
        width: 100% !important;
    }

}
@media screen and (max-width : 1024px){
     .form-edit{
        padding: 0;
        margin-top: 2rem;
    }
    .inner-header{
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 60px;
        color: #FFFFFF;
        padding-top: 1rem;
    }
    .card-image-s{
        padding: 2rem;
    }
}
</style>