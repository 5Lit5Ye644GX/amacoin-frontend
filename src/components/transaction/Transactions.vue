<template>
  <div class="col-12 my-3">
    <div class="card">
      <div class="card-body">
        <h6 class="text-uppercase">Recent transactions</h6>
        <hr>
        <div class="row" v-if="error">
          <div class="alert alert-danger" role="alert">
            {{ error }}
          </div>
        </div>
        <div class="content">
          <ul v-if="transactions.length > 0" class="list-group">
            <TransactionItem v-for="transaction in transactions" :transaction="transaction" :key="transaction.date"/>
          </ul>
          <b-pagination v-if="totalPagination > pagination.per_page" 
            :hide-goto-end-buttons="this.pagination.hideEndButton" size="md" align="center"
            @change="nextPage" :total-rows="totalPagination" v-model="pagination.current_page" 
            :per-page="pagination.per_page"></b-pagination>
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
    error: String
  },
  computed:{
    totalPagination() {
      return this.$store.getters.transactionsReverse.length
    },
    transactions() {
      return this.$store.getters.transactionsReverse.slice(this.pagination.to,this.pagination.from)
    },
  },
  data () {
    return {
      pagination:{
        per_page: 4,    // required
        current_page: 1, // required
        last_page: 0,   // required
        to:0,
        from:4,
        hideEndButton:true
      }
    }
  },
  methods:{
    nextPage(nextPage){
      if(nextPage > this.pagination.current_page){
        this.pagination.to = this.pagination.from
        this.pagination.from = this.pagination.from + this.pagination.per_page
      }else{
        this.pagination.to = this.pagination.to - this.pagination.per_page
        this.pagination.from = this.pagination.from - this.pagination.per_page
      }
    }
  }
}
</script>
