<template>
  <div class="">
    <Faq />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Home/Footer.vue'
import Faq from '@/components/Faq.vue'
export default {
  components: { Footer, Faq },
  name: 'IndexPage',
  layout : "landing-page",
  head() {
        return {
            title: "FAQ / Rtechbiz",
        };
    },
}
</script>
<style scoped>
html {
   scroll-behavior: smooth;
}
</style>