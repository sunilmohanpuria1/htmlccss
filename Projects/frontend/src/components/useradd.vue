<template>
  <div class="topbar">
    <h2>Add New User Data</h2>
    <form method="get">
    	User Name:
      <input type="text" name="Name">
      <br>
      Adhar  No:
  		<input type="number" name="AdharNo"><br>
			Contact No:
      <input type="number" name="contactNo">
      <br>
      Address :
  		<input type="text" name="address"><br>
			<input type="submit" value="Submit">
		</form>
  </div>
</template>

<script>
export default {
  name: 'useradd',
  props: {
    msg: String
  }
}
</script>


<style scoped>

</style>