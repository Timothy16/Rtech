<template>
   <div class="">
    <div class="big-bg-bg"> <div class="header-service">Reviews & Testimonials</div></div>
    <div class="section-service">
        <div class="card-section">
            <div class="row">
                <div class="col-sm-12 col-lg-4 col-md-12">
                    <div class="col-style">
                        <div class="card-header-1">“One of the best bitcoin buyers out there, in my opinion. 
                            the swift credit policy is quite appealing, plus their response time is supperb. 
                            I will always recommend Rtech”</div>
                        <div class="card-text-1">DammyGray</div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4 col-md-12">
                    <div class="col-style middle-card">
                        <div class="card-header-1">“Thank you, Rtech!
                            your rate is one of the best ive ever seen, your services are fantastic,
                            tyou guys are full of surprises and its a pleasure doing business with you”</div>
                        <div class="card-text-1">BtcLords.</div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4 col-md-12">
                    <div class="col-style last-card">
                        <div class="card-header-1">“Just as promised, i received a acredit alert. its just so stunning, thank you for the prompt payment. 
                            Rtech provides the easiest way to sell giftcards in nigeria”</div>
                        <div class="card-text-1">LahLah</div>
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
.card-section{
    padding: 6rem;
}
.header-service{
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    text-align: center;
    color: #000000;
}
.section-service{
    /* padding: 10rem 0; */
}
.col-style{
    background: #0C64E6;
    box-shadow: 2.5px 5px 10px rgba(12, 100, 230, 0.25);
    border-radius: 30px;
    /* width: 480px; */
    height: 375px;
    padding: 2rem;
}
.card-header-1{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    margin-top: 1rem;
}
.card-text-1{
    font-style: normal;
    font-weight: 600;
    font-size: 27.8617px;
    line-height: 42px;
    letter-spacing: -1.89005px;
    color: #FFFFFF;
    margin-top: 4rem;
}
.middle-card{
    margin-top: 4rem;
}
.last-card{
    margin-top: 8rem;
}
.big-bg-bg{
    background: url("/images/reviews_bg.png");
    height: 110px;
    margin-top: 7rem;
}
@media screen and (max-width : 578px){
    .header-service{
        font-size: 20px;
        line-height: 0;
    }
    .big-bg-bg{
        background: url("/images/reviews_bg.png");
        height: 30px;
        margin-top: 2rem;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .card-section{
        padding: 1rem;
    }
    .middle-card{
        margin-top: 2rem;
    }
    .last-card{
        margin-top: 2rem;
    }
}
@media screen and (max-width : 768px){
    .big-bg-bg{
        margin-top: 0;
    }
}
</style>