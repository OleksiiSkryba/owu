import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import firebase from "firebase";
// // Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// // If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// // import * as firebase from "firebase/app"

// // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFmJI-hC4NPQtwJCkUp6CICPzrLu7xKlc",
  authDomain: "web-lviv.firebaseapp.com",
  projectId: "web-lviv",
  storageBucket: "web-lviv.appspot.com",
  messagingSenderId: "65083378190",
  appId: "1:65083378190:web:646339bd62ddac2c100a5f",
  measurementId: "G-B9LN0Z49RR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
