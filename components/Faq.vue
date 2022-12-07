<template>
  <div class="container-fluid container-width mb-3">
    <div class="container">
        <div class="big-text-bg">
            <div class="text-inside">FAQ</div>
        </div>
        <div class="accordion accordion-flush mt-5" id="accordionFlushExample" v-if="faqs.length > 0">
            <div class="accordion-item mb-3"  v-for="(help, index) in faqs" :key="index">
            <h2 class="accordion-header" :id="'flush-headingOne'+index">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapseOne'+index" aria-expanded="false" :aria-controls="'flush-collapseOne'+index">
                    {{help.title}}
                </button>
            </h2>
            <div :id="'flush-collapseOne'+index" class="accordion-collapse collapse" :aria-labelledby="'flush-headingOne'+index" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <p v-html="help.description"></p>
                </div>
            </div>
            </div>      
        </div> 

    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
     computed : {
        ...mapGetters({
            faqs : "faqs",
        }),
    },
    methods : {
        ...mapActions({
            getAllFaq : "getAllFaq",
        }),
    },
    mounted(){
        this.getAllFaq()
    }
}
</script>

<style scoped>
.big-text-bg{
    background: #0C64E6;
    border: 1px solid #000000;
    border-radius: 20px;
    padding: 5rem;
}
.text-inside{
    font-style: normal;
    font-weight: 700;
    font-size: 96px;
    line-height: 113px;
    color: #fff;
    letter-spacing: 1em;
    text-align: center !important;
    /* display: flex;
    align-items: center;
    justify-content: center; */
}
.container-width{
    padding: 4rem 6rem;
    margin-top: 7rem;
}
@media screen and (max-width : 578px){
    .container-width{
        padding: .1rem;
        margin-top: 7rem;
    }
    .text-inside{
        font-size: 30px;
        line-height: 113px;
    }
    .big-text-bg{
        background: #0C64E6;
        border: 1px solid #000000;
        border-radius: 20px;
        padding: 1rem;
    }
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
    .container-width{
        padding: 1rem;
        margin-top: 7rem;
    }
}
</style>