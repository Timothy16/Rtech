<template>
    <div class="container-fluid mb-5 bg-white pt-3 pb-5">
       <div class="form-card shadow">
        <div class="header-info">Trade <strong>{{giftcardName}}</strong> </div>
            <form action="" class="" @submit.prevent>                
                <div class="row">
                    <div class="col-lg-6 col-sm-12 col-md-6">
                        <select @change="selectRate(rateInfo)" v-model="rateInfo" class="form-select form-control form-select-lg mb-4" aria-label=".form-select-lg example">
                            <option value="" selected disabled>Select Card Category</option>
                            <option :value="rate" v-for="(rate, index) in giftcardRates" :key="index">{{rate.giftcard_name}}</option>
                        </select>
                        <p  v-if="field_errors.giftcard_id" class="text-danger"> {{ field_errors.giftcard_id[0]}}</p>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-md-6">
                        <select v-model="cardType" class="form-select form-control form-select-lg mb-4" aria-label=".form-select-lg example">
                            <option value="" selected disabled>Select Your Card Type</option>
                            <option value="Physical Card">Physical Card</option>
                            <option value="Virtual Card">Virtual Card</option>
                        </select>
                    </div>
                </div>
               
                <input v-model="amount" :class="{'p-not' : !selectedInfo}" :disabled="!selectedInfo" class="form-control form-control-lg mb-4" type="text" placeholder="Amount" aria-label=".form-control-lg example">

                <div class="text-center value mt-5"><strong>Cash Value</strong></div>
                <div class="text-center cash-v mb-5">{{selectedInfo ? selectedInfo.currency : ""}} {{amountTotal | currency }}</div>

                <input v-model="eCode" class="form-control form-control-lg mb-4" type="text" placeholder="Type ecode here if card is not clear enough" aria-label=".form-control-lg example">
                
                <div class="form-group" v-if="selectedInfo">
                    <label for=""><strong>Terms</strong></label>
                    <div class="e-code">{{selectedInfo ? selectedInfo.terms : ""}}</div>
                </div>
                
                 <div class="form-group mt-3">
                    <div class="trigger-layer">
                        <span><i class='fa fa-file-upload ml-5'></i> <br> Upload Image!</span>
                        <input type="file" accept="image/*" multiple @change="onFileChange($event)">
                    </div>
                    <p  v-if="field_errors.images" class="text-danger"> {{ field_errors.images[0]}}</p>
                </div>

                <div class="prevew-edit mb-3" v-if="preview_list.length >=1">
                    <div>
                        <label for="">{{preview_list.length}} image(s) selected  <span class="btn btn-danger btn-sm" @click="removeImages()">remove images</span></label>
                        <MazGallery
                            :images="preview_list"
                        />
                    </div>
                </div>
               <button type="submit" class="btn-sellgiftcards btn w-100 mt-3" @click="sendData()" :disabled="saving">{{saving ? 'Please wait...' :'Send'}}</button>

            </form>
       </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    middleware: 'auth',
    layout : "dashboard-layout",
    head() {
        return {
            title: "Sell Giftcards / Rtechbiz",
        };
    },
    data(){
        return {
            rateInfo : "",
            selectedInfo : null,
            amount : null,
            eCode : "",
            cardType : "",
            preview_list: [],
            image_list: [],
            imageUpload : [],
        }
    },
    computed : {
        ...mapGetters({
            loading : "giftcard/loading",
            saving : "giftcard/saving",
            giftcardRates : "giftcard/giftcardRates"
        }),
        amountTotal(){
            if(this.selectedInfo){
                let value = this.amount * this.selectedInfo.card_amount_rate
                return value
            }
            return ""
        },
        giftcardName(){
            return this.$route.query.giftcardName
        }
    },
    methods : {
        ...mapActions({
            getGiftcardRates: "giftcard/getGiftcardRates",
            createGiftcardOrder : "giftcard/createGiftcardOrder"
        }),
        ...mapMutations({
            SET_SAVING: "giftcard/SET_SAVING",
        }),
        selectRate(data){
            this.selectedInfo = data
        },
        removeImages(){
            this.preview_list = []
        },
        async sendData(){
            try{
            
                let formData = new FormData();
                formData.append('giftcard_id', this.selectedInfo ? this.selectedInfo.id : "")
                formData.append('amount', this.amount)
                formData.append('card_type', this.cardType)
                formData.append('ecode', this.eCode)
                if(this.imageUpload.length > 0){
                    for(var i=0 ; i < this.imageUpload.length; i++)
                        {
                            formData.append('images[' + i +']', this.imageUpload[i])
                        }
                }
                
                else{
                    formData.append('images', this.imageUpload)
                }           
            
                await this.createGiftcardOrder(formData)
                this.amount = ""
                this.selectedInfo = ""
                this.preview_list = []
                this.imageUpload = []
                this.rateInfo = ""
                this.eCode = ""
            }
            catch(error){
                this.SET_SAVING(false)
            }
        },
        onFileChange(event) {
            var input = event.target;
            this.imageUpload = input.files
            var count = input.files.length;
            var index = 0;
            if (input.files) {
                while(count --) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.preview_list.push(e.target.result);
                }
                this.image_list.push(input.files[index]);
                reader.readAsDataURL(input.files[index]);
                index ++;
                }
            }
        },
    },
    mounted(){
        let giftcard_id = this.$route.query.giftcardId
        this.getGiftcardRates(giftcard_id)
    }
}
</script>

<style scoped>
.p-not{
    cursor:not-allowed;
}
.trigger-layer {
        position: relative;
        /* width: 50%; */
        font-weight: 600;
        height: 100px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        margin: 10px;
        padding-top: 8px;
        padding-right: 16px;
        padding-bottom: 8px;
        padding-left: 16px;
        background: #fff;
        border: 1px solid rgba(12, 100, 230, 0.7);
        border-radius: 10px;
        color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        line-height: 1.2;
        cursor : pointer
}
input[type="file"] {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        cursor: pointer;
}
.cash-v{
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 75px;
    color: #0C64E6;
}
.value{
    color: #0C64E6;
}
.header-info{
    font-style: normal;
    /* font-weight: 550; */
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 2rem;
}
.form-control{
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    /* background: rgba(12, 100, 230, 0.06); */
    border: 1px solid rgba(12, 100, 230, 0.7);
    border-radius: 10px;
    /* font-weight: 600; */
    font-size: 16px;
    line-height: 19px;
    color: #000000;
}
.e-code{
    box-sizing: border-box;
    width: 100%;
    /* height: 100px; */
    /* background: rgba(12, 100, 230, 0.06); */
    border: 1px solid rgba(12, 100, 230, 0.7);
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    /* font-weight: 600; */
    font-size: 16px;
    line-height: 19px;
    color: #000000;
}
.form-card{
    padding: 1.5rem;
    width: 80%;
    /* margin: auto; */
    border-radius: 30px;
}
.btn-sellgiftcards{
    background: #0C64E6;
    border-radius: 5px;
    color: #fff;
    padding: 1rem;
    font-size: 20px;
    font-weight: 600;
}

@media screen and (max-width : 578px){
    .form-card{
        width: 100%;
    }
    .form-control{
        height: 60px;
        font-size: 10px;
    }
    .cash-v{
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 75px;
        color: #0C64E6;
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