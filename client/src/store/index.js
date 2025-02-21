import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false
  },
  getters: {
  },
  mutations: {
    SET_AUTH(state) {
      state.isAuthenticated = true
    },
    SET_UNAUTH(state) {
      state.isAuthenticated = false
    }
  },
  actions: {
  },
  modules: {
  }
})
