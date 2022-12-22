<template>
  <div class="section-service">
    <div class="header-service" data-aos="fade-up">How Our System Works</div>
    <div class="card-section">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-5">
                <div class="card-img-c" data-aos="zoom-in" data-aos-delay="500"><img src="/images/phone_guy.png" class="img-fluid" alt="" srcset=""></div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-7">
                <div class="text-call-section card-img-c">
                    <div class="sec-down-1" data-aos="fade-down" data-aos-delay="500">
                        <div class="header-how-it">Create Account</div>
                        <div class="text-how-it">Create an account with your valid details and add your bank account / mobile money.</div>
                    </div>
                    <div class="sec-down" data-aos="fade-down" data-aos-delay="600">
                        <div class="header-how-it">Begin Trade</div>
                        <div class="text-how-it">Start a trade by simply clicking on either SELL GIFTCARD or SELL CRYPTO button, depending on what you want to trade a particular point in time, then you proceed to select the type of gift card or type of crypto you wishes to sell and the amount.</div>
                    </div>
                    <div class="sec-down" data-aos="fade-down" data-aos-delay="700">
                        <div class="header-how-it">Wait for Confirmation</div>
                        <div class="text-how-it">Kindly wait while your transaction is being processed. For crypto trading, it depends solely on how fast your coin confirms. Basically, for BTC, we require a minimum of 1/3 confirmation before we proceed with payment. For giftcard trading, the usage time of cards varies. Thus, for those with shopping cards such as Amex, Vanilla, Sephora, etc.., it might take a longer period of time to process compared to those with instant loading cards such as Steam Wallet giftcard. Google play, Apple giftcard and so on. However, for both instant and long-time consumption cards, we can guarantee a very secured and safe trade and payment will be made immediately after the trade has been successfully completed.</div>
                    </div>
                    <div class="sec-down" data-aos="fade-down" data-aos-delay="800">
                        <div class="header-how-it">Withdraw Funds</div>
                        <div class="text-how-it">You can withdraw your funds at anytime you want no hassle. Pretty easy right? Now sign up and begin trading like a boss 😎</div>
                    </div>
                </div>
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
.card-section{
    padding: 1rem 6rem 6rem 6rem;
}
.header-service{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    max-width: 400px;
    margin: 80px auto;
    text-align: center;
    position: relative;
}
.header-service:before {
    content:" ";
    display: block;
    height: 5px;
    width: 50px;
    position: absolute;
    top: 50%;
    left: 0;
    background: #0C64E6;
}

.header-service:after {
    content:" ";
    height: 5px;
    width: 50px;
    background: #0C64E6;
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
}
.section-service{
    padding: 1rem 7rem;
}
.text-how-it{
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
    text-align: justify;
    margin-top: .8rem;
}
.sec-down{
    margin-top: 5em;
}
.header-how-it{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #0C64E6;
    flex: none;
    order: 0;
    flex-grow: 0;
}
@media screen and (max-width : 578px){
    .section-service{
        padding: 1rem;
    }
    .card-section{
        padding: 1rem;
    }
    .header-service{
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        color: #000000;
        max-width: 400px;
        margin: 30px auto;
        text-align: center;
        position: relative;
    }
    .sec-down{
        margin-top: 1.5em;
    }
    .sec-down-1{
        margin-top: 1.5em;
    }
    .header-how-it{
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        color: #0C64E6;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    .text-how-it{
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: #000000;
        flex: none;
        order: 1;
        flex-grow: 0;
        text-align: justify;
        margin-top: .8rem;
    }
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
     .card-section{
        padding: 1rem;
    }
    .section-service{
        padding: 1rem;
    }
    .card-img-c{
        text-align: center;
    }
    .text-how-it{
        text-align: center;
    }
}
</style>