<template>
<div>
 <headerfile>
 </headerfile>
 <userdata>
 </userdata>
 <footerfile>
 </footerfile>
</div>
</template>

<script>
import headerfile from './headerfile.vue'
import footerfile from './footer'
import userdata from './userdata'
export default {
  name: 'HomePage',
  props: {
   
  },
  components:{
    footerfile,
    headerfile,
    userdata
  }
  
}
</script>


