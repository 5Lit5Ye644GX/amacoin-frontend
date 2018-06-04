import axios from "axios"
import settings from "../../settings"

export default {
  state:{
    error : "",
    list: []
  },
  mutations: {
    "transactions/set"(state, new_transactions) {
      state.list = new_transactions
    },
    "transactions/error"(state, new_transactionsError) {
      state.error = new_transactionsError
    }
  },
  actions: {
    "transactions/refresh"(context) {
      axios.get(settings.URL_API+'/transactions')
      .then((response) => {
        context.commit("transactions/set", response.data)
      })
      .catch(function (error) {
        context.commit("transactions/error", error)
      })
    }
  },
  getters: {
   transactions: state => {
     return state.list
   }
 }
}
