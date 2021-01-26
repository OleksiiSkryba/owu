<template>
<footer>
  <h2 ref = "footer">This is footer</h2>
</footer>
</template>

<script>
import {emitter} from "../main";
export default {
  name: 'Footer',
  props: {
   footerEdet: {
   type: String
   }
   },
   created() {
   emitter.on('footerEdet', msg => 
     this.$refs.footer.textContent = msg,
    //  this.$refs.footer.style.color = 'red'
    )
   }
//      data(){
//   return{

//     }
//    },
//     methods: {

//   }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  background-color: rgb(124, 237, 252);
}
</style>