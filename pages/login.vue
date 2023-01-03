<template>
  <div>
    <LoginComponent class="display-desktop"/>
    <MobileLogin class="display-mobile"/>
  </div>
</template>

<script>
import LoginComponent from '../components/LoginComponent.vue'
import MobileLogin from '../components/MobileLogin.vue';
export default {
  components: { LoginComponent, MobileLogin },
  head() {
      return {
            title: "Login / Rtechbiz",
        };
    },

}
</script>

<style scoped>
.display-mobile{
    display: none;
}
@media screen and (max-width : 578px){
    .display-mobile{
        display: block;
    }
    .display-desktop{
        display: none;
      }
}
@media screen and (max-width : 768px){
   .display-mobile{
        display: block;
    }
    .display-desktop{
        display: none;
      }
}
</style>