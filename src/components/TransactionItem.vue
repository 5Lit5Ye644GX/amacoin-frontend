<template>

  <div class="d-flex justify-content-lg-between justify-content-md-center justify-content-sm-center justify-content-xs-center flex-wrap py-3">
    <div class="px-2">{{ date }}</div>
  <div class="d-flex flex-wrap">
    <div class="px-2">
      <span class="badge badge-warning">{{ transaction.to }}</span>
    </div>
    <div class="px-2">
      <i class="fas fa-arrow-right"></i>
    </div>
    <div class="px-2">
      <span class="badge badge-primary">{{ transaction.from }}</span>
    </div>
  </div>
    <div class="px-2">+{{ transaction.amount }}<span class="badge badge-warning">AMA</span></div>
  </div>

</template>

<script>
export default {
  name: 'TransactionItem',
  props: {
    transaction: {}
  },
  computed: {
    date: function () {
      var options = { month: 'long', day: 'numeric' };
      var date = new Date(this.transaction.date)
      return date.toLocaleDateString("lookup",options)
    }
  }
}
</script>
<style media="screen" scoped>

i{
  font-size: 15px !important;
}

</style>
