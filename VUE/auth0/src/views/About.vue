<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button-a>
      <template slot="first" slot-scope="firstSlotScope">
        <p>{{ firstSlotScope.text }}</p>
        <!-- Renders <p>I'll get rendered inside the first slot.</p> -->
      </template>
      <template slot="not-first" slot-scope="secondSlotScope">
        <p>{{ secondSlotScope.text }}</p>
        <!-- Renders <p>I'll get rendered inside the second slot.</p> -->
      </template>
    </button-a>
  </div>
</template>

<script>
import button from "../components/Buttons.vue";
export default {
  name: "About",
  components: {
    "button-a": button
  }
};
</script>

<style>
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
