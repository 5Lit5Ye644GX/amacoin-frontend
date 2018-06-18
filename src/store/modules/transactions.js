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
    "transaction/set"(state, new_transaction) {
      state.transaction = new_transaction
    },
    "transactions/set"(state, new_transactions) {
      state.list = new_transactions
    },
    "transactions/error"(state, new_transactionsError) {
      state.error = new_transactionsError
    },
  },
  actions: {
    "transactions/refresh"(context) {
      axios.get(URL_TRANSACTIONS, { 'headers': { 'Authorization': this.getters.address } })
      .then((response) => {
        context.commit("transactions/set", response.data)
      })
      .catch(function (error) {
        context.commit("transactions/error", error)
      })
    },
    "transactions/send"(context) {
      axios.post(URL_TRANSACTIONS,context.getters.transaction,{
        headers:{
          'Authorization': this.getters.address+'$'+this.getters.privateKey
        }
      })
      .then((response) => {
        context.commit("transaction/set", {})

        this.dispatch("transactions/refresh")
        this.dispatch("balance/refresh")
      })
      .catch(function (error) {
        context.commit("transactions/error", error)
      })
    }
  },
  getters: {
    transactions: state => {
      return state.list
    },
    transactionsReverse: state => {
      return state.list.reverse()
    },
    transaction: state => {
      return state.transaction
    }
  }
}
