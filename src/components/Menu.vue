
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

      <div class="" style="height: 40px;">
        <button class="btn btn-receive" type="submit" data-toggle="modal" data-target="#receive-modal"></button>
        <div class="btn-text">Receive</div>
      </div>

      <div class="" style="height: 40px;">
        <button class="btn btn-send" type="submit" data-toggle="modal" data-target="#send-modal"></button>
        <div class="btn-text">Send</div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
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
.btn-receive,
.btn-send{
  border: 1px solid transparent;
  width: 60px !important;
  height: 60px !important;
  border-radius: 50%;
  background-color: white;
  background-position: center !important;
  background-repeat: no-repeat !important;
  margin-left: 5px;
  margin-right: 5px;
  background-size: 25px;
  position: relative;
  padding: 0;
  min-height: 0;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.2), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
.btn-receive{
  background-image: url(/img/arrow-down.svg);
}
.btn-send{
  background-image: url(/img/arrow-up.svg);
}

.btn-text{
  text-align: center;
  color:#494948;
  margin: 5px 0;
}

</style>
