import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import transactions from "./modules/transactions"
import balance from "./modules/balance"
import stats from "./modules/stats"
import addresses from "./modules/addresses"
import app from "./modules/app"

Vue.use(Vuex)
Vue.config.productionTip = false

export default new Vuex.Store({
  plugins: [createLogger()],
  modules: {
    transactions,
    balance,
    stats,
    addresses,
    app
  }
})
