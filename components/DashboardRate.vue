<template>
        <div class="">
                <div class="form-bg">
                    <div class="header-d-flex">
                        <div class="header-text">Check Rate</div>
                        <div class="d-flex justify-content-center mt-3">
                            <div class="btn btn-giftcard" :class="{'btn-giftcard-1' : isGift}" @click="tradeGiftCard">Giftcards</div>
                            <div class="btn btn-cypto ml-3" :class="{'btn-cypto-1' : isCrypto}" @click="tradeCrypto">Cryptocurrency</div>
                        </div>
                    </div>

                    <div class="form-data" v-if="isGift">
                        <form action="">
                            <select @change="selectCard(cardName)" v-model="cardName" class="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option value="" selected disabled>Select giftcard category</option>
                                <option :value="giftcard" v-for="(giftcard, index) in giftcards" :key="index">{{giftcard.name}}</option>
                                
                            </select>

                            <select class="form-select form-control mt-5 form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected disabled>Card Type</option>
                                <option value="Physical">Physical</option>
                                <option value="Virtual">Virtual</option>
                            </select>
                            

                            <input v-model="amountCard" class="form-control form-control-lg mt-5" type="number" placeholder="Amount" aria-label=".form-control-lg example">

                        </form>
                    </div>

                    <div class="form-data" v-if="isCrypto">
                        <form action="">
                            <select @change="selectCoin(coinName)" v-model="coinName" class="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option value="" selected disabled>Select Cryptocurrency</option>
                                <option :value="crypto" v-for="(crypto, index) in cryptos" :key="index">{{crypto.name}}</option>
                            </select>

                            <input v-model="amountCoin" class="form-control form-control-lg mt-5" type="number" placeholder="Amount" aria-label=".form-control-lg example">

                            <!-- <button class="btn-trade-now">Check Rate</button> -->

                        </form>
                    </div>

                    <div class="calculation-head" v-if="isGift">
                        <div class="pay-out">
                            <div class="total">You Get</div>
                            <div class="amount">NGN {{giftcardTotal | currency}}</div>
                        </div>
                    </div>
                    <div class="calculation-head" v-if="isCrypto">
                        <div class="pay-out">
                            <div class="total">You Get</div>
                            <div class="amount">NGN {{cryptoTotal | currency}}</div>
                        </div>
                    </div>
                </div>
        </div>
        
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
            isGift : true,
            isCrypto : false,
            cardName : "",
            cardInfo : null,
            amountCard : "",
            amountCoin : "",
            coinName : "",
            coinInfo : ''
        }
    },
    computed : {
        ...mapGetters({
            giftcards : "giftcards",
            cryptos : "cryptos"
        }),
        giftcardTotal(){
            if(this.cardInfo){
                return this.cardInfo.amount * this.amountCard
            }
            return ""
        },
        cryptoTotal(){
            if(this.coinInfo){
                return this.coinInfo.amount * this.amountCoin
            }
            return ""
        }
    },
    methods : {
        ...mapActions({
            getGiftcardRate : "getGiftcardRate",
            getCryptoRate : "getCryptoRate"
        }),
        tradeGiftCard(){
            this.isGift = true
            this.isCrypto = false
            
        },
        tradeCrypto(){
            this.isGift = false
            this.isCrypto = true
            
        },
        selectCard(values){
            this.cardInfo = values
        },
        selectCoin(values){
            this.coinInfo = values
        }
    },
    mounted(){
        this.getGiftcardRate()
        this.getCryptoRate()
    }
}
</script>

<style scoped>
.container-width{
    padding: 1rem 6rem;
    margin-top: 7rem;
}
.header-d-flex{
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
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
    padding: 1.5rem 2rem;
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
    font-size: 14px;
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
    font-size: 14px;
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
    font-size: 14px;
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
    /* font-size: 24px; */
    line-height: 28px;
    color: #FFFFFF !important;
    font-size: 14px;
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
    /* font-size: 24px; */
    line-height: 28px;
    font-size: 14px;
    color: #0C64E6;
}
.btn-giftcard:hover{
    background: #0C64E6;
    border: 1px solid #0C64E6;
    color: #FFFFFF;
    
}
.header-text{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    padding-top: 1rem;
    line-height: 28px;
    color: #000000;
    text-align: center;
}
.form-bg{
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
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
    font-size: 16px;
    line-height: 23px;
    color: rgba(0, 0, 0, 0.5);
}
.amount{
    font-style: normal;
    font-weight: 710;
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
    padding: 0 2rem;
}
@media screen and (max-width : 578px){
 .container-width{
    padding: .1rem;
    margin-top: 7rem;
}
.form-data{
    padding: 1rem .5rem;
}
.calculation-head{
    padding: 1rem 4rem;
    margin-top: .1rem;
}
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
    .container-width{
    padding: 1rem;
    margin-top: 7rem;
}
.form-data{
    padding: 1rem .5rem;
}
.calculation-head{
    padding: 1rem 4rem;
    margin-top: .1rem;
}

}
</style>