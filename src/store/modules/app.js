export default {
  state:{
    address: "",
    privateKey: ""
  },
  mutations: {
    "app/address"(state, address) {
      localStorage.setItem("address",address)
      state.address = address
    },
    "app/privateKey"(state, privateKey) {
      localStorage.setItem("privateKey",privateKey)
      state.privateKey = privateKey
    }
  },
  actions: {
    "app/refresh"(context) {
      context.commit("app/address", localStorage.getItem("address"))
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
