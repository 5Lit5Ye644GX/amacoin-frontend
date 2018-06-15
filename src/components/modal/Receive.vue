<template>
  <div>
    <b-btn v-b-modal.modalReceive class="btn btn-receive"></b-btn>
    <div class="btn-text">Receive</div>
    <b-modal id="modalReceive" ref="modal_receive" centered title="Connection setup" :header-text-variant="dark" :body-text-variant="dark" @shown="setForm" @ok="handleOk">
      <form @submit.stop.prevent="handleSubmit" class="text-center">
  <h4><b-badge>{{address}}</b-badge></h4>
        <Qrcode :value="address" :options="qrcode_options"/>
      </form>
    </b-modal>
  </div>
</template>

<script>
import Qrcode from '@xkeshi/vue-qrcode'
export default {
  components:{
    Qrcode
  },
  name: 'ModalReceive',
  props: {
    datatarget: String,
    id: String
  },
  computed:{
    address(){
      return this.$store.getters.address
    },
  },
  data () {
    return {
      qrcode_options:{
        size:200,
        foreground: "#ef8b1b"
      },
      form:{
        address:"",
        error: ""
      },
      dark: "dark",
      dismissSecs: 10,
      dismissSendErrorCountDown: 0
    }
  },
  methods: {
    setForm(){
      this.form.address = this.$store.getters.address
    },
    handleOk (evt) {
      evt.preventDefault()
    },
    handleSubmit () {
      this.$refs.modal_receive.hide()
    },
    handleCancel () {
    }
  }
}
</script>

<style media="screen" scoped>
.modal{
  color:#484849;
}
.btn-receive{
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
@media screen and (max-width: 575px) {
  .btn-receive{
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
