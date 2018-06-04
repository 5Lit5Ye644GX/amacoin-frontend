<template>
  <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center border-0">
    {{ stat.key }}
    <span class="badge badge-success badge-pill">{{ stat.value }}</span>
  </li>
</ul>
</template>
<script>
export default {
  name: 'StatItem',
  props: {
    stat: {}
  }
}
</script>
