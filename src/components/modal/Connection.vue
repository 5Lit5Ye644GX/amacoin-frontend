


<template>

  <div>

    <b-button @click="showModal">Set up</b-button>


    <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
          <div class="d-block text-center">
            <h3>Hello From My Modal!</h3>
          </div>
          <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
        </b-modal>



    <button class="btn btn-primary" type="submit" v-bind:btnId="btnId" data-toggle="modal" v-bind:data-target="datatarget">Set up</button>
    <div class="modal fade" v-bind:id="id" tabindex="-1" role="dialog" aria-labelledby="receive-modalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="send-modal-title">Connection</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">




            <b-form v-if="show">

              <b-form-group label="Your address : " label-for="address">
                <b-form-input id="address" type="email" v-model="form.address" v-bind:value="address" required placeholder="Enter your address"></b-form-input>
              </b-form-group>

              <b-form-group label="Your private key : " label-for="privateKey">
                <b-form-input id="privateKey" type="text" v-model="form.privateKey" v-bind:value="privateKey" required placeholder="Enter private key"></b-form-input>
              </b-form-group>



            </b-form>

          </div>
          <div class="modal-footer">
            <b-button @click="onSubmit" type="submit" variant="primary">Submit</b-button>
            <b-button @click="onReset" type="reset" variant="danger">Reset</b-button>
            <b-button class="btn btn-qrcode" @click="openQrReader" type="button"></b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
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
        privateKey:""
      },
      show: true
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form.address)
    },
    onReset () {
      console.log(this.form.privateKey)
    },
    openQrReader (){
    },
    showModal () {
      this.$refs.myModalRef.show()
    },
    hideModal () {
      this.$refs.myModalRef.hide()
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



</style>
