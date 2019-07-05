<template>
<div>
  <div class="topbar">
    <img src="../assets/logo.png" id="logo" >
    <a href="http://127.0.0.1:8080/#/useradd" style='font-size:40px;'>&#10010;</a>
  </div>
  <div class="container">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search for...">
      <span class="input-group-btn">
        <button class="btn btn-search" type="button"><i class="fa fa-search fa-fw"></i> Search</button>
      </span>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'headerfile',
  props: {
  }
}
</script>

<style scoped>
.topbar {
  overflow: hidden;
  background-color: #333;
  font-family: Arial;
  height: 40px;
}
#logo{
  height: 40px;
}
#add{
  background-color: #999;
}
.topbar a {
  float: right;
  display: block;
  color: #f2f2f2;
  text-align: center;
  /* padding: 14px 14px;  */
  text-decoration: none;
}
.topbar a:hover {
  background: #ddd;
  color: rgb(59, 166, 173);
  
}
#search{
  height: 100%;
}

</style>
