<template>
    <div class="container-fluid  mb-5">
       <div class="form-card bg-white shadow">
            <nuxt-link to="/dashboard/report/my-reports">
                <div class="float-right btn-sm btn-outline-secondary btn">View Reports</div>
            </nuxt-link>
            <div class="header-info">My complaint</div>
            <form action="" @submit.prevent>                            

                <div class="form-group">
                    <label for="">Write a complait</label>
                    <textarea v-model="complaint" name="" class="form-control" id=""></textarea>
                    <p  v-if="field_errors.complaint" class="text-danger"> {{ field_errors.complaint[0]}}</p>
                </div>

                <div class="form-group mt-3">
                    <label for="" class="ml-2">Upload Image(optional)</label>
                    <div class="trigger-layer">
                        <span><i class='fa fa-file-upload ml-5'></i> <br> Upload Image!</span>
                        <input type="file"  accept="image/*"  @change="onFileChange($event)">
                    </div>
                </div>

                <div class="prevew-edit mb-3" v-if="preview_list.length >=1">
                    <div>
                        <label for="">{{preview_list.length}} image(s) selected  <span class="btn btn-danger btn-sm" @click="removeImages()">remove image</span></label>
                        <MazGallery :images="preview_list" height="300px"/>
                        <!-- <div class="row">
                            <div class="col-sm-12 col-lg-3 col-md-6" v-for="(image, index) in preview_list" :key="index">
                                <img v-if="image" :src="image" class="img-fluid d- img-thumbnail mb-1" />
                            </div>                        
                        </div> -->
                    </div>
                </div>


                <button type="submit" @click="sendData()" class="btn-sellgiftcards btn" :disabled="loading">{{saving ? 'Please wait...' :'Submit'}}</button>

            </form>
       </div>

  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    layout : "dashboard-layout",
    head() {
        return {
            title: "Sell Crypto / Rtechbiz",
        };
    },
        data(){
        return {
            complaint : null,
            preview_list: [],
            image_list: [],
            imageUpload : [],
        }
    },
    computed : {
        ...mapGetters({
            saving : "report/saving",
        }),
    },
    methods : {
        ...mapActions({
            sendReport : "report/sendReport"
        }),
        ...mapMutations({
            SET_SAVING: "report/SET_SAVING",
        }),
        removeImages(){
            this.preview_list = []
        },
        async sendData(){
            try{
            
                let formData = new FormData();
                formData.append('complaint', this.complaint ? this.complaint : "")
                 formData.append('image', this.imageUpload)
                // if(this.imageUpload.length > 0){
                //     for(var i=0 ; i < this.imageUpload.length; i++)
                //         {
                //             formData.append('image[' + i +']', this.imageUpload[i])
                //         }
                // }
                
                // else{
                //     formData.append('image', this.imageUpload)
                // }           
            
                await this.sendReport(formData)
                this.complaint = ""
                this.imageUpload = []
                this.preview_list = []
            }
            catch(error){
                this.SET_SAVING(false)
            }
        },
        onFileChange(event) {
            var input = event.target;
            this.imageUpload = input.files[0]
            var count = input.files.length;
            var index = 0;
            if (input.files) {
                while(count --) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.preview_list.push(e.target.result);
                }
                this.image_list.push(input.files[index]);
                reader.readAsDataURL(input.files[index]);
                index ++;
                }
            }
        },

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
    font-size: 16px;
    /* font-weight: 600; */
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