<template>
  <div>
    <div class="container-fluid mb-5">
       <div class="row">
        <div class="col-lg-3 col-sm-12 col-md-6 mb-3">
          <nuxt-link to="/dashboard/giftcards">
            <div class="box-giftcard">
                <img src="/images/moneys.png" class="img-fluid" alt="" srcset="">
                <div class="text-giftcard">Trade Giftcard</div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-3 col-sm-12 col-md-6 mb-3">
          <nuxt-link to="/dashboard/sell-crypto">
            <div class="box-giftcard-1">
              <img src="/images/dollar-circle.png" class="img-fluid" alt="" srcset="">
              <div class="text-giftcard-1">Trade Cryptocurrency</div>
            </div>
            </nuxt-link>
        </div>
        <div class="col-lg-6 col-sm-12 col-md-12 mb-3">
          <DashboardRate />
        </div>
       </div>
      </div>

      <div class="sales-boxes mb-4">
        <div class="recent-sales shadow mb-3">
          <div class="title">Recent Transaction</div>
         <div v-if="!loading">
            <vuetable ref="vuetable"
                    :fields="options"
                    :api-mode="false"
                    :data="transactions.slice(0, 5)" class="p-3 table-responsive-lg bg-white mt-3 table-lg">
                    
                    <!-- <div slot="action" slot-scope="props">
                        <nuxt-link :to="'/transactions/get-giftcard-transaction?orderId='+ props.rowData.id" class="btn btn-secondary" v-if="props.rowData.product_type === 'Giftcard'">
                            View    
                        </nuxt-link>
                        <nuxt-link :to="'/transactions/get-crypto-transaction?orderId='+ props.rowData.id" class="btn btn-secondary" v-if="props.rowData.product_type === 'Crypto'">
                            View    
                        </nuxt-link>
                    </div> -->

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
          <div class="btn btn-primary">
            <nuxt-link to="/dashboard/transactions">See All</nuxt-link>
          </div>
        </div>
        <!-- <div class="top-sales shadow">
          <div class="title">Top Seling Giftcards</div>
          <ul class="top-sales-details">
            <li>
            <a href="#">
              <img src="images/sunglasses.jpg" alt="">
              <span class="product">Vuitton Sunglasses</span>
            </a>
            <span class="price">$1107</span>
          </li>
          <li>
            <a href="#">
              <img src="images/jeans.jpg" alt="">
              <span class="product">Hourglass Jeans </span>
            </a>
            <span class="price">$1567</span>
          </li>
          <li>
            <a href="#">
              <img src="images/nike.jpg" alt="">
              <span class="product">Nike Sport Shoe</span>
            </a>
            <span class="price">$1234</span>
          </li>
          <li>
            <a href="#">
              <img src="images/scarves.jpg" alt="">
              <span class="product">Hermes Silk Scarves.</span>
            </a>
            <span class="price">$2312</span>
          </li>
          <li>
            <a href="#">
              <img src="images/blueBag.jpg" alt="">
              <span class="product">Succi Ladies Bag</span>
            </a>
            <span class="price">$1456</span>
          </li>
          </ul>
        </div> -->
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
          title: "Dashboard / Rtechbiz",
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
                // { title: 'Action', name: 'action' }, 
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
.box-giftcard{
  /* width: 290px; */
  height: 468px;
  background: #0C64E6;
  box-shadow: 2px 2px 10px rgba(235, 235, 235, 0.25);
  border-radius: 10px;
  padding: 1rem;
}
a{
  color: #fff;
  text-decoration: none;
}
.text-giftcard{
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
  padding-top: 20rem;
}
.box-giftcard-1{
  /* width: 290px; */
  height: 468px;
  background: #EDD2B6;
  box-shadow: 2px 2px 10px rgba(235, 235, 235, 0.25);
  border-radius: 10px;
  padding: 1rem;
}
.text-giftcard-1{
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
 color: #FFA346;
  padding-top: 20rem;
}

@media screen and (max-width : 578px){
.recent-sales{
  width: auto !important;
}
.top-sales{
  width: auto !important;
  margin: 0 20px !important;
}
.text-giftcard{
  padding-top: 2rem;
}
.box-giftcard-1{
  /* width: 290px; */
  height: 200px;
}
.text-giftcard-1{
  padding-top: 2rem;
}
.box-giftcard{
  /* width: 290px; */
  height: 200px;
}
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
  .recent-sales{
  width: auto !important;
}
.top-sales{
  width: auto !important;
  margin: 0 20px !important;
}
} 
</style>