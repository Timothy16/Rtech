<template>
 <client-only>
    <div class="container-fluid bg-white">
       <div class="form-card mb-5 ">
        <MazAvatar
            :src="Upicture ? Upicture :'/images/avarter.jpg'"
            :size="120"
            editable
            class=""
            bordered
        />
        <MazBtn size="mini" color="blue" class="edit-upload" left-icon-name="camera" fab  v-on:click="show()"></MazBtn>
        <div class="header-info mt-1 mb-5">Personal Information</div>
        <form action="" class="" @submit.prevent>                            
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <label for="exampleInputEmail1">Full Name</label>
                        <input v-model="Uname" class="form-control form-control-lg mb-4" type="text" placeholder="" aria-label=".form-control-lg example">
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <label for="exampleInputEmail1">Username</label>
                        <input v-model="Username" class="form-control form-control-lg mb-4" type="text" placeholder="" aria-label=".form-control-lg example">
                    </div>
                </div>
                <div>
                    <label for="exampleInputEmail1">Email Address</label>
                    <input v-model="Uemail" :disabled="Uemail" class="form-control p-cur form-control-lg mb-4" type="text" placeholder="" aria-label=".form-control-lg example">
                </div>

                <div class="mb-3">
                    <label for="">Phone : {{Uphone}}</label>
                     <MazPhoneNumberInput v-model="phone" :fetchCountry='true' size="lg" />
                </div>

                <button type="submit" @click="sendData()" :disabled="saving" class="btn-sellgiftcards btn w-100">{{saving ? "Updating..." :'Update Profile'}}</button>

        </form>
       </div>
      
            <modal name="profilepicture" :adaptive="true" :height="500">
                <div class="channel-profile-main">
                    <cropper
                    :src="profileImg"
                    class="cropper"
                    ref="cropperPic"
                    
                    :stencil-props="{
                        handlers: {},
                        movable: false,
                        scalable: false,
                        aspectRatio: 5/3,
                    }"
                    image-restriction="stencil"

                    />
                    <!-- <img :src="profileImg" alt="" class="img-fluid" srcset=""> -->
                    <div class="channel-profile-pic">
                        <div class="image-btns1 ">
                            <input ref="fileInputPicture" type="file"  style="display:none" @change="onFileSelectedPicture" accept="image/*">
                            <button class="btn btn-sm btn-secondary" v-on:click="$refs.fileInputPicture.click()" :disabled="loading">Select Image</button> 
                            <button class="btn btn-sm btn-success" v-on:click="sendPicToServer()" :disabled="loading">Save</button> 
                            <button class="btn btn-sm btn-danger" v-on:click="hide()" :disabled="loading">Close</button>
                        </div>
                    </div>
                </div>
            </modal>
  </div>
  </client-only>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    middleware: 'auth',
    layout : "dashboard-layout",
    head() {
        return {
            title: "Profile / Rtechbiz",
        };
    },
    data(){
        return{
            phone : "",
            profileImg : "",
            newImage: null,
            profileImg2 : ""
        }
    },
    computed : {
        ...mapGetters({
            loading : "loading",
            saving : "saving",
            profile : "profileInfo",
        }),
        Uname:{
            get(){
                if(this.profile)
                    return  this.profile ? this.profile.name : null
                return null
            },
            set(value){
                let item = 'name'
                this.SET_PROFILE_DATA({item, value })
            }
        },
        Uphone:{
            get(){
                if(this.profile)
                    return  this.profile ? this.profile.phone : null
                return null
            },
            set(value){
                let item = 'phone'
                this.SET_PROFILE_DATA({item, value })
            }
        },
        Username:{
            get(){
                if(this.profile)
                    return  this.profile ? this.profile.username : null
                return null
            },
            set(value){
                let item = 'username'
                this.SET_PROFILE_DATA({item, value })
            }
        },
        Upicture(){
             if(this.newImage){
                return this.newImage 
            }
            else if(this.profile){
                return  this.profile ? this.profile.picture : null
            }
        },
        Uemail:{
            get(){
                if(this.profile)
                    return  this.profile ? this.profile.email : null
                return null
            },
            set(value){
                let item = 'email'
                this.SET_PROFILE_DATA({item, value })
            }
        },
    },
     methods : {
        ...mapActions({
            getProfileInfo: "getProfileInfo",
            updateProfileData : "updateProfileData"
        }),
        ...mapMutations({
            SET_LOADING: "SET_LOADING",
            SET_SAVING: "SET_SAVING",
            SET_PROFILE_DATA : "SET_PROFILE_DATA"
        }),
        
        async sendData(){
            try{
            
                let formData = new FormData();
                formData.append('name', this.Uname)
                formData.append('username', this.Username)
                formData.append('picture', this.profileImg2) 
                formData.append('phone', this.phone ? this.phone : this.Uphone)      
            
                await this.updateProfileData(formData)
            
            }
            catch(error){
                this.SET_SAVING(false)
            }
        }, 
        async sendPicToServer(){
                const { canvas } = this.$refs.cropperPic.getResult();

                if (canvas) {
                    // const form = new FormData();
                    this.newImage = canvas.toDataURL()
                    
                    await  canvas.toBlob(blob => {
                        
                        let item = 'picture'
                        let value = blob
                        this.SET_PROFILE_DATA({item, value })
                        this.hide()

                      
                    }, 'image/jpeg');
                }
            },
            onFileSelectedPicture(event){
                // Reference to the DOM input element
                this.profileImg2 = event.target.files[0];
                var input = event.target;
                // Ensure that you have a file before attempting to read it
                if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.profileImg = e.target.result;
                };
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
                }
            },
            show () {
                this.$modal.show('profilepicture');
            },
            hide () {
                this.$modal.hide('profilepicture');
            },
    },
    mounted(){
        this.getProfileInfo()
    }
}
</script>

<style scoped>
  .channel-profile-main{
    position: relative
  }
  .channel-profile-pic{
    bottom: 0;
    left: 0;
    padding: 1rem 30px;
    position: absolute;
    right: 0;
    top: 400px;
  }
  .preview {
  	border: dashed 1px rgba(255,255,255, 0.25);
  }
  /* .croppersize{
    border: solid 1px #EEE;
    height: 490px;
    width: 100%;
  } */
  .cropper {
    height: 500px;
    background: #fff;
    border: solid 1px #EEE;
    width: 100%;
}
.p-cur{
    cursor: not-allowed;
}
.edit-upload{
    position: relative;
    top: -30px;
    left: 80px;
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
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
}
.form-card{
    padding: 1.5rem;
    width: 100%;
    /* margin: auto; */
     /* border-radius: 30px; */
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
        padding: .1rem;
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