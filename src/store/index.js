import Vue from 'vue'
import Vuex from 'vuex'

// modules
import app from '@/store/modules/app'
import permission from '@/store/modules/permission'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app,
    permission
  }
})
