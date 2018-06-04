<template>
<tr>
  <td>{{ date }}</td>
  <td>
    <!-- <i class="fas fa-link"></i> -->
    <span class="badge badge-warning">{{ transaction.to }}</span>
    &nbsp;&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;&nbsp;
    <span class="badge badge-primary">{{ transaction.from }}</span>
  </td>
  <td>+{{ transaction.amount }}<span class="badge badge-warning">AMA</span></td>
</tr>
</template>

<script>
export default {
  name: 'TransactionItem',
  props: {
    transaction: {}
  },
  computed: {
   date: function () {
     var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
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
