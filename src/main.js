import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase";

Vue.config.productionTip = false

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWKFqvRqURJ_8jJzINfYiewiecL2qYfcg",
  authDomain: "sugar-media-613b3.firebaseapp.com",
  databaseURL: "https://sugar-media-613b3.firebaseio.com",
  projectId: "sugar-media-613b3",
  storageBucket: "sugar-media-613b3.appspot.com",
  messagingSenderId: "1077926219288",
  appId: "1:1077926219288:web:f82bf6c9536b47bfc2bd6d",
  measurementId: "G-FHTTWJ5PRN"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
