<template>
<client-only>
  <div class="fixed-top" ref="navbar">
    <nav class="navbar navbar-expand-lg bg-white container-width container-fluid">
      <div class="container-fluid ">
        <nuxt-link class="navbar-brand" to="/" style="border-bottom : none"><img src="/images/logo_one.png" alt="" srcset=""></nuxt-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link active" aria-current="page" >Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/rates" class="nav-link">Rates</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/contact-us" class="nav-link" >Contact Us</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/about-us" class="nav-link" >About Us</nuxt-link>
            </li>
          </ul>
          <!-- <div v-if="authenticated" class="ml-auto">
              <nuxt-link to="/dashboard/profile">
                <img v-if="profileImg" :src="profileImg" class="img-head" alt="">
                <img v-else src="/images/avarter.jpg" class="img-head" alt="">
                <span class="username">{{username}}</span>
              </nuxt-link>
          </div> -->
           <div v-if="authenticated" class="dropdown ml-auto">
                <a class="dropdown-toggle t-g-menu ml-2 text-dark" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                 
                    <img v-if="profileImg" :src="profileImg" class="img-head" alt="">
                    <img v-else src="/images/avarter.jpg" class="img-head" alt="">
                    <span class="username">{{username}}</span>
                 
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                    <nuxt-link
                            style="font-size : 14px"
                            class="dropdown-item"
                            to="/dashboard/profile"> 
                            <i class="fas fa-fw fa-user-circle"></i> &nbsp; My
                            Account</nuxt-link
                            >
                    </li>
                    <li>
                        <span class="dropdown-item" style="font-size : 14px; cursor : pointer"
                          v-on:click="logout()"
                          ><i class="fas fa-fw fa-sign-out-alt"></i> &nbsp;
                          Logout</span>
                    </li>
                    
                </ul>
            </div>
          <form v-else class="d-flex ml-auto" role="search">
           <div class="btn-login-nav" @click="goToLogin">Log in</div>
           <div class="btn-signing-nav" @click="goToSignUp">Create Account</div>
            <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
          </form>
          
        </div>
      </div>
    </nav>
  </div>
</client-only>
</template>

<script>
export default {
   computed : {
    username(){
      return this.user ? this.user.username : ""
    },
    profileImg(){
      return this.user ? this.user.picture : ''
    }
    
  },
  methods : {
    goToLogin(){
      this.$router.push("/login")
    },
     goToSignUp(){
      this.$router.push("/signin")
    },
    logout() {
      this.$auth.logout();
    },
  },
  mounted(){
    // console.log("auth", this.authenticated)
  }
}
</script>

<style scoped>
.username{
  color: #000;
  font-weight: 500;
}
a{
  text-decoration: none ;
}
.img-head{
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.menu-edit-1{
    box-shadow: 0 0 10px #f2f2f2;
    background: #fff;
}
.container-width{
    padding: 1rem 5rem;
}
.btn-login-nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  gap: 10px;
  background: #FFFFFF;
  border: 1px solid #0C64E6;
  border-radius: 10px;
  color: #0C64E6;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-login-nav:hover{
  border: 1px solid #F9DF4C;
  color: #000;
  font-weight: 600;
}
.btn-signing-nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  gap: 10px;
  background: #0C64E6;
  border-radius: 10px;
  color: #FFFFFF;
  font-weight: 600;
  margin-left: 1rem;
  font-size: 20px;
  line-height: 23px;
  cursor: pointer;
  transition: 0.3s;
}
.btn-signing-nav:hover{
  background: #F9DF4C;
  color: #000;
  
}
a.nav-link{
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: #0C64E6;  
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-left: 1rem;
  margin-right: 1rem;
}
a.nav-link:hover{
  border-bottom: 3px solid #F9DF4C;
}
a.nuxt-link-active {
  /* color: red; */
}
a.nuxt-link-exact-active {
  color: #0C64E6;
  border-bottom: 3px solid #0C64E6;
}
@media screen and (max-width : 578px){
  .container-width{
    padding: .1rem;
  }
}
</style>