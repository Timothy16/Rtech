<template>
  <div class="">
    <Hero />
    <OurService />
    <HowItWorks />
    <Numbers/>
    <!-- <WeBuy /> -->
    <Testimonial />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Home/Footer.vue'
import Hero from '../components/Home/Hero.vue'
import HowItWorks from '../components/Home/HowItWorks.vue'
import Numbers from '../components/Home/Numbers.vue'
import OurService from '../components/Home/OurService.vue'
import Testimonial from '../components/Home/Testimonial.vue'
import WeBuy from '../components/Home/WeBuy.vue'
export default {
  components: { Hero, OurService, HowItWorks, Numbers, WeBuy, Testimonial, Footer },
  name: 'IndexPage',
  layout : "landing-page",
}
</script>
<style scoped>
html {
   scroll-behavior: smooth;
}
</style>