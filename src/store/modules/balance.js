import axios from "axios"
import settings from "../../settings"



export default {
  state:{
    error : "",
    balance: 0
  },
  mutations: {
    "balance/set"(state, new_balance) {
      state.balance = new_balance
    },
    "balance/error"(state, new_balanceError) {
      state.error = new_balanceError
    }
  },
  actions: {
    "balance/refresh"(context) {
      var address = localStorage.getItem("address")
      var privateKey = localStorage.getItem("privateKey")
      axios.get(settings.URL_API+'/balance',{ 'headers': { 'Authorization': address + "$" + privateKey } })
      .then((response) => {
        context.commit("balance/set", response.data.balance)
      })
      .catch(function (error) {
        context.commit("balance/error", error)
      })
    }
  }
}
