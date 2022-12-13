<template>
<client-only>
   <div class="container-fluid full-height">
      <div class="login-main-left">
          <div class="text-center login-main-left-header">
            <nuxt-link to="/">
              <img src="/images/logo_one.png" class="img-fluid1" height="70" alt="LOGO">
            </nuxt-link>
            <div class="password-text">Create New Password</div>
          
          </div>
          <form action="/" v-on:submit.prevent>
            <!-- <div class="form-group">
                <label>Email</label>
                <input type="email" disabled v-model="email" class="form-control" placeholder="Enter email address">
                <p  v-if="field_errors.email" class="text-danger"> {{ field_errors.email[0]}}</p>
                
            </div> -->
            <div class="form-group">
                <label>New Password</label>
                <input type="password" v-model="password" class="form-control" placeholder="Enter new password">
                <p  v-if="field_errors.password" class="text-danger"> {{ field_errors.password[0]}}</p>
            </div>
            <div class="mt-4">
                <div class="row">
                  <div class="col-12">
                      <button :disabled="loading" type="submit" class="btn btn-primary btn-block btn-lg"  v-on:click="resetPasswordUser()"> {{loading ? 'Please wait...' : 'Change Password'}} </button>
                  </div>
                </div>
            </div>
          </form>
          <div class="text-center mt-5">
            <p class="light-gray">Already have an account? <nuxt-link to="/login">Sign In</nuxt-link></p>
          </div>
      </div>
      <notifications position="top right" group="all" />
    </div>
</client-only>
</template>

<script>
import {mapActions, mapMutations , mapGetters} from 'vuex'

export default {
  layout: 'password',
  
  head () {
      return {
        title: "Reset password / RtechBiz" ,

      }
  },
  data(){
    return{
      // token: null,
      password: null,
    }
  },
 computed:{
    ...mapGetters({
        'loading':    'loading',
    }),
  },
  methods:{
      ...mapMutations({
        'SET_LOADING':    'SET_LOADING',
      }),

      ...mapActions({
        'resetPassword' : 'resetPassword'
      }),

      async resetPasswordUser(){
            let token = this.$route.query.token
            // console.log('token', token)
            try {
                let parameter= {
                    password: this.password,
                    password_confirmation : this.password
                }

                await this.resetPassword({token, parameter})
                this.password = ""
                // let redirect =  '/login'
                this.$router.push('/login')
            
            } catch (error) {
            this.SET_LOADING(false)
            
            }
            
        }
  }
   
}
</script>
<style scoped>
a{
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  color: #000;
}
.full-height{
   /* background: #e9ecef; */
   background-color: #0C64E6;
   height: 100vh;
   height: 100vh;
   padding-top: 5rem;
}
.login-main-left{
  margin: auto;
  width: 30%;
  padding: 2rem 1rem;
  background: #fff;
}
.password-text{
  font-size: 2.5rem;
  padding: 1.3rem 0;
  font-weight: 700;
  /* letter-spacing: 5px; */
}
@media screen and (max-width : 578px){
.full-height{
   /* background: #e9ecef; */
   background-color: #0C64E6;
   height: 100vh;
}
.login-main-left{
  margin: auto;
  width: 100%;
  padding-top: 5rem;
}
.password-text{
  font-size: 1.5rem;
  padding: 1rem 0;
  font-weight: 700;
  /* letter-spacing: 5px; */
}
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
.full-height{
   /* background: #e9ecef; */
   background-color: #0C64E6;
   height: 100vh;
}
.login-main-left{
  margin: auto;
  width: 50%;
  padding-top: 5rem;
}
.password-text{
  font-size: 1.5rem;
  padding: 1rem 0;
  font-weight: 700;
  /* letter-spacing: 5px; */
}
}
</style>