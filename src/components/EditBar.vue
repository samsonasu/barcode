<template>
  <div class="edit-bar grid-x grid-padding-x">
    <header class="cell">Basic Info</header>
    <label class="medium-4 cell">Name:
      <input type="text" v-model="bar.name" />
    </label>
    <label class="medium-4 cell">Bar Style:
      <select v-model="bar.barStyle">
        <option>Flat</option>
        <option>Lipped</option>
      </select>
    </label>
    <label class="medium-4 cell">Vodka Soda Price:
      <input type="number" v-model="bar.vodkaPrice" />
    </label>
    <header class="cell">Wifi</header>
    <label class="medium-3 cell">Wifi Name:
      <input type="text" v-model="bar.wifiName" />
    </label>
    <label class="medium-3 cell">Wifi PW:
      <input type="text" v-model="bar.wifiPass" />
    </label>
    <label class="medium-3 cell">Wifi Secure:
      <select v-model="bar.wifiSecure">
        <option value="true">Secure</option>
        <option value="false">Open</option>
      </select>
    </label>
    <label class="medium-3 cell">Wifi Firewall:
      <select v-model="bar.wifiFirewall">
        <option value="true">Allows only http(s)</option>
        <option value="false">Allows all ports</option>
      </select>
    </label>

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
  header
    background: #ccc
    font-size: 12px
</style>

