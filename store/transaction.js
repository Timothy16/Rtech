import Vue from 'vue'
export const state = () => ({
    giftcards: [],
    giftcard: null,
    loading : false,
    saving : false,
    cryptos : [],
    crypto : null,
    transactions : []
})

export const getters = {
    giftcards:  state => state.giftcards,
    giftcard:  state => state.giftcard,
    transactions:  state => state.transactions,
    loading:  state => state.loading,
    saving:  state => state.saving,
    cryptos:  state => state.cryptos,
    crypto:  state => state.crypto,
}

export const mutations = {
    SET_LOADING (state, loading)   {
        state.loading = loading
    },
    SET_SAVING (state, saving)   {
        state.saving = saving
    },
    SET_CRYPTOS (state, cryptos)   {
        state.cryptos = cryptos
    },
    SET_CRYPTO (state, crypto)   {
        state.crypto = crypto
    },
    SET_GIFTCARDS (state, giftcards)   {
        state.giftcards = giftcards
    },
    SET_GIFTCARD (state, giftcard)   {
        state.giftcard = giftcard
    },
    SET_TRANSACTIONS (state, transactions) {
        state.transactions = transactions
    },
 
 
}

export const actions = {
    async getGiftcardOrders ({commit}, parameter) {
        
        commit('SET_LOADING', true)
        const { data } = await  this.$axios.$get(this.$config.baseURL + 'user/order/giftcard', parameter)
        commit('SET_GIFTCARDS', data)
        commit('SET_LOADING', false)
    },
    async getGiftcardOrder ({commit}, parameter) {
        commit('SET_LOADING', true)
        const { data } = await  this.$axios.$get(this.$config.baseURL + `user/order/giftcard/${parameter}`)
        commit('SET_GIFTCARD', data)
        commit('SET_LOADING', false)
    },
    async getGiftcardFilter ({commit,}, parameter) {
        commit('SET_LOADING', true)
        const {data} =await  this.$axios.$get(this.$config.baseURL + `user/order/giftcard/filter/${parameter}`, )
        commit('SET_GIFTCARDS', data)
        commit('SET_LOADING', false)
    }, 
    async getCryptoOrders ({commit}, parameter) {
        
        commit('SET_LOADING', true)
        const { data } = await  this.$axios.$get(this.$config.baseURL + 'user/order/crypto', parameter)
        commit('SET_CRYPTOS', data)
        commit('SET_LOADING', false)
    },
    async getCryptoOrder ({commit}, parameter) {
        
        commit('SET_LOADING', true)
        const { data } = await  this.$axios.$get(this.$config.baseURL + `user/order/crypto/${parameter}`)
        commit('SET_CRYPTO', data)
        commit('SET_LOADING', false)
    },
    async getCryptoFilter ({commit,}, parameter) {
        commit('SET_LOADING', true)
        const {data} =await  this.$axios.$get(this.$config.baseURL + `user/order/crypto/filter/${parameter}`, )
        commit('SET_CRYPTOS', data)
        commit('SET_LOADING', false)
    }, 
    async getAllTransactions ({commit}, parameter) {
        
        commit('SET_LOADING', true)
        const { data } = await  this.$axios.$get(this.$config.baseURL + `user/transactions`, parameter)
        commit('SET_TRANSACTIONS', data)
        commit('SET_LOADING', false)
    },
  
   
}