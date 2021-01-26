<template>
  <div class="list">
      <h3>{{ msg }}</h3>
  <input type="text" v-model="txt">
  <button @click="add" v-if=" todos.length < 5">ADD</button>
  <ul>
    <li v-for="(todo, i) in todos" :key = "i">
    <span>{{todo}}</span>
    <button @click="del(i)">DELITE</button>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
  
   },
     data(){
  return{
  msg:'Todo',
  txt:'',
  todos:[],
    }
   },
    methods: {
     add(){
       this.todos.push(this.txt),
       this.txt = ''
     },
     del(i){
       this.todos.splice(i, 1)
     }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
    display: flex;
    flex-direction: column;
  justify-content: center;
}
li {
  /* display: inline-block; */
  
  margin: 5px auto;
    display: flex;
  justify-content: flex-end;
  background-color: rgb(164, 207, 250);

}
li > span {
    width: 150px;
    text-align: center;
    flex-shrink: 0;
}
li > button {
 background-color: rgb(66, 159, 252);
}

</style>
