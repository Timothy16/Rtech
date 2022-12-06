<template>
<div>
    <div v-if="report && !loading">
        <div class="bg-white bg-pad">
            <div class="d-flex justify-content-between">
                <nuxt-link to="/dashboard/report/my-reports">
                    <i class="fa fa-angle-left angle-edit"></i>
                </nuxt-link>
            </div>
            
            <div class="mt-4">
                <!-- <div class="personal-info">Crypto Order</div> -->
                <div class="headers">Compalint:</div>
                <div class="text-h">{{report.complaint}}</div>

                <div class="headers">Complaint Image:</div>
                <div class="text-h" v-if="report.image"><img src="/images/btc_img.png" alt="" srcset=""></div>
                <div class="text-h" v-else>No Image</div> 

            </div>
        </div>
    </div>
    <Loader v-else/>
</div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
     layout : "dashboard-layout",
     head() {
        return {
            title: "My report / Rtechbiz",
        };
    },
    data(){
        return {
        }
    },
    computed: {
        ...mapGetters({
            loading : "report/loading",
            report : "report/reportData",
        }),
    },
    methods : {
        ...mapActions({
            getReport: "report/getReport",
        }),
    },
    mounted(){
       let report_id = this.$route.query.reportId
       this.getReport(report_id)
    }
}
</script>

<style scoped>
.bg-pad{
    padding: 2rem !important;
}
.angle-edit{
    font-size: 2rem;
}
.personal-info{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 2rem;
}
.headers{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    /* line-height: 19px; */
    color: rgba(0, 0, 0, 0.7);
    margin-top: 1.3rem;
}
.text-h{
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    /* line-height: 28px; */
    color: #000000;
    margin-top: .4rem;
}
</style>