<template>
  <div id="app">
    <Header/>
    <div class="container">
      <div class="row">
        <transactions v-bind:transactions="transactions" />
      </div>
      <div class="row">
        <Addresses v-bind:addresses="addresses"/>
        <Stats v-bind:stats="stats"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Transactions from './transaction/Transactions.vue'
import Addresses from './address/Addresses.vue'
import Stats from './stat/Stats.vue'




export default {
  name: 'App',
  components: {
    Header,
    Transactions,
    Addresses,
    Stats
  },
  mounted() {
    this.$store.dispatch("transactions/refresh")
    this.$store.dispatch("stats/refresh")
    this.$store.dispatch("addresses/refresh")
    this.$store.dispatch("app/refresh")


    var addrPrivateKey = this.$route.params.addrPrivateKey

    var addr = localStorage.getItem('addr')
    var privateKey = localStorage.getItem('privateKey')

    if(addrPrivateKey != "" && addrPrivateKey != undefined){
      this.setAddrAndPrivateKeyInLocalStorage(addrPrivateKey)
    }else if(addr != null && addr != "" && privateKey != null && privateKey != ""){

    }else{
      // console.log("toto")
      // document.getElementById("setUpButton").click(); // Click on the checkbox
    }




    if (addr == "" || addr == undefined && privateKey == "" || privateKey == undefined){
      this.setAddrAndPrivateKeyInLocalStorage()
    }

  },
  computed: {
    transactions() {
      return this.$store.getters.transactions
    },
    stats() {
      return this.$store.getters.stats
    },
    addresses() {
      return this.$store.getters.addresses
    }
  },
  methods:{
    setAddrAndPrivateKeyInLocalStorage(addrPrivateKey){
      if (addrPrivateKey != null || addrPrivateKey != undefined){
        localStorage.setItem('addr', addrPrivateKey.split("$")[0])
        localStorage.setItem('privateKey', addrPrivateKey.split("$")[1])
      }
    }
  }
}



















</script>
