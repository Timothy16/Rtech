import Vue from 'vue'
export const state = () => ({
    giftcards: [],
    loading : false,
    saving : false,
    giftcardRates : [],
})

export const getters = {
    giftcards:  state => state.giftcards,
    loading:  state => state.loading,
    saving:  state => state.saving,
    giftcardRates:  state => state.giftcardRates,
}

export const mutations = {
    SET_LOADING (state, loading)   {
        state.loading = loading
    },
    SET_SAVING (state, saving)   {
        state.saving = saving
    },
    SET_GIFTCARDS_RATE (state, giftcardRates)   {
        state.giftcardRates = giftcardRates
    },
    SET_GIFTCARDS (state, giftcards) {
        state.giftcards = giftcards
    },
 
 
}

export const actions = {
    async getGiftcards ({commit}, parameter) {
        
        commit('SET_LOADING', true)
        const { data } = await  this.$axios.$get(this.$config.baseURL + 'user/giftcard', parameter)
        commit('SET_GIFTCARDS', data)
        commit('SET_LOADING', false)
    },
    async getGiftcardRates ({commit}, parameter) {
        
        commit('SET_LOADING', true)
        const { data } = await  this.$axios.$get(this.$config.baseURL + `user/giftcard-rate/${parameter}`)
        commit('SET_GIFTCARD_RATE', data)
        commit('SET_LOADING', false)
    },
  
   
}