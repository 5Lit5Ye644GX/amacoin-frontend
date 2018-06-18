<template>
  <div id="app">
    <Header/>
    <div class="container">
      <div class="row">
        <transactions />
      </div>
      <div class="row">
        <Addresses/>
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
    this.$store.dispatch("balance/refresh")
  },
  computed: {
    stats() {
      return this.$store.getters.stats
    }
  },
  methods:{

  }
}



















</script>
