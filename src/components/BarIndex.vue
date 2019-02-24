<template>
  <div class="bar-index">
    <Bar v-for="bar in bars" :key="bar.id" v-bind:bar="bar" />
    <button class="button success ">Add a Bar</button>
  </div>
</template>

<script>
import Bar from './Bar.vue'

export default {
  name: 'BarIndex',
  components: {
    Bar
  },
  props: {
    bars: Array
  }
}
</script>

<style lang="sass" scoped>
  .bar-index
    min-height: 100px
</style>

