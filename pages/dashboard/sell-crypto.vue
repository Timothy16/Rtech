<template>
    <div class="container-fluid mb-5">
       <div class="form-card shadow">
            <div class="header-info">Sell Crypto</div>
            <form action="">
                <select class="form-select form-control form-select-lg mb-4" aria-label=".form-select-lg example">
                    <option selected>Select Your Card</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                            

                <input class="form-control form-control-lg mb-4" type="text" placeholder="Card Amount" aria-label=".form-control-lg example">

                <input class="form-control form-control-lg mb-4" type="text" placeholder="Rtech Cryto wallet address goes here" aria-label=".form-control-lg example">

                <input class="form-control form-control-lg mb-4" type="text" placeholder="Choose Photo(s) to upload " aria-label=".form-control-lg example">

                <!-- <button class="btn-trade-now">Check Rate</button> -->
                <h6><strong>Rate</strong> : 420</h6>

                <h5><strong>Total Payout</strong>: N 400, 000</h5>

                <!-- <div class="btn-sellgiftcards btn">Sell Giftcard</div> -->

            </form>
       </div>
  </div>
</template>

<script>
export default {
    layout : "dashboard-layout",
    head() {
        return {
            title: "Sell Crypto / Rtechbiz",
        };
    },
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