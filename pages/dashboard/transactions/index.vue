<template>
    <div class="container-fluid bg-white mb-5">
       <div class="form-card shadow">
        <header-transaction />
        <div class="header-info">Transaction History</div>
        <div v-if="!loading">
        <vuetable ref="vuetable"
                :fields="options"
                :api-mode="false"
                :data="transactions" class="p-3 table-responsive-lg bg-white mt-3 table-lg">
                
                <div slot="action" slot-scope="props">
                    <nuxt-link :to="'/transactions/get-giftcard-transaction?orderId='+ props.rowData.id" class="btn btn-secondary" v-if="props.rowData.product_type === 'Giftcard'">
                        View    
                    </nuxt-link>
                    <nuxt-link :to="'/transactions/get-crypto-transaction?orderId='+ props.rowData.id" class="btn btn-secondary" v-if="props.rowData.product_type === 'Crypto'">
                        View    
                    </nuxt-link>
                </div>

                <div slot="sn" slot-scope="props">
                    <span>{{ props.rowIndex + 1}}</span>
                </div>

                <!-- <div slot="name" slot-scope="props">
                    <span>{{ props.rowData.users ? props.rowData.users.name : "" }}</span>
                </div> -->

                <div slot="status" slot-scope="props">
                    <span v-if="props.rowData.status === null" class="pending">{{ props.rowData.status === null ? 'Pending' : ''}}</span>
                    <span v-if="props.rowData.status === '1'" class="pending">{{ props.rowData.status === '1' ? 'Accepted' : ''}}</span>
                    <span v-if="props.rowData.status === '2'" class="completed">{{ props.rowData.status === '2' ? 'Completed' : ''}}</span>
                    <span v-if="props.rowData.status === '3'" class="rejected">{{ props.rowData.status === '3' ? 'Rejcted' : ''}}</span>
                </div>

                <!-- <div slot="email" slot-scope="props">
                    <span>{{ props.rowData.users.email ? props.rowData.users.email : "" }}</span>
                </div> -->
                 <div slot="description" slot-scope="props">
                    <span>{{ props.rowData.description ? props.rowData.description : "" }}</span>
                </div>
                <div slot="product_type" slot-scope="props" >
                    <span >{{ props.rowData.product_type ? props.rowData.product_type : "" }}</span>
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
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    middleware: 'auth',
    layout : "dashboard-layout",
    head() {
        return {
            title: "Transaction History / Rtechbiz",
        };
    },
    data(){
      return {
         options: [
                { title: 'SN', name: 'sn'}, 
                // { title: 'Full Name',frozen:true, name: 'name',width: "", editor: false}, 
                // { title: 'Email', name: 'email', width: ""}, 
                { title: 'Order Description', name: 'description', width: ""}, 
                { title: 'Order Type', name: 'product_type', width: ""}, 
                { title: 'Amount', name: 'amount', width: ""}, 
                { title: 'Status', name: 'status', width: ""},
                { title: 'Date/Time', name: 'created', width: ""}, 
                { title: 'Action', name: 'action' }, 
            ]
      }
    },
    computed : {
        ...mapGetters({
            loading : "transaction/loading",
            transactions : "transaction/transactions"
        }),
    },
    methods : {
        ...mapActions({
            getAllTransactions: "transaction/getAllTransactions"
        }),
        ...mapMutations({
            SET_LOADING: "transaction/SET_LOADING",
        }),
    },
    mounted(){
        this.getAllTransactions()
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
  border-radius: 40px;
  color: #FFA346;
  padding: .5rem .7rem;
  font-size: 14px;
}
.rejected{
  color: #FF0000;
  padding: .5rem .7rem;
  background: rgba(255, 0, 0, 0.2);
  border-radius: 40px;
  font-size: 14px;
}
</style>