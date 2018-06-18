<template>
<li class="list-group-item border-0">
  <div class="d-flex justify-content-lg-between justify-content-md-center justify-content-sm-center justify-content-xs-center flex-wrap py-3">
    <div class="px-2">{{ date }}</div>
  <div class="d-flex flex-wrap">
    <div class="px-2">
      <span v-bind:class="{'badge badge-warning': transaction.from == address, 'badge badge-primary': transaction.from != address }">
        <span class="d-lg-none">{{ toSlice }}</span>
        <span class="d-none d-lg-block">{{transaction.to}}</span>
      </span>
    </div>
    <div class="px-2">
      <i class="fas fa-arrow-right"></i>
    </div>
    <div class="px-2">
      <span v-bind:class="{'badge badge-primary': transaction.from == address, 'badge badge-warning': transaction.from != address }">
        <span class="d-lg-none">{{ fromSlice }}</span>
        <span class="d-none d-lg-block">{{transaction.from}}</span>
      </span>
    </div>
  </div>
    <div class="px-2">{{ transaction.amount }}&nbsp;<img src='/img/amaCoinLogo.png' width="20px"></div>
  </div>
</li>
</template>

<script>
export default {
  name: 'TransactionItem',
  props: {
    transaction: {}
  },
  computed: {
    date() {
      var options = { month: 'long', day: 'numeric' }
      var date = new Date(this.transaction.date * 1000)
      return date.toLocaleDateString("lookup",options)
    },
      address(){
        return this.$store.getters.address
      },
      toSlice() {
        return `${this.transaction.to.slice(0,10)}...`
      },
      fromSlice() {
        return `${this.transaction.from.slice(0,10)}...`
      }
  }
}
</script>
<style media="screen" scoped>

i{
  font-size: 15px !important;
}

</style>
