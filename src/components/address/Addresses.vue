<template>
  <div class="col-lg-8 col-md-6 my-3">
    <div class="card">
      <div class="card-body">
        <h6 class="text-uppercase">Addresses</h6>
        <hr>
        <div class="content">
          <ul v-if="addresses.length > 0" class="list-group">
            <AddressItem v-for="address in addresses" :address="address" :key="address.address"/>
          </ul>
          <b-pagination v-if="totalPagination > pagination.per_page" 
            :hide-goto-end-buttons="this.pagination.hideEndButton" size="md" align="center" 
            @change="nextPage" :total-rows="totalPagination" v-model="pagination.current_page" 
            :per-page="pagination.per_page"></b-pagination>
          <NoAddress v-if="addresses.length == 0"/>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>


<script>

import NoAddress from './NoAddress.vue'
import AddressItem from './AddressItem.vue'

export default {
  components:{
    AddressItem,
    NoAddress
  },
  name: 'Addresses',
  props: {
    error: String
  },
  computed:{
    totalPagination() {
      return this.$store.getters.addresses.length
    },
    addresses() {
      return this.$store.getters.addresses.slice(this.pagination.to,this.pagination.from)
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
