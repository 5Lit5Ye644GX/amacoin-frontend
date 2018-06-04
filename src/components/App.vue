<template>
  <div id="app">
    <Header/>
    <div class="container">
      <div class="row">
        <transactions v-bind:transactions="transactions" />
      </div>
      <div class="row">
        <account account="Account info"/>
        <stats v-bind:stats="stats"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Transactions from './Transactions.vue'
import Account from './Account.vue'
import Stats from './Stats.vue'




export default {
  name: 'app',
  components: {
    Header,
    Transactions,
    Account,
    Stats
  },
  mounted() {
    this.$store.dispatch("transactions/refresh"),
    this.$store.dispatch("stats/refresh")
  },
  computed: {
    transactions() {
      return this.$store.getters.transactions
    },
    stats() {
      return this.$store.getters.stats
    }
  },
  methods:{

  }
}



















</script>
