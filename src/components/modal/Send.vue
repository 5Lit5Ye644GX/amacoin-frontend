<template>
  <div>

    <b-btn v-b-modal.modalSend class="btn btn-send"></b-btn>
    <div class="btn-text">Send</div>
    <b-modal id="modalSend" ref="modal_send" centered title="New Transaction" :header-text-variant="dark" :body-text-variant="dark" @shown="setForm" @ok="handleOk" @cancel="handleCancel">
      <form @submit.stop.prevent="handleSubmit">
        <b-alert :show="dismissSendErrorCountDown" dismissible variant="danger" @dismissed="dismissSendErrorCountDown=0" @dismiss-count-down="countDownChanged">
          <p>{{form.error}}</p>
        </b-alert>

        <b-form-group label="Send from" label-for="address">
          <b-form-input id="from" readonly type="text" v-model="form.transaction.from" v-bind:value="form.transaction.from" required placeholder="Your address"></b-form-input>
        </b-form-group>

        <b-form-group label="Send to" label-for="address">
          <b-form-input id="to" type="text" list="send-to" v-model="form.transaction.to" v-bind:value="form.transaction.to" required placeholder="Delivry address"></b-form-input>
          <AddressesDatalist v-bind:addresses="addresses" id="send-to"></AddressesDatalist>
        </b-form-group>

        <b-form-group label="Amount" label-for="amount">
          <b-form-input id="amount" type="number" v-model.number="form.transaction.amount" v-bind:value="form.transaction.amount" required placeholder="Amount" step="0.01"></b-form-input>
        </b-form-group>
      </form>
    </b-modal>

  </div>
</template>

<script>

import AddressesDatalist from '../address/AddressesDatalist.vue'

export default {
  components:{
    AddressesDatalist
  },
  data () {
    return {
      form:{
        transaction:{
          to:"",
          from:"",
          amount: 0
        },
        error: ""
      },
      dark: "dark",
      dismissSecs: 10,
      dismissSendErrorCountDown: 0
    }
  },
  name: 'ModalSend',
  props: {
    datatarget: String,
    id: String
  },
  mounted(){
    var addr = this.$route.params.addr
    if(!this._.isEmpty(addr) && !this._.isUndefined(addr)){
      this.form.transaction.to = addr
      this.$refs.modal_send.show()
    }
  },
  computed: {
    addresses() {
      return this.$store.getters.addresses
    }
  },
  methods: {
    setForm(){
      this.form.transaction.from = this.$store.getters.address
    },
    handleOk (evt) {
      evt.preventDefault()
      if(this.form.transaction.to == "" || this.form.transaction.to == undefined || this.form.transaction.amount == 0 || this.form.transaction.amount == undefined){
        this.form.error = "The field as required"
        this.showAlert()
      }else{
        this.handleSubmit()
      }
    },
    handleSubmit () {
      this.$store.commit("transaction/set", this.form.transaction)
      this.$store.dispatch("transactions/send")

      this.form.transaction = { to:"", from:"", amount: 0 }
      this.$refs.modal_send.hide()
    },
    countDownChanged (dismissSendErrorCountDown) {
      this.dismissSendErrorCountDown = dismissSendErrorCountDown
    },
    showAlert () {
      this.dismissSendErrorCountDown = this.dismissSecs
    },
    handleCancel () {
      this.form.transaction = { to:"", from:"", amount: 0 }
    }
  }
}
</script>

<style media="screen" scoped>
.modal{
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
