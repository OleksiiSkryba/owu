<template>
  <header class="logo">
    <Burger />
    <!-- <Search />
    <Loginform /> -->
    <!-- <h1>{{ title }}</h1> -->
    <span class="right">
      <h2>{{ title }}</h2>
    </span>
  </header>
</template>

<script>
import Burger from "./SidenavButton.vue";
// import Loginform from "./LoginForm.vue";
// import Search from "./Search.vue";
export default {
  components: {
    // Loginform,
    // Search,
    Burger
  },
  data() {
    return {
      title: "String"
    };
  }
};
</script>

<style></style>
