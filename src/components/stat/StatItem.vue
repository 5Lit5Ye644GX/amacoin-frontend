<template>

  <li class="border-0 list-group-item d-flex justify-content-between align-items-center">
    {{ stat.key }}
    <span class="badge badge-success badge-pill">{{ stat.value }}</span>
  </li>

</template>
<script>
export default {
  name: 'StatItem',
  props: {
    stat: {}
  }
}
</script>
