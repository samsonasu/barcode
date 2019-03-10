<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <div class="login-state">
        <div v-if="currentUser">
          Welcome, {{currentUser.displayName}}
          <a @click="logout">Logout</a>
        </div>
        <Login v-if="!currentUser">Login</Login>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import { fbUser } from '@/services/Firebase'
import { auth } from '@/services/Firebase'

export default {
  name: 'app',
  components: {
    Login
  },
  data: function() {
    return {
      currentUser: null
    }
  },
  created() {
    //esline-disable-next-line
    let me = this;
    auth().onAuthStateChanged(function(user) {
      me.currentUser = user;
    });
  },
  methods: {
    logout() {
      auth().signOut();
    }
  }
}

</script>

<style lang="sass" scoped>
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50
  .login-state
    float: right
  #nav
    background: #eee
    padding: 8px

</style>
