<template>
  <div id="app">
    <Header/>
    <div class="container">
      <div class="row">
        <Transactions v-bind:transactions="transactions"/>
      </div>
      <div class="row">
        <Account account="Account info"/>
        <Network network="network info"/>
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
  data: () => {
    return{
      transactions: [
        {
            date  : 1526978053,
            from  : "1ZESFph9SyhaxLrL1va4Qjq7cKVbuTh3BXozVj",
            to    : "13nNUaNU1XHKbBvPNQXtFnbVbgbD3vfhf6LTts",
            amount: 10.0
        },
        {
            date  : 1526978053,
            from  : "1ZESFph9SyhaxLrL1va4Qjq7cKVbuTh3BXozVj",
            to    : "13nNUaNU1XHKbBvPNQXtFnbVbgbD3vfhf6LTts",
            amount: 10.0
        },
        {
            date  : 1526978053,
            from  : "1ZESFph9SyhaxLrL1va4Qjq7cKVbuTh3BXozVj",
            to    : "13nNUaNU1XHKbBvPNQXtFnbVbgbD3vfhf6LTts",
            amount: 10.0
        },
        {
            date  : 1526978053,
            from  : "1ZESFph9SyhaxLrL1va4Qjq7cKVbuTh3BXozVj",
            to    : "13nNUaNU1XHKbBvPNQXtFnbVbgbD3vfhf6LTts",
            amount: 10.0
        }
      ]
    }
  }
}
</script>
