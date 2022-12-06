import Vue from 'vue'
export const state = () => ({
    loading:   false,
    logining: false,
    registering: false,
    loggedIn:   false,
    user:   false,
    strategy:   'local',
    bankInfo : null,
    saving : null
  })
  
  export const getters = {
    authenticated: state =>  state.auth.loggedIn,
    user : state => state.auth.user,   
    logining : state => state.logining,
    registering : state => state.registering,
    loading : state => state.loading,
    bankInfo : state => state.bankInfo,
    saving : state => state.saving,
  }

export const mutations = {
  SET_LOGGING_IN (state, payload) {
    state.logining = payload
  },
  SET_REGISTERING (state, registering) {
    state.registering = registering
  },
  SET_LOADING (state, loading)   {
    state.loading = loading
  },
  SET_BANK (state, bankInfo)   {
    state.bankInfo = bankInfo
  },
  SET_SAVING (state, saving)   {
    state.saving = saving
  },

}


export const actions = {
  async register ({commit}, queryParam) {
    commit('SET_REGISTERING', true)
    const { data } = await  this.$axios.$post(this.$config.baseURL + 'register', queryParam)
    // commit('ADD_GIFTCARD', data)
    commit('SET_REGISTERING', false)
  },
  async updateAuthUserPassword ({commit}, queryParam) {
    commit('SET_LOADING', true)
    const { data } = await  this.$axios.$post(this.$config.baseURL + 'change-password', queryParam)
    // commit('ADD_GIFTCARD', data)
    commit('SET_LOADING', false)
  },
  async addBankDetials ({commit}, queryParam) {
    commit('SET_LOADING', true)
    const { data } = await  this.$axios.$post(this.$config.baseURL + 'user/bank-details/store', queryParam)
    // commit('ADD_GIFTCARD', data)
    commit('SET_LOADING', false)
  },
  async getBankDetials ({commit}, queryParam) {
    commit('SET_SAVING', true)
    const { data } = await  this.$axios.$get(this.$config.baseURL + 'user/bank-details', queryParam)
    commit('SET_BANK', data)
    commit('SET_SAVING', false)
  },

 
}