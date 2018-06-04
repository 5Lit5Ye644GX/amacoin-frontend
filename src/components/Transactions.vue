<template>
  <div class="col-12 my-3">
    <div class="card">

      <div class="card-body">
        <h6 class="text-uppercase">Recent transactions !</h6>

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
          <table class="table text-left" v-if="transactions">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Transactions</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <transaction-item v-for="transaction in transactions" v-bind:transaction="transaction"/>
            </tbody>
          </table>
        </div>
        <hr>
        <div class="text-center">
          <a href="#" class="card-link btn btn-dark" @click="reloadTransactionItem()">Refresh <i class="fas fa-sync-alt"></i></a>
        </div>
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
  },
  methods: {
    reloadTransactionItem(){
      this.$store.dispatch("transactions/refresh")
    }
  }
}
</script>
