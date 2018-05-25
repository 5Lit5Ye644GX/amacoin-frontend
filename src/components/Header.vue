<template>
  <header class="container-fluid" id="grad">
    <div class="container">
      <div class="col-12">
        <img src="/img/logo_amaris3.png" width="100px" alt="">
      </div>
      <Balance balance="0,0"/>
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
  props: {
    balance: String
  },
  components: {
    Menu,
    Balance,
    Receive,
    Send
  }
}
</script>
