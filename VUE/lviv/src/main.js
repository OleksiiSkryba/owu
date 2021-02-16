import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";

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

createApp(App)
  .use(router)
  .mount("#app");
