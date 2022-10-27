<!-- Please remove this file from your project -->
<template>
  <div class="big-bg container-fluid">
    <div class="">
        <div class="row">
             <div class="col-sm-12 col-md-12 col-lg-6 on-mobile p-0">
                <div class="card-image-s">
                    <div class="img-arrow"><img src="/images/angle_one.png" alt="" width="300px" srcset=""></div>
                    <div class="inner-header">Got <br> CryptoCurrency <br> & GiftCards ?</div>
                    <p class="inner-text">Trading your giftcards & bitcoin for cash has never been easy? 
                        Rtech has got you covered!Trade securely with no worries or delay Receive alert of your trades in less than 2 mins.
                    </p>
                     <div class="img-arrow-1"><img src="/images/angle_two.png" width="300px" alt="" srcset=""></div>
                </div>
                
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 ">
                <div class="inner-space">
                    <div class="text-center">   
                        <nuxt-link to="/">
                            <img src="/images/logo_one.png" alt="" class="img-logo" srcset="">
                        </nuxt-link>
                        <div class="header-title">Login to your account</div>
                    </div>
                    

                    <div class="form-edit">
                        <div class="mb-4">
                            <label class="form-label">Email </label>
                            <div class="d-flex form-control-1">
                                <div class="icon-pad">
                                    <img src="/images/sms.png" alt="" srcset="">
                                </div>
                                <input type="email" class="form-control form-control-plaintext w-100 mr-3" placeholder="Enter email adddress">
                            </div>
                            
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Password </label>
                            <div class="d-flex form-control-1">
                                <div class="icon-pad">
                                    <img src="/images/key.png" alt="" srcset="">
                                </div>
                                <input type="password" class="form-control form-control-plaintext w-100 mr-3" placeholder="Password">
                            </div>
                            
                        </div>
                        
                        <button class="btn-login">LOG IN</button>
                    </div>

                    <p class="text-center new-account">Don’t have an account? <nuxt-link to="/signin"><span class="new-acc">Create an account</span></nuxt-link> </p>
                    <p class="text-center new-account mt-3">Forgot password? </p>
                </div>
            </div>
           
        </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
<style scoped>
*{
    /* padding: 0;
    margin: 0; */
    /* box-sizing: border-box; */
    /* font-family: 'Work Sans', sans-serif; */
}
.img-class{
    /* width: 732px;
    height: 732px; */
    /* margin-top: 2rem; */
}
a{
    text-decoration: none;
}
.card-image-s{
    background: url("/images/login_bg.png");
    background-size: cover;
    height: 100vh;
    padding: 10rem;
    /* background: #000000; */
}
.big-bg{
    background: #fff;
    height: 100vh;
}
.header-title{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #0C64E6;
    margin-top: 2rem;
}
.inner-space {
    margin-top: 3rem;
}
.img-logo{
    /* width: 80px;
    height: 80px; */
}
.form-edit{
   padding: 3rem 5rem;
}
label{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: #0C64E6;
}
.form-control{
    /* box-sizing: border-box;
    width: 650px; */
    height: auto;
    border: none;
    font-size: 1.2rem;
    padding: .3rem;
    color: rgba(12, 100, 230, 0.5);
}
.icon-pad{
    padding: .8rem;
}
.form-control:focus{
     border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  background: #ECF3F9;
}
.form-control-1{
    box-sizing: border-box;
    width: 650px;
    height: 70px;
    background: #ECF3F9;
    border: 1px solid rgba(189, 189, 189, 0.5);
    box-shadow: 0px 0px 13px 5px rgba(255, 255, 255, 0.15);
    border-radius: 5px;
    flex: none;
    order: 1;
    flex-grow: 0;
    font-size: 1.2rem;
    padding: .3rem;
}
::placeholder{
    color: rgba(12, 100, 230, 0.5);
     padding-left: 1rem;
}
.btn-login{
    padding: 20px 40px;
    width: 650px;
    height: 68px;
    background: #F9DF4C;
    border-radius: 10px;
    border: none;
    margin-top: .4rem;
    font-weight: 800;
    font-size: 20px;
    line-height: 28px;
    color: #000000;
}
.new-account{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-top: 5rem;
    color: #0C64E6;
}
.new-acc{
    font-weight: 700;
}
.inner-header{
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
    color: #FFFFFF;
    padding-top: 2rem;
}
.inner-text{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    width: 90%;
    color: #FFFFFF;
    margin-top: 1rem;
}
.img-arrow-1{
    margin-top: 1.5rem;
}
.img-arrow{
    float: right;
}
@media screen and (max-width : 578px){
    .on-mobile{
        display: none;
    }
    .inner-space {
        margin-top: 3rem;
    }
    .form-edit{
        padding: 0;
        margin-top: 2rem;
    }
    .form-control-1{
        box-sizing: border-box;
        width: 100% !important ;
    }
    .btn-login{
        width: 100% !important;
    }
}
@media screen and (max-width : 768px){
     .on-mobile{
        display: none;
    }
    .inner-space {
        margin-top: 3rem;
    }
    .form-edit{
        padding: 0;
        margin-top: 2rem;
    }
    .form-control-1{
        box-sizing: border-box;
        width: 100% !important ;
    }
    .btn-login{
        width: 100% !important;
    }

}
@media screen and (max-width : 1024px){
     .form-edit{
        padding: 0;
        margin-top: 2rem;
    }
    .inner-header{
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 60px;
        color: #FFFFFF;
        padding-top: 1rem;
    }
    .card-image-s{
        padding: 2rem;
    }
}
</style>