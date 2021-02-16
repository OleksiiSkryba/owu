<template>
  <div class="home">
    <div>
      <form @submit.prevent="login">
        <h2>Login</h2>
        <input type="email" placeholder="Email address..." v-model="email" />
        <input type="password" placeholder="password..." v-model="password" />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return { email: "", password: "" };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Successfully logged in");
          this.$router.push("/dashboard");
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>
