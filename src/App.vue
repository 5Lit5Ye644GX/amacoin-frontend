<template>
  <div id="app">
    <Header/>
    <div class="container">
      <div class="row">
        <transactions v-bind:transactions="transactions" />
      </div>
      <div class="row">
        <account account="Account info"/>
        <network network="network info"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Transactions from './components/Transactions.vue'
import Account from './components/Account.vue'
import Network from './components/Network.vue'




export default {
  name: 'app',
  components: {
    Header,
    Transactions,
    Account,
    Network
  },
  mounted() {
    this.$store.dispatch("transactions/refresh")
  },
  computed: {
    transactions() {
      return this.$store.state.transactions.list
    }
  },
  methods:{

  }
  // computed: {
  //   transactions () {
  //     return store.state.transactions
  //   }
  // }
}



















</script>
