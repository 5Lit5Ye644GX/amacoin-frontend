<template>
  <datalist v-bind:id="id">
    <option v-for="address in addresses" v-bind:key="address.address">{{ address }}</option>
  </datalist>
</template>


<script>
export default {
  name: 'AddressesDatalist',
  props: {
    addresses: Array,
    id: String
  }
}
</script>
