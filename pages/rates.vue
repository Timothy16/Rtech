<template>
  <div class="">
    <Rates />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Home/Footer.vue'
import Rates from '../components/Rates.vue'
export default {
  components: { Rates, Footer },
  name: 'IndexPage',
  layout : "landing-page",
  head() {
        return {
            title: "Rate / Rtechbiz",
        };
    },
}
</script>
<style scoped>
html {
   scroll-behavior: smooth;
}
</style>