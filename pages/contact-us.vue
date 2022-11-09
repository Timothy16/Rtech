<template>
  <div class="">
    <ContactUs />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Home/Footer.vue'
import ContactUs from '../components/ContactUs.vue'
export default {
  components: { ContactUs, Footer },
  name: 'IndexPage',
  layout : "landing-page",
  head() {
        return {
            title: "Contact Us / Rtechbiz",
        };
    },
}
</script>
<style scoped>
html {
   scroll-behavior: smooth;
}
</style>