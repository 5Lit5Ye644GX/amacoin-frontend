<template>
  <header class="container-fluid" id="grad">
    <div class="container">
      <div class="col-12 py-2">
        <img src="/img/logo_amaris3.png" width="100px" alt="">
      </div>
      <Balance v-bind:balance="balance"/>
      <Menu/>
      <Receive/>
      <Send/>
    </div>
  </header>
</template>

<script>

import Balance from './Balance.vue'
import Menu from './Menu.vue'
import Receive from './modal/Receive.vue'
import Send from './modal/Send.vue'

export default {
  name: 'Header',
  components: {
    Menu,
    Balance,
    Receive,
    Send
  },
  mounted() {
    this.$store.dispatch("balance/refresh")
  },
  computed: {
    balance() {
      return this.$store.state.balance.balance
    }
  }
}
</script>
