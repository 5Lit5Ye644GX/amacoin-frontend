


<template>

  <div class="modal fade" id="receive-modal" tabindex="-1" role="dialog" aria-labelledby="receive-modalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Transaction request</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group row">
              <label for="send-from" class="col-sm-4 col-form-label">Your address : </label>
              <div class="col-sm-8">
                <input type="text" readonly class="form-control-plaintext" id="send-from" value="AMA015TUE5V8EU">
              </div>
            </div>
            <div class="form-group row">
              <label for="send-to" class="col-sm-4 col-form-label">Send to : </label>
              <div class="col-sm-8">
                <img src="/img/qrcode.svg" alt="" width="100px">
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
  name: 'ModalReceive',
}
</script>

<style media="screen" scoped>
.modal{

  color:#484849;

}
</style>
