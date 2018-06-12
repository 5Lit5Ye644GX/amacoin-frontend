import settings from "../../settings"

export default {
  state:{
    address: "",
    privateKey: ""
  },
  mutations: {
    "app/address"(state, address) {
      state.address = address
    },
    "app/privateKey"(state, privateKey) {
      state.privateKey = privateKey
    }
  },
  actions: {
    "app/refresh"(context) {
      context.commit("app/address", localStorage.getItem("addr"))
      context.commit("app/privateKey", localStorage.getItem("privateKey"))
    }
  },
  getters: {
   address: state => {
     return state.address
   },
   privateKey: state => {
     return state.privateKey
   }
 }
}
