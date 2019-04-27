<template>
  <div class="bar-index">
    <BarVue v-for="bar in bars" :key="bar.id" v-bind:bar="bar" />
    <button class="button success" @click="addBar">Add a Bar</button>
  </div>
</template>

<script>
import BarVue from '@/components/Bar.vue'
import { Bar } from '@/models/Bar.js'

export default {
  name: 'BarIndex',
  components: {
    BarVue
  },
  props: {
    bars: Array
  },
  methods: {
    addBar: function() {
      this.bars.push(new Bar({name: "New Bar"}).data)
    }
  }
}
</script>

<style lang="sass" scoped>
  .bar-index
    min-height: 100px
</style>
