<template>
  <div class=" fixed-top">
    <nav class="navbar navbar-expand-lg bg-white container-width container-fluid">
      <div class="container-fluid ">
        <a class="navbar-brand" href="#"><img src="/images/logo_one.png" alt="" srcset=""></a>
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
          <form class="d-flex ml-auto" role="search">
           <div class="btn-login-nav" @click="goToLogin">Log in</div>
           <div class="btn-signing-nav" @click="goToSignUp">Create Account</div>
            <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods : {
    goToLogin(){
      this.$router.push("/login")
    },
     goToSignUp(){
      this.$router.push("/signin")
    }
  }
}
</script>

<style scoped>
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