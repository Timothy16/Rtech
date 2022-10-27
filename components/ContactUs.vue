<template>
  <div class="container-fluid container-width">
    <div class="round-box">
       <span class="about-us-logo">Contact Us</span> 
    </div>
    <div class="container">
        <div class="text-container">
            <div class="row">
                <div class="col-lg-6 col-sm-12 col-md-6">
                </div>
                <div class="col-lg-6">
                    <div class="form-bg">
                        <form action="">
                            <div class="mb-3">
                                <input type="text" class="form-control"  id="exampleFormControlInput1" placeholder="Name">
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control"  id="exampleFormControlInput1" placeholder="Email">
                            </div>
                            <div class="mb-3">
                                <input type="number" class="form-control"  id="exampleFormControlInput1" placeholder="Telephone">
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control form-control-1 " placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="btn-send">Send Message</div>
                        </form>
                    </div>
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
.container-width{
    padding: 1rem 6rem;
    margin-top: 7rem;
}
.form-bg{
    background: #FFFFFF;
    box-shadow: 1px 2px 8px -2px rgba(12, 100, 230, 0.25);
    border-radius: 20px;
    padding: 1rem;
    width: 500px;
    height: 521px;
    position: relative;
    top: -80px;
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
    background-image: url('/images/contactUs.png');
    /* height: 400px; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}
.form-control{
    border: 1px solid #BDBDBD;
    box-shadow: 0px 0px 13px 5px rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    width: 100%;
    height: 60px;
}
.form-control-1{
    border: 1px solid #BDBDBD;
    box-shadow: 0px 0px 13px 5px rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    width: 100%;
    height: 120px;
}
.btn-send{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 40px;
    gap: 20px;
    background: #F9DF4C;
    border-radius: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
}
@media screen and (max-width : 578px){
 .container-width{
    padding: 1rem;
    margin-top: 7rem;
}
.form-bg{
    background: #FFFFFF;
    box-shadow: 1px 2px 8px -2px rgba(12, 100, 230, 0.25);
    border-radius: 20px;
    padding: 1rem;
    width: 100%;
    height: 521px;
    position: relative;
    top: 0;
}
.about-us-logo{
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    /* line-height: 47px; */
    color: #000000;
    padding: 3rem 2rem;
    /* margin: 10px; */
    display: flex;
    align-items: center;
}
.round-box{
    background: #85B1F3;
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.text-container{
    background-image: url('/images/contactUs.png');
    /* height: 400px; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

}
@media only screen and (min-width : 768px) and (max-width : 1024px){
    .container-width{
    padding: 1rem;
    margin-top: 7rem;
}
.form-bg{
    background: #FFFFFF;
    box-shadow: 1px 2px 8px -2px rgba(12, 100, 230, 0.25);
    border-radius: 20px;
    padding: 1rem;
    width: 100%;
    height: 521px;
    position: relative;
    top: 0;
}
.about-us-logo{
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    /* line-height: 47px; */
    color: #000000;
    padding: 3rem 2rem;
    /* margin: 10px; */
    display: flex;
    align-items: center;
}
.round-box{
    background: #85B1F3;
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.text-container{
    background-image: url('/images/contactUs.png');
    /* height: 400px; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}
}
</style>