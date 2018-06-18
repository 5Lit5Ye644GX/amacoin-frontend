<template>

    <li class="border-0 list-group-item d-flex justify-content-between align-items-center">
      Address
      <span class="badge badge-warning badge-pill">
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
    addressSlice() {
      return `${this.address.slice(0,10)}...`
    }
  }
}
</script>
