import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: ""
  },
  mutations: {
    login(state, name) {
      state.name = name;
    },
    logout(state) {
      state.name = "";
    }
  },
  actions: {

  },
  plugins: [createPersistedState({
    // この key で state をセッションストレージに保存する
    key: 'vuex-demo',
    storage: window.sessionStorage
  })]
})
