import Vue from 'vue'
export const state = () => ({
    loading:   false,
    cryptos : "",
    saving : null
  })
  
  export const getters = {
    loading : state => state.loading,
    saving : state => state.saving,
    cryptos : state => state.cryptos,
  }

export const mutations = {
  SET_LOADING (state, loading)   {
    state.loading = loading
  },
  SET_SAVING (state, saving)   {
    state.saving = saving
  },
  SET_CRYPTO (state, cryptos)   {
    state.cryptos = cryptos
  },

}


export const actions = {
  async sendCryptoInfo ({commit}, queryParam) {
    commit('SET_SAVING', true)
    const { data } = await  this.$axios.$post(this.$config.baseURL + 'user/order/crypto', queryParam)
    // commit('ADD_GIFTCARD', data)
    commit('SET_SAVING', false)
  },
  async getAllCrypto ({commit}, queryParam) {
    commit('SET_LOADING', true)
    const { data } = await  this.$axios.$get(this.$config.baseURL + 'user/crypto', queryParam)
    commit('SET_CRYPTO', data)
    commit('SET_LOADING', false)
  },

 
}