<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <Buttons msg="Simple Slot Binding With Counter Program">
      <template v-slot:propsTest="{ count, addOne }">
        <p>{{ count }}</p>
        <button @click="addOne" class="Red">Add One</button>
      </template>
    </Buttons>
  </div>
</template>

<script>
import Buttons from "./components/Buttons.vue";
export default {
  name: "App",
  components: {
    Buttons
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.Red {
  width: 120px;
  height: 50px;
  margin: 50px;
  padding: 10px;
  background-color: red;
  text-align: center;
  cursor: pointer;
}
.Green {
  width: 120px;
  height: 50px;
  margin: 50px;
  padding: 10px;
  background-color: Green;
  text-align: center;
  cursor: pointer;
}
.Blue {
  width: 120px;
  height: 50px;
  margin: 50px;
  padding: 10px;
  background-color: blue;
  text-align: center;
  cursor: pointer;
}
</style>
