<template>
  <div class="col-lg-8 col-md-6 my-3">
    <div class="card">
      <div class="card-body">
        <h6 class="text-uppercase">Your address account</h6>
        <hr>
        <div class="content">
          <i class="fas fa-user-circle"></i>
          <br>
          <span>You are not account yet</span>
        </div>
        <hr>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Account',
  props: {
    account: String
  }
}
</script>
