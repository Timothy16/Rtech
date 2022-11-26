<template>
  <div class="container-fluid container-width mb-3">
    <div class="container">
        <div class="big-text-bg">
            <div class="text-inside">FAQ</div>
        </div>
        <div class="accordion  mt-4" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
            </div>
            <div class="accordion-item mt-4">
                <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div class="accordion-item mt-4">
                <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    methods : {
        
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