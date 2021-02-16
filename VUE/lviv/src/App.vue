<template>
  <div>
    <notifications></notifications>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import firebase from "firebase";
//css assets
import "@/layout/style.css";
export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Successfully logged out");
          this.$router.push("/");
        })
        .catch(error => {
          alert(error.message);
          this.$router.push("/");
        });
      console.log("Logout");
    }
  }
};
</script>

<style></style>
