<template>
  <div>
      <SignInComponent class="display-desktop" />
      <MobileSignIn class="display-mobile"/>
  </div>
</template>

<script>
import MobileSignIn from '../components/MobileSignIn.vue';
import SignInComponent from '../components/SignInComponent.vue'
export default {
  components: { SignInComponent, MobileSignIn },
  head() {
        return {
            title: "Register / Rtechbiz",
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