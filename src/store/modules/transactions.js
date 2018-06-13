import axios from "axios"
import settings from "../../settings"

var URL_TRANSACTIONS = settings.URL_API+'/transactions';

export default {
  state:{
    error : "",
    transaction: {},
    list: []
  },
  mutations: {
    "transactions/set"(state, new_transactions) {
      state.list = new_transactions
    },
    "transactions/error"(state, new_transactionsError) {
      state.error = new_transactionsError
    },
  },
  actions: {
    "transactions/refresh"(context) {
      var address = localStorage.getItem("address")
      var privateKey = localStorage.getItem("privateKey")
      axios.get(URL_TRANSACTIONS, { 'headers': { 'Authorization': address + "$" + privateKey } })
      .then((response) => {
        context.commit("transactions/set", response.data)
      })
      .catch(function (error) {
        context.commit("transactions/error", error)
      })
    },
    "transactions/send"(context) {
      axios.post(URL_TRANSACTIONS,transaction,{
        headers:{
          'Authorization': "Paste addresses here"
        }
      })
      .then((response) => {

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
