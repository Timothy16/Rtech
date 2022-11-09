<template>
    <div class="container-fluid mb-5">
       <div class="form-card shadow">
        <div class="faq">FAQs</div>
        <h5><strong>Frequently Asked Questions</strong></h5>
        <div class="accordion accordion-flush mt-1" id="accordionFlushExample">
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
            <div class="accordion-item mt-2">
                <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div class="accordion-item mt-2">
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
    layout : "dashboard-layout",
    head() {
        return {
            title: "Help / Rtechbiz",
        };
    },
}
</script>

<style scoped>
.form-card{
    padding: 1.5rem;
    width: 90%;
    /* margin: auto; */
    border-radius: 30px;
}
button{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;

    color: #000000 !important;
}
.accordion-item{
/* width: 1234px; */
/* height: 100px; */

background: #FFFFFF;
border: 2px solid #0C64E6 !important;
/* border-radius: 10px; */
}
h5{
    color: rgba(0, 0, 0, 0.7);
}
.faq{
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 47px;
    color: #000000;
}
@media screen and (max-width : 578px){
    .form-card{
        width: 100%;
    }
    .form-control{
        height: 60px;
    }
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
    .form-card{
        width: 100%;
    }
    .form-control{
        height: 60px;
    }
}
</style>