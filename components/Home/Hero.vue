<template>
  <div class="width-vh container-fluid container-width">
    <div class="row">
        <div class="col-sm-12 col-lg-6 col-md-12">
            <div class="hero-picture">
                <img src="/images/cash_guy.png" class="img-fluid-1" alt="" srcset="">
            </div>
            <div class="mini-box shadow">
                <div class="num-text mb-2">100+</div>
                <div class="num-text-1 mb-2">Fastest & most Relaible Trading Platform</div>
                <div class="num-img"><img src="/images/pic-group.png" class="img-fluid" alt="" srcset=""></div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-6 col-md-12">
            <div class="hero-text-section" data-aos="fade-up" data-aos-duration="3000">
                <div class="img-arrow"><img src="/images/hero_arrow_1.png" alt="" width="300px" srcset=""></div>
                <div class="inner-header">Got <br> Cryptocurrencies <br> & Giftcards ?</div>
                <p class="inner-text" data-aos="fade-up" data-aos-duration="3000">
                    Trading your giftcards and cryptocurrencies for cash has never been easy? RTECH got you covered! Trade securely with no worries or delay. We also have the fastest, safest and the best payment channel, where you get your account credited within a few minutes of successful transaction.
                </p>
                <div class="d-flex justify-content-center">
                    <nuxt-link to="/rates">
                        <div class="btn-check-rates">Check Rates</div>
                     </nuxt-link>
                </div>
                <div class="img-arrow-1"><img src="/images/hero_arrow_2.png" width="300px" alt="" srcset=""></div>
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
.width-vh{
    height: 100vh;
    margin-top: 5.6rem;
}
.container-width{
    padding: 1rem 6rem;
}
.hero-picture{
    background: #DAE8F3;
    opacity: 0.9;
    box-shadow: 0px 4px 8px #DAE8F3;
    background-size: contain;
}
.hero-text-section{
     padding: 2rem 5rem;
}
.inner-header{
    font-style: normal;
    font-weight: 700;
    font-size: 67px;
    line-height: 80px;
    color: #000;
    padding-top: 4rem;
}
a{
    text-decoration: none;
}
.inner-text{
    font-style: normal;
    /* font-weight: 400; */
    font-size: 24px;
    /* line-height: 30px; */
    /* width: 90%; */
    color: #000;
    margin-top: 1.8rem;
    text-align: justify;
}
.img-arrow-1{
    margin-top: 1.5rem;
}
.img-arrow{
    float: right;
}
.btn-check-rates{
    padding: 20px 40px;
    background: #F9DF4C;
    border-radius: 10px;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    margin-top: 2rem;
}
.mini-box{
    width: 50%;
    margin: auto;
    padding: 1rem;
    background: #FFFFFF;
    /* box-shadow: 0px 4px 5px #DAE8F3; */
    border-radius: 20px;
    text-align: center;
    position: relative;
    top: -50px;
    /* left: 50px; */
}
.num-text-1{
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.8);
}
.num-text{
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #0C64E6;
}
.img-fluid-1{
    width: 100%;
    height: auto;
}
@media screen and (max-width : 578px){
  .container-width{
        padding: 1rem;
  }
  .mini-box{
    width: 100%;
    margin: auto;
    padding: .5rem;
    background: #FFFFFF;
    /* box-shadow: 0px 4px 5px #DAE8F3; */
    border-radius: 20px;
    text-align: center;
    position: relative;
    top: -50px;
    left: 0px;
}
.num-text-1{
    font-size: 12px;
}
.num-text{
    font-size: 24px;
     line-height: 25px;
}
.hero-text-section{
     padding: 1rem;
}
.inner-header{
    font-size: 32px;
    line-height: 50px;
    padding-top: .1rem;
}
.inner-text{
    font-style: normal;
    font-size: 16px;
    line-height: 25px;
    margin-top: 1.8rem;
}
.width-vh{
    height: auto;
    margin-top: 5.6rem;
}
.img-arrow{
    float: none;
}
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
    .width-vh{
        height: auto;
        margin-top: 5.6rem;
    }
    .inner-header{
        font-size: 57px;
        line-height: 50px;
        padding-top: .1rem;
    }
    .hero-text-section{
     padding: 2rem 1rem;
}
    
}
</style>