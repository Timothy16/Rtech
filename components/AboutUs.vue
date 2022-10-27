<template>
  <div class="container-fluid container-width">
    <div class="round-box">
       <span class="about-us-logo">About Us</span> 
    </div>
    <div class="container">
        <div class="text-container">
            <div class="header-about">Rtech Business Services was founded with one objective
                 in mind: to catapult Africa into the modern technological 
                 era by creating an ideal trade environment that is both efficient
                  and simple to use. We considered a variety of conditions in order 
                  to exactly address our customers’ current market needs and make 
                  their trading experience easier. As a result, when it comes to 
                  trading your BitCoin and gift cards for swift cash, we’ve 
                  designed a website unlike any other.
            </div>
            <div class="icon-info mt-5">
                <p><img src="/images/sms-tracking-white.png" width="20px" height="20px" alt="" srcset=""> &nbsp;&nbsp;info@rtechbiz.com</p>
                <p><img src="/images/call.png" width="20px" height="20px" alt="" srcset=""> &nbsp;&nbsp; +2347061032844</p>
                <p><img src="/images/clock.png" width="20px" height="20px" alt="" srcset=""> &nbsp;&nbsp; Monday to Saturday - 9:00 am to 7:00 pm</p>
                <p><img src="/images/clock.png" width="20px" height="20px" alt="" srcset=""> &nbsp;&nbsp; Sunday - 10:00 am to 5:00 pm</p>
            </div>
        </div>
        <div class="text-right mt-1"><img src="/images/about-frame.png" class="img-fluid" alt="" srcset=""></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container-width{
    padding: 1rem 6rem;
    margin-top: 7rem;
}
.about-us-logo{
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 47px;
    color: #000000;
    padding: 6rem 3rem;
    /* margin: 10px; */
    display: flex;
    align-items: center;
}
.round-box{
    background: #85B1F3;
    width: 250px;
    height: 250px;
    border-radius: 50%;
}
.text-container{
    padding: 2rem 4rem;
    background: #0C64E6;
    color: #fff;
    border-radius: 25px;
    position: relative;
    top: -50px;
    right: 30px;
    height: 400px;
}
@media screen and (max-width : 578px){
    .container-width{
        padding: 1rem;
        margin-top: 4rem;
    }
.about-us-logo{
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    /* line-height: 47px; */
    color: #000000;
    padding: 1.7rem 1rem;
}
.round-box{
    background: #85B1F3;
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.text-container{
    padding: 2rem;
    background: #0C64E6;
    color: #fff;
    border-radius: 25px;
    position: relative;
    top: 0;
    right: 0;
    height: auto;
    text-align: justify;
}
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
        .container-width{
        padding: 1rem;
        margin-top: 7rem;
    }
.about-us-logo{
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    /* line-height: 47px; */
    color: #000000;
    padding: 1.7rem 1rem;
}
.round-box{
    background: #85B1F3;
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.text-container{
    padding: 2rem;
    background: #0C64E6;
    color: #fff;
    border-radius: 25px;
    position: relative;
    top: 0;
    right: 0;
    height: auto;
    text-align: justify;
}
}
</style>