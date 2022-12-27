<template>
  <div class="section-service container-fluid">
    <div class="header-service" data-aos="fade-up">Our Service</div>
    <div class="card-section">
        <div class="row">
            <div class="col-sm-12 col-lg-4 col-md-12">
                <div class="col-style" data-aos="fade-up-right" data-aos-delay="500">
                    <div><img src="/images/security_user.png" class="img-fluid" alt=""></div>
                    <div class="card-header-1">Safe & secured transactions guaranteed</div>
                    <div class="card-text-1">Trusted by thousands nationwide for its secured platform, we are confident to say that your assets are in the right hands.</div>
                </div>
            </div> 
            <div class="col-sm-12 col-lg-4 col-md-12">
                <div class="col-style middle-card" data-aos="fade-down-right" data-aos-delay="600">
                    <div><img src="/images/trade.png" class="img-fluid" alt=""></div>
                    <div class="card-header-1">Trade, Relax and get paid instantly.</div>
                    <div class="card-text-1">Every customer is treated like a King. We boast of 1200 + reviews from our loyal customers.</div>
                </div>
            </div>
            <div class="col-sm-12 col-lg-4 col-md-12" data-aos="fade-up-right" data-aos-delay="700">
                <div class="col-style last-card">
                    <div><img src="/images/bitcoin_convert.png" class="img-fluid" alt=""></div>
                    <div class="card-header-1">World Class Customer Experience</div>
                    <div class="card-text-1">Every one of our services is built with you in mind. Beating our chest we can say, we give you the best trading experience</div>
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
    padding: 1rem 6rem 4rem 7rem;
}
.header-service{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    max-width: 250px;
    margin: 100px auto;
    text-align: center;
    position: relative;
}
.header-service:before {
    content:" ";
    display: block;
    height: 5px;
    width: 50px;
    position: absolute;
    top: 50%;
    left: 0;
    background: #0C64E6;
}

.header-service:after {
    content:" ";
    height: 5px;
    width: 50px;
    background: #0C64E6;
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
}
.section-service{
    padding: 2rem 7rem 2rem 7rem;
}
.col-style{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 24px;
    width: 379px;
    height: 291px;
    background: rgba(249, 247, 238, 0.47);
    box-shadow: 0px 4px 8px rgba(243, 239, 222, 0.5);
    border-radius: 20px;
    /* margin: 1rem; */
}
.card-header-1{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #0C64E6;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.card-text-1{
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
    flex: none;
    order: 2;
    flex-grow: 0;
}
.middle-card{
    margin-top: 4rem;
}
@media screen and (max-width : 578px){
    .section-service{
    padding: 1rem;
}
.card-section{
    padding: 1rem;
}
.col-style{
    width: auto;
    padding: 1rem;
}
.header-service{
    margin: 50px auto;
}
.middle-card{
    margin-top: 2rem;
}
.last-card{
    margin-top: 2rem;
}
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
    .col-style{
        width: 100%;
        padding: 1rem;
    }
     .section-service{
        padding: 1rem;
    }
    .last-card{
    margin-top: 2rem;
}
}
</style>