<template>
  <div id="home">
    <div alt="Barcode Today!" class="header">
      <div class="creep" />
      <h1>Barcode Today!</h1>
    </div>
    <p>Barcoding is the latest rage among all the cool tech hipsters!
      Why work from a coffee shop or <span class="gasp">*gasp*</span> from
      an office when you can work from a bar!
    <div v-if="!loading">
      <h2 style="clear: both;">
        Here's all the bars I know about:
      </h2>
      <BarIndex v-bind:bars="bars" />
    </div>
    <div class="loading" v-if="loading"><i class="fa fa-spinner fa-spin"/>Loading...</div>
  </div>
</template>

<script>

import BarIndex from '@/components/BarIndex.vue'
import { Bar } from '@/models/Bar'
import { db } from '@/services/Firebase'

export default {
  name: 'home',
  components: {
    BarIndex
  },
  data: function() {
    return {
      bars: [],
      loading: true
    }
  },
  created: function() {
    // const app = window.firebase.initializeApp(firebaseConfig.default);
    // const db = window.firebase.firestore(app);
    const vue = this;
    db().collection("Bar").get().then(function(results) {
      results.forEach(function(bar) {
        vue.bars.push(Bar.fromFirebase(bar).data)
        vue.loading = false;
      });
    })
  }
}

</script>

<style lang="sass">
  .creep
    float: left
    height: 200px
    width: 200px
    border-radius: 50%
    background-image: url('../assets/barcode-creepy.jpg')
    background-size: 100%
    margin: 20px
  .gasp
    font-style: italic

  .loading
    clear: both
    text-align: center
    font-size: 60px
</style>
