<template>
  <div class="col-lg-4 col-md-6 my-3">
    <div class="card">
      <div class="card-body">
        <h6 class="text-uppercase">Network</h6>
        <hr>
        <div class="content py-">
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center border-0">
              Consensus
              <span class="badge badge-success badge-pill">Established</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-0">
              Connected peers
              <span class="badge badge-primary badge-pill">3</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-0">
              Blockchain height
              <span class="badge badge-primary badge-pill">#56331</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-0">
              Global hashrate
              <span class="badge badge-primary badge-pill">657.56 MH/S</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Network',
  props: {
    network: String
  }
}
</script>
