<template>
  <div>
    <button class="btn btn-send" type="submit" data-toggle="modal" data-target="#send-modal"></button>
    <div class="btn-text">Send</div>
  </div>
</template>

<script>
export default {
  name: 'ButtonSend'
}
</script>

<style media="screen" scoped>
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
.btn-send{
  background-image: url(/img/arrow-up.svg);
}

@media screen and (max-width: 575px) {
  .btn-send{
    width: 100px !important;
    height: 50px !important;
    border-radius: 50px;
  }
}

.btn-text{
  text-align: center;
  color:#494948;
  margin: 5px 0;
}
</style>
