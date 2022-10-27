<template>
  <div class="section-service container-fluid">
    <div class="header-service">GiftCards We Buy <img src="/images/circle_card.png" class="img-fluid img-position" alt=""></div>
    <div class="section-flex">
        <img src="/images/amazon.png" class="img-fluid" alt="">
        <img src="/images/xbox.png" class="img-fluid card-left" alt="">
        <img src="/images/nike.png" class="img-fluid card-left" alt="">
        <img src="/images/ebay.png" class="img-fluid card-left" alt="">
        <img src="/images/btc_img.png" class="img-fluid card-left" alt="">
    </div>
    <div class="section-flex-2 ">
        <img src="/images/american_express.png" class="img-fluid" alt="">
        <img src="/images/mays.png" class="img-fluid card-left" alt="">
        <img src="/images/nordstorm.png" class="img-fluid card-left" alt="">
        <img src="/images/eth.png" class="img-fluid card-left" alt="">
        <img src="/images/sephora.png" class="img-fluid card-left" alt="">
    </div>

    <div class="mobile">
        <div class="row">
            <div class="col-6">
                <img src="/images/amazon.png" class="img-fluid card-left-1" alt="">
                <img src="/images/xbox.png" class="img-fluid card-left" alt="">
                <img src="/images/nike.png" class="img-fluid card-left" alt="">
                <img src="/images/ebay.png" class="img-fluid card-left" alt="">
                <img src="/images/btc_img.png" class="img-fluid card-left" alt="">
            </div>
            <div class="col-6">
                <img src="/images/american_express.png" class="img-fluid card-left-1" alt="">
                <img src="/images/mays.png" class="img-fluid card-left" alt="">
                <img src="/images/nordstorm.png" class="img-fluid card-left" alt="">
                <img src="/images/eth.png" class="img-fluid card-left" alt="">
                <img src="/images/sephora.png" class="img-fluid card-left" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card-left{
    margin-left: 1rem;
}
.mobile{
    display: none;
}
.img-position{
    position: relative;
    left: -61px;
}
.header-service{
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    text-align: center;
    color: #000000;
}
.section-service{
    padding: 1rem 7rem 3rem 7rem;
}
.section-flex{
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin-top: 5rem;
}
.section-flex-2{
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin-top: 2.4rem;
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
@media screen and (max-width : 578px){
    .section-service{
        padding: 1rem;
    }
    .header-service{
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 47px;
        text-align: center;
        color: #000000;
    }
    .img-position{
        position: absolute;
        left: 261px;
        width: 80px !important;
    }
    .section-flex{
        display: none;
    }
    .card-left{
         margin-left: 0;
         margin-top: .5rem;
         width: 150px;
         /* height: 100px; */
    }
    .card-left-1{
        margin-left: 0;
        margin-top: .5rem;
        width: 150px;
    }
    .section-flex-2{
        display: none;
    }
    .mobile{
        display: block;
    }
}
</style>