<template>
  <div class="container-fluid container-width">
    <div class=" container">
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-8">
                <div class="form-bg">
                    <div class="header-text text-center">Rate Calculator</div>
                    <div class="d-flex justify-content-center mt-3">
                        <div class="btn btn-giftcard" :class="{'btn-giftcard-1' : isGift}" @click="tradeGiftCard">Giftcards</div>
                        <div class="btn btn-cypto ml-3" :class="{'btn-cypto-1' : isCrypto}" @click="tradeCrypto">Cryptocurrency</div>
                    </div>

                    <div class="form-data" v-if="isGift">
                        <form action="">
                            <select class="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>Card Name</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <select class="form-select form-control mt-5 form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>Card Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <input class="form-control form-control-lg mt-5" type="text" placeholder="Card Amount" aria-label=".form-control-lg example">

                            <button class="btn-trade-now">Trade Now</button>

                        </form>
                    </div>

                    <div class="form-data" v-if="isCrypto">
                        <form action="">
                            <select class="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>Cryptocurrency</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <input class="form-control form-control-lg mt-5" type="text" placeholder="usd" aria-label=".form-control-lg example">

                            <button class="btn-trade-now">Trade Now</button>

                        </form>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="calculation-head">
                    <div class="rate-fee">Rate: #450</div>
                    <div class="pay-out mt-5">
                        <div class="total">Total Payout</div>
                        <div class="amount">NGN 250,000</div>
                    </div>
                    <img src="/images/rate-arrow.png" class="img-fluid img-edit" alt="" srcset="">
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
            isGift : true,
            isCrypto : false
        }
    },
    methods : {
        tradeGiftCard(){
            this.isGift = true
            this.isCrypto = false
        },
        tradeCrypto(){
            this.isGift = false
            this.isCrypto = true
        }
    }
}
</script>

<style scoped>
.container-width{
    padding: 1rem 6rem;
    margin-top: 7rem;
}
.btn-trade-now{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 40px;
    background: #0C64E6;
    border-radius: 10px;
    border: none;
    margin-top: 2rem;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    width: 100%;
    color: #FFFFFF;
}
.form-data{
    padding: 1.5rem 5rem;
}
.form-control{
    box-sizing: border-box;
    width: 100%;
    height: 64px;
    border: 1px solid #0C64E6;
    border-radius: 5px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
}
.btn-cypto{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid #FFA346;
    border-radius: 5px;
    color: #FFA346;
}
.btn-cypto:hover{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: #FFA346;
    border: 1px solid #FFA346;
    border-radius: 5px;
    color: #FFFFFF;
}
.btn-cypto-1{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: #FFA346;
    color: #FFFFFF;
    border: 1px solid #FFA346;
    border-radius: 5px;
}
.btn-giftcard-1{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: #0C64E6 !important;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF !important;
}
.btn-giftcard{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid #0C64E6;
    border-radius: 5px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #0C64E6;
}
.btn-giftcard:hover{
    background: #0C64E6;
    border: 1px solid #0C64E6;
    color: #FFFFFF;
}
.header-text{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #000000;
    text-align: center;
}
.form-bg{
    padding: 24px 0px 0px;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(12, 100, 230, 0.25);
}
.rate-fee{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: rgba(0, 0, 0, 0.8)
}
.total{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: rgba(0, 0, 0, 0.5);
}
.amount{
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #0C64E6;
}
.img-edit{
    position: relative;
    top: -70px;
    left: -80px;
}
.calculation-head{
    padding: 4rem;
    margin-top: 5rem;
}
@media screen and (max-width : 578px){
 .container-width{
    padding: 1rem;
    margin-top: 7rem;
}
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
    .container-width{
    padding: 1rem;
    margin-top: 7rem;
}

}
</style>