import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    hideloading (state) {
      state.loading = false
    },
    showloading (state) {
      state.loading = true
    }
  },
  actions: {
    hideloading ({ commit }) {
      commit('hideloading')
    },
    showloading (store) {
      store.commit('showloading')
    }
  }
})
