<template>
  <div class="modal fade" id="send-modal" tabindex="-1" role="dialog" aria-labelledby="receive-modalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="send-modal-title">New transaction</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group row">
              <label for="send-from" class="col-sm-4 col-form-label">Send from : </label>
              <div class="col-sm-8">
                <input type="text" readonly class="form-control-plaintext" id="send-from" value="AMA015TUE5V8EU">
              </div>
            </div>
            <div class="form-group row">
              <label for="send-to" class="col-sm-4 col-form-label">Send to : </label>
              <div class="col-sm-6">
                <input type="text" class="form-control" id="send-to" placeholder="AMA0.....">
              </div>
              <div class="col-sm-2">
                <button class="btn btn-qrcode" type="submit"></button>
              </div>
            </div>
            <div class="form-group row">
              <label for="amount" class="col-sm-4 col-form-label">Amount : </label>
              <div class="col-sm-6">
                <input type="number" class="form-control" id="amount" placeholder="0.00">
              </div>
              <div class="col-sm-2 text-center py-1">
                <small class="text-muted">AMA</small>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-amaris">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalSend'
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
