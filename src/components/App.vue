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
    this.$store.dispatch("app/refresh")
    this.$store.dispatch("stats/refresh")
    this.$store.dispatch("transactions/refresh")
    this.$store.dispatch("addresses/refresh")
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

  }
}



















</script>
