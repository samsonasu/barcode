const config = require('../config/firebase.config');
import firebase from 'firebase/app'
import firebaseui from 'firebaseui'
import 'firebase/firestore'
import 'firebase/auth'

const app = firebase.initializeApp(config.default);
const _db = firebase.firestore(app);
const _auth = firebase.auth();
const _ui = new firebaseui.auth.AuthUI(_auth);


export function db() {
  return _db;
}

export function ui() {
  return _ui;
}

export function auth() {
  return _auth;
}
export function currentUser() {
  return _auth.currentUser;
}

