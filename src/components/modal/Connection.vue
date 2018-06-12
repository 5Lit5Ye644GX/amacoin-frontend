


<template>

  <div>
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
            <form>
              <div class="form-group row">
                <label for="send-from" class="col-sm-4 col-form-label">Your address : </label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" :value="address" id="send-from" placeholder="Enter your address here">
                </div>
              </div>
              <div class="form-group row">
                <label for="send-to" class="col-sm-4 col-form-label">Your private key : </label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" :value="privateKey" placeholder="Enter your private key here">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button class="btn btn-qrcode" type="submit"></button>
            <button type="button" class="btn btn-amaris">Send</button>
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
