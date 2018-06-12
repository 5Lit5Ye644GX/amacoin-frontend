<template>
  <div class="col-lg-8 col-md-6 my-3">
    <div class="card">
      <div class="card-body">
        <h6 class="text-uppercase">Addresses</h6>
        <hr>
        <div class="content">

          <ul v-if="addresses" class="list-group">
            <AddressItem v-for="address in addresses" v-bind:address="address" v-bind:key="address.address"/>
          </ul>
          <NoAddress v-else/>
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
    error: String,
    addresses: Array
  }
}
</script>
