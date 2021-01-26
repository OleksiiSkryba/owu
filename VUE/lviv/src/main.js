import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "YourConfigHere",
  authDomain: "YourConfigHere",
  projectId: "YourConfigHere",
  storageBucket: "YourConfigHere",
  messagingSenderId: "YourConfigHere",
  appId: "YourConfigHere"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
