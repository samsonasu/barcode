<template>
  <div class="bar">
    <div v-if="!editing">
      <button class="button" @click="startEdit">Edit</button>
      <button class="button expand" @click="expanded=!expanded">
        {{expanded ? "Collapse" : "Expand"}}
      </button>
      <h2>{{bar.name}}</h2>
    </div>

    <div v-if="editing">
      <EditBar :bar="bar" :editing="editing" />
      <div class="cell">
        <button class="button alert" @click="cancelEdit">Cancel</button>
        <button class="button success" @click="save">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
  import EditBar from './EditBar.vue'
  import { Bar } from '../models/Bar.js'
  export default {
    name: 'Bar',
    components: {
      EditBar
    },
    data: function() {
      return {
        editing: this.bar.id == null || this.editing
      }
    },
    props: {
      bar: Object,
      expanded: Boolean
    },
    methods: {
      startEdit: function() {
        this._cachedBar = Object.assign({}, this.bar);
        this.editing = true;
      },
      cancelEdit: function() {
        Object.assign(this.bar, this._cachedBar);
        this.editing = false;
      },
      save: function() {
        new Bar(this.bar).persist()
        this.editing = false;
      }
    }
  }
</script>

<style lang="sass" scoped>
  .bar
    font-weight: bold
    background: #eee
    padding: 8px
    margin-bottom: 16px
  button
    margin: 8px
</style>
