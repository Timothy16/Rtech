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
                        <div class="header-title text-center">Create a Secure Account</div>
                        <p class="text-center">Welcome to Rtech</p>
                        <form action="" @submit.prevent>
                            <div class="form-edit">
                                <div class="mb-4">
                                    <label class="form-label">Full Name </label>
                                    <div class="d-flex form-control-1">
                                        <div class="icon-pad">
                                            <img src="/images/profile.png" alt="" srcset="">
                                        </div>
                                        <input v-model="name" type="text" class="form-control form-control-plaintext w-100 mr-3" placeholder="Enter full name">
                                    </div>
                                    <p  v-if="field_errors.name" class="text-danger"> {{ field_errors.name[0]}}</p>
                                </div>
                                <div class="mb-4">
                                    <label class="form-label">Username </label>
                                    <div class="d-flex form-control-1">
                                        <div class="icon-pad">
                                            <img src="/images/profile.png" alt="" srcset="">
                                        </div>
                                        <input v-model="username" type="text" class="form-control form-control-plaintext w-100 mr-3" placeholder="Enter username">
                                    </div>
                                    <p  v-if="field_errors.username" class="text-danger"> {{ field_errors.username[0]}}</p>
                                </div>
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
                                    <label class="form-label">Phone </label>
                                    <div class="d-flex form-control-1">
                                        <div class="icon-pad">
                                            <img src="/images/phone.png" alt="" srcset="">
                                        </div>
                                        <MazPhoneNumberInput v-model="phone" :fetchCountry='true' size="sm" class="w-100" />
                                        <!-- <input  type="number" class="form-control form-control-plaintext w-100 mr-3" placeholder="Phone number"> -->
                                    </div>
                                    <p  v-if="field_errors.phone" class="text-danger"> {{ field_errors.phone[0]}}</p>
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
                                
                                <button type="submit" @click="registerUserData()" :disabled="registering" class="btn-login btn">{{registering ? 'Registering...' :'CREATE ACCOUNT'}}</button>
                            </div>
                        </form>
                    </div>

                    <p class="text-center new-account">Already have an account? <nuxt-link to="/login"> <span class="new-acc">Log In</span> </nuxt-link> </p>
                </div>
            </div>
        </div>
    </div>
    <notifications position="top right" group="all" />
  </div>
</template>



<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
    layout: "password",
    // middleware: 'guest',
    data() {
        return {
            name: null,
            username: null,
            email: null,
            password: null,
            phone : ""
        };
    },
   
    computed: {
        ...mapGetters({
            registering: "registering",
        }),
    },
    methods: {
        ...mapActions({
            register: "register",
        }),

        ...mapMutations({
            SET_REGISTERING: "SET_REGISTERING",
        }),

        async registerUserData() {
            try {
                let parameter = {
                    email: this.email,
                    password: this.password,
                    name: this.name,
                    username: this.username,
                    phone : this.phone
                };
                await this.register(parameter);

                const data = {
                    email: this.email,
                    password: this.password,
                };

                await this.$auth.login({ data });

                
                let redirect = "/dashboard?dom=thank-you-for-registering";
            

                this.$router.push(redirect);

                this.SET_REGISTERING(false);
            } catch (error) {
                this.SET_REGISTERING(false);
            }
        },
    },
};
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
}
a{
    text-decoration: none;
    color: #fff;
}
.bg-mobile{
    background: #FFFFFF;
    padding: 1rem 1rem;
    border-top-right-radius: 1.25rem;
    border-top-left-radius: 1.25rem;
    border-bottom-right-radius: 1.25rem;
    margin-top: 2rem;
}
.img-class{
    width: 732px;
    height: 732px;
    border-radius: 25px;
    margin-top: 2rem;
}
.card-image-s{
    background: url("/images/sign_bg.png");
    background-size: cover;
    height: 100%;
    padding: 10rem;
    /* background: #000000; */
}
.big-bg{
    background-color: #0C64E6;
    /* height: 100vh; */
}
.header-title{
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 28px;
    color: #0C64E6;
    /* margin-top: 1.5rem; */
}
.inner-space {
    margin: 1rem 0;
}
/* .img-logo{
    width: 80px;
    height: 80px;
} */
.form-edit{
    padding: .2rem 5rem;
}
label{
    font-style: normal;
    font-weight: 600;
    font-size: .75rem;
    line-height: 23px;
    color: #0C64E6;
}

.form-control{
    /* box-sizing: border-box;
    width: 650px; */
    height: auto;
    border: none;
    font-size: .75rem;
    /* padding: .3rem; */
    color: #000;
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
    /* padding-left: 1rem; */
    font-size: .75rem;
}
.btn-login{
    padding: 10px;
    width: 650px;
    /* height: 68px; */
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
    color: #fff;
}
.new-acc{
    font-weight: 700;
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
        margin-top: 2rem !important;
        padding: 1rem;
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
        margin-bottom: 1rem;
    }
    .big-bg{
        background-color: #0C64E6;
        height: auto ;
    }
}
@media screen and (min-width : 768px) and (max-width : 1024px){
     .on-mobile{
        display: none;
    }
    .inner-space {
        margin-top: 3rem;
        padding: 1rem;
    }
    .form-edit{
        padding: 0;
        margin-top: 2rem;
    }
    .big-bg{
        background-color: #0C64E6;
        height: auto ;
    }
    .form-control-1{
        box-sizing: border-box;
        width: 100% !important ;
    }
    .btn-login{
        width: 100% !important;
        margin-bottom: 2rem;
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