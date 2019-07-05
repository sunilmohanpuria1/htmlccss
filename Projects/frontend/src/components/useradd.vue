<template>
<div>
      <div class="container">
      <h2>Enter user details </h2>
      <form @submit.prevent="postreqest" >
          <label for="Name">Name:</label>
          <input type="text" class="form-control" id="Name" placeholder="Name" v-model="Name" required >
          <label for="AdharNo">Adhar No. :</label>
          <input type="NUMBER" class="form-control" id="AdharNo" placeholder="Enter Adhar No" v-model="AdharNo" required>
          <label for="contactNo">Contact No:</label>
          <input type="NUMBER" class="form-control" id="contactNo" placeholder="Enter contact No" v-model="contactNo" required>
          <label for="address">Address:</label>
          <input type="text" class="form-control" id="address" placeholder="Enter address " v-model="address" required>
        <button type="submit" class="btn btn-default" >Submit</button>
      </form>
      </div>
      <div>
      <footerfile>
      </footerfile>
      </div>
  </div>
</template>

<script>
import footerfile from './footer';
import axios from 'axios';
export default {
  name: 'useradd',
  props: {
    msg: String
  },
  data(){
  return{Name:"",
         AdharNo:null,
         contactNo:null,
         address:"" 
  }

  },
  components:{
    footerfile
  },
  methods:{
    postreqest:function(){
      if(this.AdharNo.length >12 ){
        alert(" adhar no should be less the 13");
        return
      }
      else if(this.contactNo.length!=10){
        alert("contact number must have 10 digit");
        return
      }
      axios
      .post('http://127.0.0.1:3000/user',{
        Name:this.Name,
        AdharNo:this.AdharNo,
        contactNo:this.contactNo,
        address:this.address
      })
      .then(function(response){
        alert(response.body);
        window.location.href = 'http://127.0.0.1:8080/#/useradd'
      }).catch(function(){
		alert("Error - some thing went wrong");
	})
    }
  }

}
</script>


<style scoped>

</style>