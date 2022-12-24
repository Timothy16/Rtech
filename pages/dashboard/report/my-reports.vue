<template>
<client-only>
    <div class="container-fluid bg-white mb-5">
       <div class="form-card " v-if="!loading">
        <div class="header-info">Complaints</div>
         <vuetable ref="vuetable"
            :fields="options"
            :api-mode="false"
            :data="reports" class="bg-white table-responsive-lg w-100 mt-5 ">
            <div slot="action" slot-scope="props">
                
                <nuxt-link :to="'/dashboard/report/single-report?reportId='+ props.rowData.id" class="btn btn-sm btn-secondary mb-2">
                    View    
                </nuxt-link>
                <div class="btn btn-sm btn-danger mb-2" @click="openDelete(props.rowData.id)">
                    Delete 
                </div>
            </div>
            <div slot="sn" slot-scope="props">
                    <span>{{ props.rowIndex + 1}}</span>
                  </div>
             <div slot="title" slot-scope="props">
                <span>{{ props.rowData.complaint }}</span>
            </div>

             <div slot="description" slot-scope="props">
                <span>{{ props.rowData.image ? "Yes" : "No" }}</span>
            </div>
        </vuetable>
       </div>
       <Loader v-else />
       <MazDialog v-model="openDeleteModal" danger :width="500" title="Delete Complaint" @confirm="deleteData()">
            Are you sure you want to delete this Complaint?
        </MazDialog>
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
            title: "My reports / Rtechbiz",
        };
    },
    data(){
        return{
            openDeleteModal : false,
            reportId : "",
            options: [
                { title: 'SN', name: 'sn'}, 
                { title: 'Complaint',frozen:true, name: 'title',width: "700px", editor: false}, 
                { title: 'Has image?', name: 'description', width: ""}, 
                { title: 'Action', name: 'action' }, 
            ]
        }
    },
     computed : {
        ...mapGetters({
            saving : "report/saving",
            loading : "report/loading",
            reports : "report/reports",
        }),
    },
    methods : {
        ...mapActions({
            getAllReports : "report/getAllReports",
            deleteThisComplaint : "report/deleteThisComplaint"
        }),
        ...mapMutations({
            SET_SAVING: "report/SET_SAVING",
        }),
        async deleteData(){
            try {
                let report_id = this.reportId
                await this.deleteThisComplaint(report_id)
                 this.openDeleteModal = false
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
         openDelete(value){
            this.openDeleteModal = true
            this.reportId = value
        },
    },
    mounted(){
        this.getAllReports()
    }
}
</script>

<style scoped>
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
    /* width: 90%; */
    /* margin: auto; */
    border-radius: 30px;
}
.completed{
  color: #107C10;
  background: rgba(16, 124, 16, 0.2);
  border-radius: 40px;
  padding: .5rem .7rem;
  font-size: 14px;
}
.pending{
  background: rgba(255, 165, 0, 0.2);
  border-radius: 40px;
  color: #FFA346;
  padding: .5rem .7rem;
  font-size: 14px;
}
.rejected{
  color: #FF0000;
  padding: .5rem .7rem;
  background: rgba(255, 0, 0, 0.2);
  border-radius: 40px;
  font-size: 14px;
}
</style>