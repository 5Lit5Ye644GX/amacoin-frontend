import axios from "axios"

const URL_API = "http://145.239.59.99:8080"
export default {
  state:{
    error : "",
    list: []
  },
  mutations: {
    "transactions/set"(state, new_transactions) {
      state.list = new_transactions
    }
  },
  actions: {
    "transactions/refresh"(context) {
      axios.get(URL_API+'/transactions')
      .then((response) => {
        context.commit("transactions/set", response.data)
      })
      .catch(function (error) {
        //console.log(error)
        //this.error = error
      })
    }
  }
}
