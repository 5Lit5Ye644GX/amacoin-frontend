<template>

    <li class="border-0 list-group-item d-flex justify-content-between align-items-center">
      Address
      <span :class="{'badge badge-info badge-pill': myaddress === address, 
      'badge badge-light badge-pill': myaddress !== address }">
        <span class="d-lg-none">{{ addressSlice }}</span>
        <span class="d-none d-lg-block">{{ address }}</span>
      </span>
    </li>

</template>

<script>
export default {
  name: 'AddressItem',
  props: {
    address: {}
  },
  computed: {
    myaddress(){
      return this.$store.getters.address
    },
    addressSlice() {
      return `${this.address.slice(0,10)}...`
    }
  }
}
</script>
