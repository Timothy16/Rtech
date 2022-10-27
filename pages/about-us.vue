<template>
  <div class="">
    <AboutUs />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Home/Footer.vue'
import AboutUs from '../components/AboutUs.vue'
export default {
  components: { AboutUs, Footer },
  name: 'IndexPage',
  layout : "landing-page",
}
</script>
<style scoped>
html {
   scroll-behavior: smooth;
}
</style>