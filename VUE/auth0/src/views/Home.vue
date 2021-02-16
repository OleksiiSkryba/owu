<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Todo />
    <!-- <Buttons msg="Welcome !" /> -->
  </div>
</template>
<script>
import Todo from "@/components/Todo.vue";
// @ is an alias to /src
// import Buttons from "@/components/Buttons.vue";

export default {
  name: "Home",
  components: {
    Todo
    // Buttons
  }
};
</script>
