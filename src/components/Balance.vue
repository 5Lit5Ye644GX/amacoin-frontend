<template>
  <div class="col-12 text-center py-5 text-uppercase">
    <h5 class="w-100">total balance</h5>
    <h1 class="w-100">{{ balance }}&nbsp;<img src='/img/amaCoinLogoWhite.png' width="35px"></h1>
  </div>
</template>

<script>
export default {
  name: 'Balance',
  props: {
    balance: Number
  },
}
</script>

<style media="screen" scoped>
img{
    margin-top: -8px;
}
</style>
