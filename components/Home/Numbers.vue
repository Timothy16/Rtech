<template>
  <div class="section-service container-fluid">
    <div class="section-flex text-desktop">
        <div>
            <div class="text-center"><span class="number-text-1">165 +</span> <br> <span class="number-text-2">Support Given</span></div>
        </div>
        <div>
            <div class="text-center"><span class="number-text-1">254 +</span> <br> <span class="number-text-2">Happy Client</span></div>
        </div>
        <div>
            <div class="text-center"><span class="number-text-1">2000 +</span> <br> <span class="number-text-2">Successful Deals</span></div>
        </div>
        <div>
            <div class="text-center"><span class="number-text-1">4.7</span> <br> <span class="number-text-2">Average Rating</span></div>
        </div>
    </div>
    <div class="row text-mobile">
        <div class="col-6 mb-2">
            <div class="text-center"><span class="number-text-1">165 +</span> <br> <span class="number-text-2">Support Given</span></div>
        </div>
        <div class="col-6 mb-2">
            <div class="text-center"><span class="number-text-1">254 +</span> <br> <span class="number-text-2">Happy Client</span></div>
        </div>
        <div class="col-6">
            <div class="text-center"><span class="number-text-1">2000 +</span> <br> <span class="number-text-2">Successful Deals</span></div>
        </div>
        <div class="col-6">
            <div class="text-center"><span class="number-text-1">4.7</span> <br> <span class="number-text-2">Average Rating</span></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.section-service{
    padding: 1rem 6rem;
}
.section-flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.number-text-1{
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #000000;
}
.number-text-2{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 33px;
    text-align: center;
    color: #000000;
}
.text-mobile{
    /* display: none; */
    visibility: hidden;
}
@media screen and (max-width : 578px){
.section-service{
    padding: 1rem;
}
.number-text-1{
    font-size: 24px;
    line-height: 33px;
}
.number-text-2{
    font-size: 12px;
    line-height: 33px;
}
.text-mobile{
    /* display: block; */
    visibility: visible;
}
.text-desktop{
    display: none;
}
}
@media screen and (max-width : 768px){
    .section-flex{
        margin-top: 2rem;
    }
}
</style>