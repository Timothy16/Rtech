<template>
    <div class="container-fluid mb-5">
       <div class="form-card shadow">
        <div class="header-info">Bank Details</div>
        <div class="row">
            <div class="col-sm-12 col-lg-6 col-md-12 mb-2">
                <!-- <div class="div-add-bank">
                    <div class="plus"><i class="fa fa-plus"></i></div>
                    <div class="class-add mt-1">Add New Account Number</div>
                </div> -->
                <form action="" @submit.prevent>                            

                    <input v-model="bankName" class="form-control form-control-lg mb-4" type="text" placeholder="Bank Name (Please type in full bank name)" aria-label=".form-control-lg example">
                    <p  v-if="field_errors.bank_name" class="text-danger"> {{ field_errors.bank_name[0]}}</p>
                    
                    <input v-model="accountName" class="form-control form-control-lg mb-4" type="text" placeholder="Account Name" aria-label=".form-control-lg example">
                    <p  v-if="field_errors.account_name" class="text-danger"> {{ field_errors.account_name[0]}}</p>
                    
                    <input v-model="accountNumber" class="form-control form-control-lg mb-4" type="text" placeholder="Account Number" aria-label=".form-control-lg example">
                    <p  v-if="field_errors.account_number" class="text-danger"> {{ field_errors.account_number[0]}}</p>

                    <button type="submit" @click="bankDetails" class="btn-sellgiftcards btn w-100">{{loading ? "Please wait..." : 'Add Bank Details'}}</button>

                </form>
            </div>
            <div class="col-sm-12 col-lg-6 col-md-12">
                <div class="card-style">
                    <div><img src="/images/card-chip.png" class="img-fluid" alt="" srcset=""></div>
                    <div class="d-flex text-d-c">
                        <div>
                            <img src="/images/arrow.png" alt="" srcset="">
                        </div>
                        <div class="w-100 ml-3">
                            <div class="account-number">123456678</div>
                            <div class="account-name">Bobby Jane</div>
                        </div>
                    </div>
                    <div class="spac-action">
                        <div class=""><span class="delete-card">Delete <i class="fa fa-trash ml-1"></i></span></div>
                    </div>
                </div>
            </div>
        </div>
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
            title: "Bank Details / Rtechbiz",
        };
    },
    data(){
        return{
            bankName : "",
            accountName : "",
            accountNumber : "",
        }
    },
    computed : {
        ...mapGetters({
            loading : "loading",
            bankInfo : "bankInfo"
        }),
    },
    methods : {
        ...mapActions({
            addBankDetials: "addBankDetials",
            getBankDetials: "getBankDetials"
        }),
        ...mapMutations({
            SET_LOADING: "SET_LOADING",
        }),
        async bankDetails(){
            
            try {
                let parameter = {
                    bank_name : this.bankName,
                    account_name : this.accountName,
                    account_number : this.accountNumber
                }

                await this.addBankDetials(parameter)
                this.bankName = ""
                this.accountName = ""
                this.accountNumber = ""
            } catch (error) {
                this.SET_LOADING(false)
            }
        },
    },
    mounted(){
        this.getBankDetials()
    }
}
</script>

<style scoped>
.header-info{
    font-style: normal;
    font-weight: 550;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 2rem;
}
.spac-action{
    padding: 1rem;
    margin-top: 2rem;
}
.delete-card{
    background: #F8E2E2;
    /* opacity: 0.8; */
    color: #ff0000;
    border-radius: 10px;
    font-size: 1rem;
    padding: .3rem .7rem;
}
.div-add-bank{
    border: 1px dashed #000000;
    border-radius: 10px;
    padding: 5rem;
    margin-bottom: 1rem;
    text-align: center;
    cursor: pointer;
}
.form-control{
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    background: rgba(12, 100, 230, 0.06);
    border: 1px solid rgba(12, 100, 230, 0.7);
    border-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
}
.form-card{
    padding: 1.5rem;
    /* width: 90%; */
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
.card-style{
    background: linear-gradient(0deg, rgba(5, 4, 60, 0.74), rgba(5, 4, 60, 0.74)), url('/images/card-bg.png');
    border-radius: 10px;
    color: #fff;
    padding: 1.5rem;
    width: 595px;
    height: 361.13px;
}
.account-number{
    font-style: normal;
    font-weight: 400;
    font-size: 27.5145px;
    line-height: 31px;
    letter-spacing: 1em;
    color: #FFFFFF;
}
.account-name{
    font-style: normal;
    font-weight: 600;
    font-size: 27.5145px;
    line-height: 32px;
    color: #FFFFFF;
}
.text-d-c{
    padding-top: 12rem;
}
@media screen and (max-width : 578px){
    .form-card{
        width: 100%;
    }
    .form-control{
        height: 60px;
        font-size: 10px;
    }
    .card-style{
        width: auto;
        height: 230px;
    }
    .account-number{
        letter-spacing: 1px;
        font-size: 14px;
    }
    .text-d-c{
        padding-top: 2rem;
    }
    .account-name{
        font-size: 20px;
    }
    .spac-action{
        padding: 1rem;
        margin-top: .2rem;
    }
    .div-add-bank{
        padding: 2rem;
    }
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
    .form-card{
        width: 100%;
    }
    .form-control{
        height: 60px;
    }
    .card-style{
        width: 100%;   
    }
     .text-d-c{
        padding-top: 7rem;
    }
    
}
</style>