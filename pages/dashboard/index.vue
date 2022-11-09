<template>
  <div>
    <div class="container-fluid mb-5">
       <div class="row">
        <div class="col-lg-3 col-sm-12 col-md-6 mb-3">
          <nuxt-link to="/dashboard/sell-giftcards">
            <div class="box-giftcard">
                <img src="/images/moneys.png" class="img-fluid" alt="" srcset="">
                <div class="text-giftcard">Sell Giftcard</div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-3 col-sm-12 col-md-6 mb-3">
          <nuxt-link to="/dashboard/sell-crypto">
            <div class="box-giftcard-1">
              <img src="/images/dollar-circle.png" class="img-fluid" alt="" srcset="">
              <div class="text-giftcard-1">Sell Cryptocurrency</div>
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
          <table class="table  text-center table-responsive-lg table-lg">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Card</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="completed">Completed</span></td>
              </tr>
             <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="rejected">Rejected</span></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="pending">Pending</span></td>
              </tr>
              
            </tbody>
          </table>
          <div class="btn btn-primary">
            <nuxt-link to="/dashboard/transaction-history">See All</nuxt-link>
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
export default {
    layout : "dashboard-layout",
    head() {
        return {
            title: "Dashboard / Rtechbiz",
        };
    },
}
</script>

<style scoped>
.completed{
  color: #107C10;
  background: rgba(16, 124, 16, 0.2);
  border-radius: 40px;
  padding: .5rem .7rem;
}
.pending{
  background: rgba(255, 165, 0, 0.2);
  border-radius: 40px;
  color: #FFA346;
  padding: .5rem .7rem;
}
.rejected{
  color: #FF0000;
  padding: .5rem .7rem;
  background: rgba(255, 0, 0, 0.2);
  border-radius: 40px;
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