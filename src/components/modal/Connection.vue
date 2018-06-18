<template>
  <div>
    <b-btn v-b-modal.modalPrevent>Setup</b-btn>
    <b-modal id="modalPrevent" ref="modal_connection" centered title="Connection setup" :header-text-variant="dark" :body-text-variant="dark" @shown="setForm" @ok="handleOk">
      <form @submit.stop.prevent="handleSubmit">
        <b-alert :show="dismissCountDown" dismissible variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
          <p>{{form.error}}</p>
        </b-alert>

        <b-form-group label="Your address : " label-for="address">
          <b-form-input id="address" type="email" v-model="form.address" v-bind:value="address" required placeholder="Enter your address"></b-form-input>
        </b-form-group>

        <b-form-group label="Your private key : " label-for="privateKey">
          <b-form-input id="privateKey" type="text" v-model="form.privateKey" v-bind:value="privateKey" required placeholder="Enter private key"></b-form-input>
        </b-form-group>
      </form>


      <!-- <VueQrcodeReader @decode="onDecode"></VueQrcodeReader> -->


    </b-modal>
  </div>
</template>

<script>
import VueQrcodeReader from 'vue-qrcode-reader'
export default {
  components:{
    VueQrcodeReader
  },
  name: 'ModalConnection',
  props: {
    datatarget: String,
    id: String,
    btnId: String
  },
  computed:{
    address(){
      return this.$store.getters.address
    },
    privateKey(){
      return this.$store.getters.privateKey
    }
  },
  data () {
    return {
      form:{
        address:"",
        privateKey:"",
        error: ""
      },
      dark: "dark",
      dismissSecs: 10,
      dismissCountDown: 0
    }
  },
  mounted(){
    var addrPrivateKey = this.$route.params.addrPrivateKey

    var addr = localStorage.getItem('address')
    var privateKey = localStorage.getItem('privateKey')

    if(!this._.isEmpty(addrPrivateKey) && !this._.isUndefined(addrPrivateKey)){
      this.setAddrAndPrivateKeyInLocalStorage(addrPrivateKey)
    }else if(addr != null && addr != "" && privateKey != null && privateKey != ""){

    }else{
      this.$refs.modal_connection.show()
    }
  },
  methods: {
    setAddrAndPrivateKeyInLocalStorage(addrPrivateKey){
      if (addrPrivateKey != null || addrPrivateKey != undefined){
        this.$store.commit("app/address", addrPrivateKey.split("$")[0])
        this.$store.commit("app/privateKey", addrPrivateKey.split("$")[1])
      }
    },
    setForm(){
      this.form.address = this.$store.getters.address
      this.form.privateKey = this.$store.getters.privateKey
    },
    handleOk (evt) {
      evt.preventDefault()
      if(this.form.address == "" || this.form.address == undefined || this.form.privateKey == "" || this.form.privateKey == undefined){
        this.form.error = "The field as required"
        this.showAlert()
      }else{
        this.handleSubmit()
      }
    },
    handleSubmit () {
      this.$store.commit("app/address", this.form.address)
      this.$store.commit("app/privateKey", this.form.privateKey)

      this.$refs.modal_connection.hide()
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<style media="screen" scoped>
header{
  color:#484849;
}
.btn-qrcode{
  border: 1px solid transparent;
  width: 40px !important;
  height: 40px !important;
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
  background-image: url(/img/qrcode.svg);
}
label{
  /* text-transform: uppercase; */
}



</style>
