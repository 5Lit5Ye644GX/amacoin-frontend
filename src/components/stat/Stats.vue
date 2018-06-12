<template>
  <div class="col-lg-4 col-md-6 my-3">
    <div class="card">
      <div class="card-body">
        <h6 class="text-uppercase">Network</h6>
        <hr>
        <div class="content py-">
          <ul class="list-group">
<stat-item v-for="stat in stats" v-bind:stat="stat" v-bind:key="stat.key"/>
</ul>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import StatItem from './StatItem.vue'

export default {
  components:{
    StatItem
  },
  name: 'Stats',
  props: {
    stats: Array
  }
}
</script>
