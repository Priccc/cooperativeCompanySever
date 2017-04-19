import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    actPage: 'xsbHome'
  },
  mutations: {
    changeActPage (state, date) {
      state.actPage = date
    }
  }
})

export default store
