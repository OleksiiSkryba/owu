<template>
<div>
  <h3>
     {{propstitle}} - 
     {{frametitle}}</h3>
<p>
<!-- <span>{{propsfreamwork}}</span> -->
<b>{{propsfreamwork.name}} - {{propsfreamwork.status}}</b>
<button @click="editor">Edite title</button>
<button @click="completer">complet</button>
<button @click="footerEdet">Edite</button>
</p>
</div>
</template>

<script>
import {emitter} from "../../main";

export default {
  name: 'FreamworkItems',
  props:
        {
          propsfreamwork:{
           type: Object,
           required: true,
           default: null
          },
          propstitle:{
           type: String,
           default: 'Frame'
          }
        },
     data(){
  return{
     frametitle: this.propstitle 
      + (' - ') + this.propsfreamwork.name
    }
   },
    methods: {
   editor() {
     const value = 'New title'
     this.$emit('updateTitle', value)
   },
   completer() {
          const value = true
     this.$emit('complet', value)
   },
   footerEdet(){
     const value = 'Apdated footer';
      emitter.emit('footerEdet', value);
   }
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>