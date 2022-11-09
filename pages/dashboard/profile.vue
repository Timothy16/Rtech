<template>
    <div class="container-fluid mb-5">
       <div class="form-card shadow">
        <MazAvatar
            src="/images/thiago.jpg"
            :size="120"
            editable
            class=""
            bordered
        />
        <MazBtn size="mini" color="blue" class="edit-upload" left-icon-name="camera" fab></MazBtn>
        <div class="header-info mt-1">Personal Information</div>
            <form action="" class="">                            
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <label for="exampleInputEmail1">First Name</label>
                        <input class="form-control form-control-lg mb-4" type="text" placeholder="" aria-label=".form-control-lg example">
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <label for="exampleInputEmail1">Last Name</label>
                        <input class="form-control form-control-lg mb-4" type="text" placeholder="" aria-label=".form-control-lg example">
                    </div>
                </div>
                <div>
                    <label for="exampleInputEmail1">Email Address</label>
                    <input class="form-control form-control-lg mb-4" type="text" placeholder="" aria-label=".form-control-lg example">
                </div>

                <div class="mb-3">
                     <MazPhoneNumberInput :fetchCountry='true' size="lg" />
                </div>
                
                <div>

                </div>
                


                <div class="btn-sellgiftcards btn w-100">Update Profile</div>

            </form>
       </div>
  </div>
</template>

<script>
export default {
    layout : "dashboard-layout",
    head() {
        return {
            title: "Profile / Rtechbiz",
        };
    },
}
</script>

<style scoped>
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