
<template>
  <div class="">
    <nav class="d-flex">
      <div class="mr-auto">
        <ul class="nav">
          <li class="nav-item active">
            <a class="" href="#">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="" target="_blank" href="http://blockchain.amaris.com">About us</a>
          </li>
        </ul>
      </div>
      <div class="d-none d-sm-block">
        <div class="d-flex" style="height:40px;">
          <ButtonReceive/>
          <ButtonSend/>
        </div>
      </div>

    </nav>

  </div>
</template>


<script>

import ButtonReceive from './buttons/Receive.vue'
import ButtonSend from './buttons/Send.vue'

export default {
  components: {
    ButtonReceive,
    ButtonSend
  },
  name: 'Menu',
  props: {
    menu: String
  },
}
</script>

<style media="screen" scoped>
.nav a{
  text-transform: uppercase;
  color:#FFF;
  font-weight: lighter;
  text-decoration: none;
}
.nav li{
  padding: 0px 25px 0px 0;
}
.nav li a{
  padding: 15px 0;
}
.nav li.active a{
  border-bottom: 4px solid #FFF;
}


@media screen and (max-width: 575px) {
  .nav{
    padding: 15px 0;
  }
}


</style>
