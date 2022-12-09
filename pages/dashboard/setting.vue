<template>
    <div class="container-fluid mb-5">
       <div class="form-card shadow">
        <div class="header-info mt-1">Update Password</div>
            <form action="" class="" @submit.prevent>                            
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <label for="exampleInputEmail1">Eamil</label>
                        <input v-model="userEmail" disabled class="form-control form-control-lg mb-4 cusor-p" type="text" placeholder="" aria-label=".form-control-lg example">
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <label for="exampleInputEmail1">New password</label>
                        <input v-model="password" id="myInput" class="form-control form-control-lg mb-4" type="password" placeholder="" aria-label=".form-control-lg example">
                        <p  v-if="field_errors.password" class="text-danger"> {{ field_errors.password[0]}}</p>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <label for="exampleInputEmail1">Confirm password</label>
                        <input v-model="confirm_password" id="myInput2" class="form-control form-control-lg mb-4" type="password" placeholder="" aria-label=".form-control-lg example">
                         <p  v-if="field_errors.password_confirmation" class="text-danger"> {{ field_errors.password_confirmation[0]}}</p>
                    </div>

                    <div class="form-check ml-3">
                        <input  @click="showPassword()" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Show password
                        </label>
                    </div>
                    <!-- <input type="checkbox" class="">Show Password -->
                   
                </div>                            
                <button type="submit" @click="updatePassword" class="btn-sellgiftcards btn w-100 mt-2" :disabled="loading">{{loading ? 'Updating...' : 'Update Password'}}</button>

            </form>
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
            title: "Settings / Rtechbiz",
        };
    },
    data(){
        return {
            password : "",
            confirm_password : "",
        }
    },
    computed : {
        ...mapGetters({
            loading : "loading",
        }),
        userEmail(){
            return this.user ? this.user.email : ""
        }
    },
    methods : {
        ...mapActions({
            updateAuthUserPassword: "updateAuthUserPassword",
        }),
        ...mapMutations({
            SET_LOADING: "SET_LOADING",
        }),
        async updatePassword(){
           
            try {
                let parameter = {
                    email : this.userEmail,
                    password : this.password,
                    password_confirmation : this.confirm_password
                }

                await this.updateAuthUserPassword(parameter)
                this.password = ""
                this.confirm_password = ""
            } catch (error) {
                this.SET_LOADING(false)
            }
        },
        showPassword(){
            var x = document.getElementById("myInput");
            var y = document.getElementById("myInput2");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }

            if (y.type === "password") {
                y.type = "text";
            } else {
                y.type = "password";
            }

        }
    }
}
</script>

<style scoped>
.edit-upload{
    position: relative;
    top: -30px;
    left: 80px;
}
.cusor-p{
    cursor: not-allowed;
}
.header-info{
    font-style: normal;
    font-weight: 550;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 2rem;
}
label{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: rgba(0, 0, 0, 0.7);
}
.form-control{
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    background: rgba(12, 100, 230, 0.06);
    border: 1px solid rgba(12, 100, 230, 0.7);
    border-radius: 10px;
    /* font-weight: 600; */
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