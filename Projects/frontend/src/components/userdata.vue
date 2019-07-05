<template>
    <div >
			<table class="table table-striped">
			<thead>
 			<tr>
  				<th>Name</th>
 				 <th>Adhar No</th>
 			</tr>
		</thead>
<tbody  v-for="(user,key) in alluser" v-bind:key="key">         
 
    <tr>
	<td>{{user.Name}}</td> 
        <td>{{user.AdharNo}}</td>       
    </tr>
 
</tbody>
</table>
		</div>
</template>

<script>
 import axios from 'axios';
export default {
    name: 'userdata',
  props: {
  },
  data(){
      return{fields: {
          Name: {
            label: 'User name',
          },
          AdharNo: {
            label: 'Adhar no',
					}
				},
				alluser:[],
				loading: true
      }
	},
	mounted () {
	axios
      .get('http://127.0.0.1:3000/user')
      .then(response => {(this.alluser = response.data)}).catch(function(){
		alert("Error - some thing went wrong");
	})
  }

}
</script>


<style>
/* {
									Name:"Anuj",
									AdharNo:123456789112,
									contact:[
										{
											contactNo:7548865942,
											address:"Mumbia"
										},
										{
											contactNo:1542356215,
											address:"Delhi"
										}
									]
							},
							{
									Name:"Amit",
									AdharNo:219874563254,
									contact:[
										{
											contactNo:5486782135,
											address:"Mumbia"
										},
										{
											contactNo:1541258798,
											address:"Delhi"
										}
									]
              } */
</style>