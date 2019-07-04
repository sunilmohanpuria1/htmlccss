<template>
<div>
 {{Header}}

  </div>
</template>

<script>
import Header from './components/header.vue'
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components:{
    Header
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
