<template>
  <div class="edit-bar grid-x grid-padding-x">
    <div class="medium-6 cell">
      <label>Name:
        <input type="text" v-model="bar.name" />
      </label>
    </div>
    <div class="medium-6 cell">
      <label>Bar Style:
        <select v-model="bar.style">
          <option>Flat</option>
          <option>Lipped</option>
        </select>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EditBar',
    props: {
      bar: Object
    }
  }
</script>

<style lang="sass" scoped>
  .bar
    font-weight: bold
    color: red
</style>

