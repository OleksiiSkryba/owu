<template>
<div>
  <Header/>
  <FreamworkList />
  <Todo/>
  <Footer/>
</div>

</template>

<script>

import Header from '@/components/Header'
import FreamworkList from '@/components/Freamworks/FreamworkList'
import Todo from '@/components/Todo'
import Footer from '@/components/Footer'


export default {
  name: 'App',
  components: {
    Header,
    FreamworkList,
    Todo,
    Footer,
    
  },

  data(){
    return{
footerEdet: ''
    }
  },

  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
