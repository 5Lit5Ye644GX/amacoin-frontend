import axios from "axios"
import settings from "../../settings"

export default {
  state:{
    error : "",
    list: []
  },
  mutations: {
    "stats/set"(state, new_stats) {
      state.list = new_stats
    },
    "stats/error"(state, new_statsError) {
      state.error = new_statsError
    }
  },
  actions: {
    "stats/refresh"(context) {
      axios.get(settings.URL_API+'/stats')
      .then((response) => {
        context.commit("stats/set", response.data)
      })
      .catch(function (error) {
        context.commit("stats/error", error)
      })
    }
  },
  getters: {
   stats: state => {
     return state.list
   }
 }
}
