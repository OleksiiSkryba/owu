<template>
  <div>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <slot name="propsTest" :count="count" :addOne="addOne" />
    </div>
    <slot name="first" :text="firstSlotText"></slot>
    <slot name="not-first" :text="secondSlotText"></slot>
  </div>
</template>

<script>
export default {
  name: "Buttons",

  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      firstSlotText:
        "I'll get rendered inside the first slot, I'll be first to be rendered.",
      secondSlotText:
        "I'll get rendered inside the second slot, I'll be second to be rendered."
    };
  },
  methods: {
    addOne() {
      this.count++;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
