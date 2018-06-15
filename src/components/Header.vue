<template>
  <div>
    <header class="container-fluid" id="grad">
      <div class="container">
        <div class="d-flex">
          <div class="mr-auto p-2">
            <img src="/img/logo_amaris3.png" width="100px" alt="">
          </div>
          <div class="p-2">
            <ModalConnection id="buttonSetUp" btnId="setUpButton" datatarget="#buttonSetUp"/>
          </div>
          <div class="p-2">
            <div class="text-center">
              <a href="#" class="card-link btn btn-outline-secondary" @click="reloadTransactionItem()">Refresh <i class="fas fa-sync-alt"></i></a>
            </div>
          </div>
        </div>
        <Balance v-bind:balance="balance"/>
        <Menu/>
      </div>
    </header>
    <div class="d-flex justify-content-center d-block d-sm-none">
      <ModalReceive/>
      <ModalSend/>
    </div>
  </div>
</template>

<script>

import Balance from './Balance.vue'
import Menu from './Menu.vue'
import ModalReceive from './modal/Receive.vue'
import ModalSend from './modal/Send.vue'
import ModalConnection from './modal/Connection.vue'

export default {
  name: 'Header',
  components: {
    Menu,
    Balance,
    ModalReceive,
    ModalSend,
    ModalConnection
  },
  mounted() {
    this.$store.dispatch("balance/refresh")
  },
  computed: {
    balance() {
      return this.$store.state.balance.balance
    }
  },
  methods:{
    reloadTransactionItem(){
      this.$store.dispatch("transactions/refresh")
      this.$store.dispatch("balance/refresh")
      this.$store.dispatch("stats/refresh")
      this.$store.dispatch("addresses/refresh")
    }
  }
}
</script>

<style media="screen" scoped>
#grad {
  background: linear-gradient(to right,#F2AF64,#ef8b1b,#BC6D15);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  color:#fff;
  margin-bottom: 50px;
}

@media screen and (max-width: 575px) {
  #grad {
    margin-bottom: 25px;
  }
}
</style>
