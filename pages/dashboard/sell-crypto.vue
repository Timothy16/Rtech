<template>
    <div class="container-fluid mb-5">
       <div class="form-card bg-white shadow">
            <div class="header-info">Sell Crypto</div>
            <form action="">
                <select @change="selectCryto(cryptoInfo)" v-model="cryptoInfo" class="form-select form-control form-select-lg mb-4" aria-label=".form-select-lg example">
                    <option value="" selected disabled>Select crypto</option>
                    <option :value="crypto" v-for="(crypto, index) in cryptos" :key="index">{{crypto.crypto_name}}</option>
                </select>
                <p  v-if="field_errors.crypto_id" class="text-danger"> {{ field_errors.crypto_id[0]}}</p>
                            

                <input v-model="amount" :class="{'p-not' : !selectedInfo}" :disabled="!selectedInfo" class="form-control form-control-lg mb-4" type="number" placeholder="Card Amount (N)" aria-label=".form-control-lg example">
                <p  v-if="field_errors.amount" class="text-danger"> {{ field_errors.amount[0]}}</p>

                <div class="text-center value mt-5"><strong>Cash Value</strong></div>
                <div class="text-center cash-v mb-5">N {{amountTotal | currency }}</div>  

                <div class="form-group" v-if="selectedInfo">
                    <label for="" class="ml-2">Copy wallet address</label>
                    <div class="wal-address">
                       <span class="">{{selectedInfo.crypto_wallet}}</span> 
                       <span class="text-danger" :key="selectedInfo.crypto_wallet" v-clipboard="getFullUrlLink"
                        v-clipboard:success="clipboardSuccessHandler"
                        v-clipboard:error="clipboardErrorHandler"><i class="fas fa-copy"></i>
                        </span>
                    </div>
                </div>
               

                <div class="form-group mt-3">
                    <label for="" class="ml-2">Upload Image(Upload the screenshot confirming your transaction)</label>
                    <div class="trigger-layer">
                        <span><i class='fa fa-file-upload ml-5'></i> <br> Upload Image!</span>
                        <input type="file" accept="image/*" multiple @change="onFileChange($event)">
                    </div>
                </div>

                <div class="prevew-edit mb-3" v-if="preview_list.length >=1">
                    <div>
                        <label for="">{{preview_list.length}} image(s) selected  <span class="btn btn-danger btn-sm" @click="removeImages()">remove images</span></label>
                        <MazGallery
                            :images="preview_list"
                        />
                        <!-- <div class="row">
                            <div class="col-sm-12 col-lg-3 col-md-6" v-for="(image, index) in preview_list" :key="index">
                                <img v-if="image" :src="image" class="img-fluid d- img-thumbnail mb-1" />
                            </div>                        
                        </div> -->
                    </div>
                   
                </div>
                

                <!-- <button class="btn-trade-now">Check Rate</button> -->
                <!-- <h6><strong>Rate</strong> : <span v-if="selectedInfo">"N{{selectedInfo ? selectedInfo.crypto_amount : ""}}.00"</span>  </h6>

                <h5><strong>Total Payout</strong>: {{amountTotal ? amountTotal : ""}}</h5> -->

                <button class="btn-sellgiftcards btn w-100 mt-3" @click="sendData()" :disabled="saving">{{saving ? 'Please wait...' :'Send'}}</button>

            </form>
       </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    layout : "dashboard-layout",
    middleware: 'auth',
    head() {
        return {
            title: "Sell Crypto / Rtechbiz",
        };
    },
    data(){
        return {
            cryptoInfo : "",
            selectedInfo : null,
            amount : null,
            preview_list: [],
            image_list: [],
            imageUpload : [],
        }
    },
    computed : {
        ...mapGetters({
            loading : "crypto/loading",
            saving : "crypto/saving",
            cryptos : "crypto/cryptos"
        }),
        amountTotal(){
            if(this.selectedInfo){
                let value = this.amount * this.selectedInfo.crypto_amount
                return "N "+value+".00"
            }
            return "N 0.00"
        },
        getFullUrlLink(){
            return this.selectedInfo ? this.selectedInfo.crypto_wallet : ""
        },
    },
     methods : {
        ...mapActions({
            getAllCrypto: "crypto/getAllCrypto",
            sendCryptoInfo : "crypto/sendCryptoInfo"
        }),
        ...mapMutations({
            SET_LOADING: "crypto/SET_LOADING",
            SET_SAVING: "crypto/SET_SAVING",
        }),
        selectCryto(data){
            this.selectedInfo = data
        },
        clipboardSuccessHandler({ value, event }) {
         this.$notify({
              group: 'all',
              title: 'Important message',
              text: "Wallet address copied successfully",
              type: 'success',
              duration: 1000,
          })
        },
        removeImages(){
            this.preview_list = []
        },
        async sendData(){
        try{
         
            let formData = new FormData();
            formData.append('crypto_id', this.selectedInfo ? this.selectedInfo.id : "")
            formData.append('amount', this.amount)
            if(this.imageUpload.length > 0){
                for(var i=0 ; i < this.imageUpload.length; i++)
                    {
                        formData.append('images[' + i +']', this.imageUpload[i])
                    }
            }
            
            else{
                 formData.append('images', this.imageUpload)
            }           
           
            await this.sendCryptoInfo(formData)
            this.amount = ""
            this.selectedInfo = ""
            this.preview_list = []
            this.imageUpload = []
            this.cryptoInfo = ""
        }
        catch(error){
            this.SET_SAVING(false)
        }
    },
        clipboardErrorHandler({ value, event }) {
         this.$notify({
              group: 'all',
              title: 'Important message',
              text: "An error ocurred",
              type: 'error',
              duration: 1000,
          })
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
        this.getAllCrypto()
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
.header-info{
    font-style: normal;
    font-weight: 550;
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
.wal-address{
    box-sizing: border-box;
    width: 100%;
    height: auto;
    padding: 2rem 1rem;
    background: #fff;
    /* background: rgba(12, 100, 230, 0.06); */
    border: 1px solid rgba(12, 100, 230, 0.7);
    border-radius: 10px;
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
    font-size: 16px;
    /* font-weight: 600; */
}
@media screen and (max-width : 578px){
    .form-card{
        width: 100%;
    }
    .form-control{
        height: 70px;
        font-size: 10px;
    }
    .wal-address{
        padding: 1rem;    
        word-break: break-all;   
    }
    .cash-v{
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 75px;
        color: #0C64E6;
         word-break: break-all;
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