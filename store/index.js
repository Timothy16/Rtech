import Vue from 'vue'
export const state = () => ({
    loading:   false,
    logining: false,
    registering: false,
    loggedIn:   false,
    user:   false,
    strategy:   'local',
    bankInfo : null,
    saving : null,
    faqs : [],
    giftcards : [],
    cryptos : [],
    profileInfo : null
  })
  
  export const getters = {
    authenticated: state =>  state.auth.loggedIn,
    user : state => state.auth.user,   
    logining : state => state.logining,
    registering : state => state.registering,
    loading : state => state.loading,
    bankInfo : state => state.bankInfo,
    saving : state => state.saving,
    faqs : state => state.faqs,
    giftcards : state => state.giftcards,
    cryptos : state => state.cryptos,
    profileInfo : state => state.profileInfo
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
  SET_FAQ (state, faqs)   {
    state.faqs = faqs
  },
  SET_SAVING (state, saving)   {
    state.saving = saving
  },
  SET_GIFTCARD_RATE (state, giftcards)   {
    state.giftcards = giftcards
  },
  SET_CRYPTO_RATE(state, cryptos)   {
    state.cryptos = cryptos
  },
  SET_PROFILE (state, profileInfo)   {
    state.profileInfo = profileInfo
  },
  SET_PROFILE_DATA(state, { item, value }) {
    if(!state.profileInfo){
      state.profileInfo ={}
    }
    Vue.set(state.profileInfo, item, value);
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
    commit('SET_BANK', data)
    commit('SET_LOADING', false)
  },
  async getBankDetials ({commit}, queryParam) {
    commit('SET_SAVING', true)
    const { data } = await  this.$axios.$get(this.$config.baseURL + 'user/bank-details', queryParam)
    commit('SET_BANK', data)
    commit('SET_SAVING', false)
  },
  async getAllFaq ({commit}, queryParam) {
    commit('SET_SAVING', true)
    const { data } = await  this.$axios.$get(this.$config.baseURL + 'user/faq', queryParam)
    commit('SET_FAQ', data)
    commit('SET_SAVING', false)
  },
  async getGiftcardRate ({commit}, queryParam) {
    commit('SET_SAVING', true)
    const { data } = await  this.$axios.$get(this.$config.baseURL + 'rate/giftcard', queryParam)
    commit('SET_GIFTCARD_RATE', data)
    commit('SET_SAVING', false)
  },
  async getCryptoRate ({commit}, queryParam) {
    commit('SET_SAVING', true)
    const { data } = await  this.$axios.$get(this.$config.baseURL + 'rate/crypto', queryParam)
    commit('SET_CRYPTO_RATE', data)
    commit('SET_SAVING', false)
  },
  async getProfileInfo ({commit}, queryParam) {
    commit('SET_LOADING', true)
    const { data } = await  this.$axios.$get(this.$config.baseURL + 'user/profile', queryParam)
    commit('SET_PROFILE', data)
    commit('SET_LOADING', false)
  },
  async updateProfileData ({commit}, queryParam) {
    commit('SET_SAVING', true)
    const { data } = await  this.$axios.$post(this.$config.baseURL + 'user/profile/update?_method=patch', queryParam)
    // commit('SET_GIFTCARD_RATE', data)
    commit('SET_SAVING', false)
  },
  async subscribeNewsletter ({commit}, queryParam) {
    commit('SET_SAVING', true)
    const { data } = await  this.$axios.$post(this.$config.baseURL + 'newsletter', queryParam)
    // commit('SET_GIFTCARD_RATE', data)
    commit('SET_SAVING', false)
  },
  async userContactUs ({commit}, queryParam) {
    commit('SET_LOADING', true)
    const { data } = await  this.$axios.$post(this.$config.baseURL + 'contact', queryParam)
    // commit('SET_GIFTCARD_RATE', data)
    commit('SET_LOADING', false)
  },
  async forgotPassword ({commit}, queryParam) {
    commit('SET_LOADING', true)
    const { data } = await  this.$axios.$post(this.$config.baseURL + 'forget-password', queryParam)
    // commit('SET_GIFTCARD_RATE', data)
    commit('SET_LOADING', false)
  },

  async resetPassword ({commit}, {token, parameter}) {
    commit('SET_LOADING', true)
    const { data } = await  this.$axios.$post(this.$config.baseURL + 'password-reset', parameter, {headers : {
      'token' : `${token}`
    }})
    // commit('SET_GIFTCARD_RATE', data)
    commit('SET_LOADING', false)
  },

 
}