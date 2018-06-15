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
          <ul v-if="transactions.length > 0" class="list-group">
            <TransactionItem v-for="transaction in transactions" v-bind:transaction="transaction" v-bind:key="transaction.date"/>
          </ul>
          <NoTransaction v-if="transactions.length == 0"/>
        </div>
        <hr>
      </div>
    </div>
  </div>




</template>


<script>

import TransactionItem from './TransactionItem.vue'
import NoTransaction from './NoTransaction.vue'

export default {
  components:{
    TransactionItem,
    NoTransaction
  },
  name: 'Transactions',
  props: {
    error: String,
    transactions: Array
  }
}
</script>
