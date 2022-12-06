import Vue from 'vue'
export const state = () => ({
    loading:   false,
    reports : [],
    saving : null,
    reportData : ""
  })
  
  export const getters = {
    loading : state => state.loading,
    saving : state => state.saving,
    reports : state => state.reports,
    reportData : state => state.reportData
  }

export const mutations = {
  SET_LOADING (state, loading)   {
    state.loading = loading
  },
  SET_SAVING (state, saving)   {
    state.saving = saving
  },
  SET_REPORTS (state, reports)   {
    state.reports = reports
  },
  SET_REPORT (state, reportData)   {
    state.reportData = reportData
  },
  DELETE_COMPLAINT(state, reportId){
    let index = state.reports.findIndex(report => report.id === reportId); 
    if(index > -1)
      Vue.delete(state.reports, index)
  }
}


export const actions = {
  async sendReport ({commit}, queryParam) {
    commit('SET_SAVING', true)
    const { data } = await  this.$axios.$post(this.$config.baseURL + 'user/report/store', queryParam)
    // commit('ADD_GIFTCARD', data)
    commit('SET_SAVING', false)
  },
  async getAllReports ({commit}, queryParam) {
    commit('SET_LOADING', true)
    const { data } = await  this.$axios.$get(this.$config.baseURL + 'user/report', queryParam)
    commit('SET_REPORTS', data)
    commit('SET_LOADING', false)
  },
  async getReport ({commit}, queryParam) {
    commit('SET_LOADING', true)
    const { data } = await  this.$axios.$get(this.$config.baseURL + `user/report/${queryParam}`)
    commit('SET_REPORT', data)
    commit('SET_LOADING', false)
  },
  async deleteThisComplaint ({commit,}, queryParam) {
    commit('SET_SAVING', true)
    const {data} =await  this.$axios.$delete(this.$config.baseURL + `user/report/${queryParam}/delete`)
    let reportId = queryParam
    commit('DELETE_COMPLAINT', reportId)
    commit('SET_SAVING', false)
}, 

 
}