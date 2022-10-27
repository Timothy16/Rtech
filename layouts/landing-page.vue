<template>
    <div>
        <div class="container-width">
            <TopMenu />
            <Nuxt />
        </div>
        <!-- <a class="scroll-to-top rounded back-red" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a> -->
    </div>
</template>
<script>

import TopMenu from "./partials/TopMenu.vue";
// import TheFooter from "./partials/TheFooter.vue";


export default {
   
    components: {
        TopMenu
    },

};
</script>




<style scoped>
.container-width{
    /* padding: .2rem 5rem; */
}
</style>