<template>
    <div>
        <div class="container-width">
            <TopMenu class="desktop-v"/>
            <TopMobile class="mobile-v" />
            <Nuxt />
        </div>
        <!-- <a class="scroll-to-top rounded back-red" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a> -->
    </div>
</template>
<script>

import TopMenu from "./partials/TopMenu.vue";
import TopMobile from "./partials/TopMobile.vue";
// import TheFooter from "./partials/TheFooter.vue";


export default {
   
    components: {
        TopMenu, TopMobile
    },

};
</script>




<style scoped>
.container-width{
    /* padding: .2rem 5rem; */
}
.mobile-v{
    display: none;
}
@media screen and (max-width : 578px){
    .mobile-v{
        display: block;
    }
    .desktop-v{
        display: none;
    }
}
@media screen and (max-width : 768px){
    .mobile-v{
        display: block;
    }
    .desktop-v{
        display: none;
    }
}
</style>