<template>
<div>
<h2>
  Freamwork list
</h2>
<div v-for="(freamwork, i) in freamworks" :key="i">
  <div :class="freamwork.status ?'green':'red'">
      <FreamworkItems
       :propsfreamwork="freamwork" 
       :propstitle="title" 
       @updateTitle= "title = $event"
       @complet="freamwork.status = $event"
      />
  </div>
</div>
</div>
</template>

<script>

 import FreamworkItems from '@/components/Freamworks/FreamworkItems'

export default {
  name: 'FreamworkList',
  components: {
    FreamworkItems
    },
  // props: {
  
  //  },
     data() {
  return{
    title: 'Freamwork Title',
    freamworks: [
      {
       name: " Vue ",
       status:  true 
      },
      {
       name: " Angular ",
       status:  true 
      },
      {
       name: " React ",
       status:  false 
      }
    ]
    }
   },
    methods: {

  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.blue {
  background-color: blue;
}
</style>