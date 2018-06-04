<template>
  <div class="col-12 my-3">
    <div class="card">

      <div class="card-body">
        <h6 class="text-uppercase">Recent transactions !</h6>
        <hr>
        <div class="row" v-if="error">
          <div class="alert alert-danger" role="alert">
            {{error}}
          </div>
        </div>
        <div class="content">

          <div v-if="!transactions">
            <hr>
            <i class="fas fa-exchange-alt my-1"></i>
            <br>
            <span>You have no transactions yet</span>
          </div>
          <transaction-item  v-for="transaction in transactions" v-bind:transaction="transaction"/>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>


<script>

import TransactionItem from './TransactionItem.vue'

export default {
  components:{
    TransactionItem
  },
  name: 'Transactions',
  props: {
    error: String,
    transactions: Array
  }
}
</script>
