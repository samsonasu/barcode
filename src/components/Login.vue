<template>
  <div>
    <a @click="login">Please Login</a>
    <div id="firebaseui-auth-container" class="reveal-modal"></div>
  </div>
</template>

<script>

  import { ui } from '@/services/Firebase';
  import firebase from 'firebase/app';
  import 'firebaseui/dist/firebaseui.css';

  export default {
    name: 'login',
    methods: {
      login: function () {
        ui().start('#firebaseui-auth-container', {
          callbacks: {
          signInSuccessWithAuthResult: function(authResult, _redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            // this.$router.replace('home');
            // eslint-disable-next-line
            debugger
            return false;
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
          signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID
          ]
        });

      //   const provider = new window.firebase.auth.GoogleAuthProvider();

      //   firebase.auth().signInWithPopup(provider).then((result) => {
      //
      //   }).catch((err) => {
      //     alert("Ruh Roh")
      //   })
      }
    }
  }


</script>

<style lang="sass" scoped>
  #firebaseui-auth-container
    background: white
    border: 3px solid black
    padding: 20px

</style>

