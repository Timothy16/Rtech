<template>
    <div class="container-fluid mb-5 bg-white pt-3">
       <div class="form-card shadow">
        <div class="header-info">Sell Giftcard</div>
            <form action="" class="">                
                <div class="row">
                    <div class="col-lg-6 col-sm-12 col-md-6">
                        <select class="form-select form-control form-select-lg mb-4" aria-label=".form-select-lg example">
                            <option selected>Select Card Category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-md-6">
                        <select class="form-select form-control form-select-lg mb-4" aria-label=".form-select-lg example">
                            <option selected>Select Your Card Type</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
               
                <input class="form-control form-control-lg mb-4" type="text" placeholder="Card Amount" aria-label=".form-control-lg example">

                <div class="text-center value mt-5"><strong>Cash Value</strong></div>
                <div class="text-center cash-v mb-5">N 0</div>

                <input class="form-control form-control-lg mb-4" type="text" placeholder="Type ecode here or if card is not clear enough" aria-label=".form-control-lg example">

                 <div class="form-group mt-3">
                    <div class="trigger-layer">
                        <span><i class='fa fa-file-upload ml-5'></i> <br> Upload Image!</span>
                        <input type="file"  accept="video/*">
                    </div>
                </div>
            
                <div class="btn-sellgiftcards btn">Sell Giftcard</div>

            </form>
       </div>
  </div>
</template>

<script>
export default {
    middleware: 'auth',
    layout : "dashboard-layout",
    head() {
        return {
            title: "Sell Giftcards / Rtechbiz",
        };
    },
}
</script>

<style scoped>
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