<template>
  <div class="bg-footer container-fluid">
        <footer class="">
            <div class="news-letter container bg-footer-1">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-4">
                        <div class="letter-new">Subscribe Newsletter</div>
                    </div>
                    <div class="col-sm-12 col-md-7 col-lg-6">
                        <div class="d-flex form-control-1">
                            <div class="icon-pad">
                                <img src="/images/sms-tracking-f.png" width="30px" height="30px" alt="" srcset="">
                            </div>
                            <input type="email" v-model="email" class="form-control form-control-plaintext w-100 mr-3" placeholder="Email">
                        </div>
                        <p  v-if="field_errors.email" class="text-danger"> {{ field_errors.email[0]}}</p>
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-2">
                        <button :disabled="saving" class="btn btn-subscribe" @click.prevent="userSubscribeNewsletter">{{saving ? 'Saving...' : 'Subscribe'}}</button>
                    </div>
                </div>
            </div>
            <div class="container-width">
                <div class="row">
                    <div class="col-sm-6 col-lg-3 col-md-6">
                        <img src="/images/logo_one-1.png" alt="" srcset="">
                        <div class="footer-text">Rtech Business Services has created a one-of-a-kind platform for exchanging BitCoins and gift cards</div>
                    </div>
                    <div class="col-sm-6 col-lg-3 col-md-6">
                        <div class="footer-header-link">Resource</div>
                        <ul class="footer-links">
                            <li><nuxt-link to="/rates">Rate</nuxt-link></li>
                            <li><nuxt-link to="/contact-us">Contact Us</nuxt-link></li>
                            <li><nuxt-link to="/about-us">About Us</nuxt-link></li>
                            
                        </ul>
                    </div>
                    <div class="col-sm-6 col-lg-3 col-md-6">
                        <div class="footer-header-link">Company</div>
                        <ul class="footer-links">
                            <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
                            <li>Terms of service</li>
                            <li>Privacy and policy</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-lg-3 col-md-6">
                        <div class="footer-header-link">Socials</div>
                        <ul class="footer-links">
                            <li><img src="/images/sms-tracking-white.png" width="20px" height="20px" alt="" srcset=""> &nbsp;&nbsp; info@rtechbiz.com</li>
                            <li><img src="/images/call.png" width="20px" height="20px" alt="" srcset=""> &nbsp;&nbsp; +2347061032844</li>
                            <li>
                                <img src="/images/twitter.png" width="20px" height="20px" alt="" srcset=""> &nbsp;&nbsp; 
                                <img src="/images/instagram.png" width="20px" height="20px" alt="" srcset=""> &nbsp;&nbsp; 
                                <img src="/images/whatsapp.png" width="20px" height="20px" alt="" srcset=""> &nbsp;&nbsp;
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
            email : "",
        }
    },
     computed : {
        ...mapGetters({
            saving : "saving"
        }),
    },
    methods : {
        ...mapActions({
            subscribeNewsletter : "subscribeNewsletter"
        }),
         ...mapMutations({
            SET_SAVING: "SET_SAVING",
        }),
         async userSubscribeNewsletter(){
            
            try {
                let parameter = {
                    email : this.email,
                }
                await this.subscribeNewsletter(parameter)
                this.email = ""
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
    },
}
</script>

<style scoped>
.container-width{
    padding: 2rem 7rem;
    margin-top: 1.5rem;
}
.bg-footer{
    background: #000000;
    padding: 3rem 0;
}

.news-letter{
    background: #0C64E6;
    border-radius: 30px;
    padding: 3rem 2rem;
    /* margin: 3rem 15rem; */
}
.letter-new{
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    padding-top: 1rem;
}
.form-control{
    /* box-sizing: border-box;
    width: 650px; */
    height: auto;
    border: none;
    font-size: 1.2rem;
    padding: .3rem;
    /* color: #0C64E6; */
}
.icon-pad{
    padding: .8rem;
}
.form-control:focus{
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
    background: #FFFFFF;
}
.form-control-1{
    background: #FFFFFF;
    border: 1px solid #BDBDBD;
    box-shadow: 0px 0px 13px 5px rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    padding: 7px;
}
::placeholder{
    color: #0C64E6;
    padding-left: 1rem;
    font-weight: 600;
}
.btn-subscribe{ 
    align-items: center;
    padding: 20px 40px;
    background: #F9DF4C;
    border-radius: 10px;
    font-style: normal;
    /* font-weight: 600; */
    font-size: 20px; 
    line-height: 23px;
    color: #000000;
    /* word-break: break-all; */
}
.footer-text{
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 1rem;
    width: 70%;
}
.footer-header-link{
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: rgba(255, 255, 255, 0.7);
}
.footer-links{
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    color: #FFFFFF;
    list-style-type: none;
    margin: 0;
    padding: 0;  
}
ul li{
    padding-top: 1rem;
}
a{
    color: #FFFFFF;
    /* text-decoration: none; */
    font-size: 14px;
}
@media screen and (max-width : 578px){
    .news-letter{
        padding: 1rem;
        /* margin: 1rem; */
    }
    .btn-subscribe{ 
        width: 100%;
        margin-top: .5rem;
    }
    .letter-new{
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 38px;
        color: #FFFFFF;
        padding-top: 1rem;
    }
    .container-width{
        padding:  1rem;
    }
    .footer-text{
        width: 100%;
    }
    .footer-header-link{
        margin-top: 1.4rem;
        font-weight: 600;
    }
    .footer-links{
        font-size: 16px;
        line-height: 23px;
    }
    ul li{
        padding-top: .5rem;
    }
    
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
    .section-flex{
        margin-top: 2rem;
    }
    .news-letter{
        padding: 1rem;
        margin: 1rem;
    }
    .container-width{
        padding: 1rem;
    }
    .footer-links{
        font-size: 16px;
        line-height: 23px;
    }
    ul li{
        padding-top: .5rem;
    }
    .footer-header-link{
        margin-top: 1.4rem;
        font-weight: 600;
    }
}
</style>