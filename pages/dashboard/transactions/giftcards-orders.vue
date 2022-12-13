<template>
<client-only>
    <div class="container-fluid  mb-5">
       <div class="form-card shadow bg-white">
        <header-transaction />
        <div class="header-info">Giftcard Orders</div>
         <div class="search-box pt-3">
                <form>
                    <div class="row">
                        <div class="col-lg-12 col-sm-12 col-md-12">
                            <MazPicker
                                v-model="pickerValue2"
                                clearable
                                size="lg"
                                placeholder="Select date"
                                formatted="ll"
                                :maxDate="maxDate"
                                :noTime='true'
                                format="YYYY-MM-DD"
                                noNow
                                @formatted="pickerRangeValuesFormatted = $event">
                            <i slot="icon-left" class="material-icons" > date_range </i>
                            </MazPicker>
                        </div>
                    </div>
                    <div class="mt-1">
                            <button type="submit" :disabled="loading" class="btn btn-primary mb-2"  @click.prevent="searchMore()">{{loading ? 'Searching...' : 'Search'}}</button>
                            <button type="submit" :disabled="loading" class="btn btn-secondary mb-2"  @click.prevent="clear()">Clear</button>
                    </div>
                </form>
            </div>
      
      <div v-if="!loading">
        <vuetable ref="vuetable"
                :fields="options"
                :api-mode="false"
                :data="giftcards" class="p-3 table-responsive-lg table-lg">
                
                <div slot="action" slot-scope="props">
                    <nuxt-link :to="'/dashboard/transactions/get-a-giftcard-order?giftcardOrderId='+ props.rowData.id" class="btn btn-secondary btn-sm">
                        View    
                    </nuxt-link>
                </div>

                <div slot="sn" slot-scope="props">
                    <span>{{ props.rowIndex + 1}}</span>
                </div>

                <!-- <div slot="name" slot-scope="props">
                    <span>{{ props.rowData.user ? props.rowData.user.name : "" }}</span>
                </div> -->

                <div slot="status" slot-scope="props">
                    <span v-if="props.rowData.status === null" class="pending">{{ props.rowData.status === null ? 'Pending' : ''}}</span>
                </div>

                <div slot="giftcard" slot-scope="props">
                    <span>{{ props.rowData.giftcard_rate ? props.rowData.giftcard_rate.giftcard.giftcard_name : "" }}</span>
                </div>
                 <div slot="giftcard_cat" slot-scope="props">
                    <span>{{ props.rowData.giftcard_rate ? props.rowData.giftcard_rate.giftcard_name : "" }}</span>
                </div>
                <div slot="ecode" slot-scope="props" >
                    <span >{{ props.rowData.ecode ? 'Yes' : "No" }}</span>
                </div>
                 <div slot="created" slot-scope="props">
                    <span><span>{{ $moment(props.rowData.created_at).format('lll') }}</span></span>
                </div>
                <div slot="amount" slot-scope="props">
                    <span>{{ props.rowData.amount ? props.rowData.amount : "" }}</span>
                </div>
        </vuetable>
      </div>
      <div  v-else>
          <Loader />
      </div>
    </div>
</div>
</client-only>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    middleware: 'auth',
    layout : "dashboard-layout",
    head() {
        return {
            title: "Giftcard Order History / Rtechbiz",
        };
    },
    data(){
        return{
            pickerValue2: "",
            pickerFormatted2: null,
            email : "",
            options: [
                { title: 'SN', name: 'sn'}, 
                // { title: 'Full Name',frozen:true, name: 'name',width: "", editor: false}, 
                { title: 'Giftcard', name: 'giftcard', width: ""}, 
                { title: 'Giftcard Category', name: 'giftcard_cat', width: ""}, 
                { title: 'Amount', name: 'amount', width: ""}, 
                { title: 'Has e-code?', name: 'ecode', width: ""}, 
                { title: 'Status', name: 'status', width: ""}, 
                { title: 'Date/Time', name: 'created', width: ""}, 
                { title: 'Action', name: 'action' }, 
            ]
        }
    },
    computed : {
        ...mapGetters({
            loading : "transaction/loading",
            giftcards: "transaction/giftcards"
      }),
      maxDate(){
            const today = new Date();
            const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const dateTime = date +' '+ time;
            return dateTime
            
        },
    },
    methods : {
        ...mapActions({
            getGiftcardOrders: "transaction/getGiftcardOrders",
            getGiftcardFilter : "transaction/getGiftcardFilter"
        }),
        ...mapMutations({
            SET_LOADING: "transaction/SET_LOADING",
        }),
        async searchMore(){
            try {
                let data = this.pickerValue2
                await this.getGiftcardFilter(data)
            } catch (error) {
                this.SET_LOADING(false)
            }
        },
        async clear(){
            this.pickerValue2 = ''
            await this.getGiftcardOrders()
        }
    },
    mounted(){
        this.getGiftcardOrders()
    }
}
</script>

<style scoped>
.search-box{
    width: 50%;
    margin: auto;
    padding-bottom: 1rem;
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
.completed{
  color: #107C10;
  background: rgba(16, 124, 16, 0.2);
  border-radius: 40px;
  padding: .5rem .7rem;
  font-size: 14px;
}
.pending{
  background: rgba(255, 165, 0, 0.2);
  border-radius: 25px;
  color: #FFA346;
  padding: .5rem .8rem;
  font-size: 14px;
}
.rejected{
  color: #FF0000;
  padding: .5rem .7rem;
  background: rgba(255, 0, 0, 0.2);
  border-radius: 40px;
  font-size: 14px;
}
@media screen and (max-width : 578px){
   .search-box{
      width: 100%;
  }
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
    .search-box{
      width: 100%;
  }
}
</style>