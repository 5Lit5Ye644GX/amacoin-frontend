import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import transactions from "./services/transactions"
Vue.use(Vuex)
Vue.config.productionTip = false

export default new Vuex.Store({
  plugins: [createLogger()],
  modules: {
    transactions
  }
})
