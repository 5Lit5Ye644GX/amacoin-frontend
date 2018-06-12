import axios from "axios"
import settings from "../../settings"

export default {
  state:{
    error : "",
    list: []
  },
  mutations: {
    "addresses/set"(state, new_addresses) {
      state.list = new_addresses
    },
    "addresses/error"(state, new_addressesError) {
      state.error = new_addressesError
    }
  },
  actions: {
    "addresses/refresh"(context) {
      axios.get(settings.URL_API+'/addresses')
      .then((response) => {
        context.commit("addresses/set", response.data)
      })
      .catch(function (error) {
        context.commit("addresses/error", error)
      })
    }
  },
  getters: {
   addresses: state => {
     return state.list
   }
 }
}
