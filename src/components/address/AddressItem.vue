<template>

    <li class="border-0 list-group-item d-flex justify-content-between align-items-center">
      Address
      <span class="badge badge-warning badge-pill">{{ address.address }}</span>
    </li>

</template>

<script>
export default {
  name: 'AddressItem',
  props: {
    address: {}
  }
}
</script>
