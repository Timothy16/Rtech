<template>
  <div class="section-service">
    <div class="header-service">How Our System Works</div>
    <div class="card-section">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-5">
                <div><img src="/images/phone_guy.png" class="img-fluid" alt="" srcset=""></div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-7">
                <div class="text-call-section">
                    <div class="sec-down-1">
                        <div class="header-how-it">Create Account</div>
                        <div class="text-how-it">Create an account with your valid details and add your bank account / mobile money.</div>
                    </div>
                    <div class="sec-down">
                        <div class="header-how-it">Begin Trade</div>
                        <div class="text-how-it">Start a trade by simply clicking on Sell Gift Card on the home page, select the gift card you want and upload it.</div>
                    </div>
                    <div class="sec-down">
                        <div class="header-how-it">Wait for Confirmation</div>
                        <div class="text-how-it">Wait for your transaction to be processed, this usually takes less than 5 minutes. Once your card has been redeemed, your wallet will be credited immediately.</div>
                    </div>
                    <div class="sec-down">
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
    padding: 6rem;
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
}
</style>