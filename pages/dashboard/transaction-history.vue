<template>
    <div class="container-fluid mb-5">
       <div class="form-card shadow">
        <div class="header-info">Transaction History</div>
            <table class="table  text-center table-responsive-lg table-lg">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Card Name</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="completed">Completed</span></td>
                <td><span class="btn btn-primary btn-sm">view</span></td>
              </tr>
             <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="rejected">Rejected</span></td>
                <td><span class="btn btn-primary btn-sm">view</span></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="pending">Pending</span></td>
                <td><span class="btn btn-primary btn-sm">view</span></td>
              </tr>
               <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="pending">Pending</span></td>
                <td><span class="btn btn-primary btn-sm">view</span></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="completed">Completed</span></td>
                <td><span class="btn btn-primary btn-sm">view</span></td>
              </tr>
               <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="pending">Pending</span></td>
                <td><span class="btn btn-primary btn-sm">view</span></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="rejected">Rejected</span></td>
                <td><span class="btn btn-primary btn-sm">view</span></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="rejected">Rejected</span></td>
                <td><span class="btn btn-primary btn-sm">view</span></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="rejected">Rejected</span></td>
                <td><span class="btn btn-primary btn-sm">view</span></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="rejected">Rejected</span></td>
                <td><span class="btn btn-primary btn-sm">view</span></td>
              </tr>

              
            </tbody>
          </table>
       </div>
  </div>
</template>

<script>
export default {
    layout : "dashboard-layout",
    head() {
        return {
            title: "Transaction History / Rtechbiz",
        };
    },
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