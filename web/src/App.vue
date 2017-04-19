<template>
  <div id="app">
    <el-row>
      <router-view></router-view>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.el-col{
  width: 100%;
  height: 100%;
}
#app{
  min-width: 1100px;
}
body,h1,h2,h3,h4,h5,h6,div,p,dl,dt,dd,ol,ul,li,form,table,th,td,
a,img,span,strong,var,em,input,textarea,select,option{
  margin: 0;
  padding: 0;
}
html,body{
  font-family: "Arial","宋体",Arail,Verdana;
  font-size: 18px;
  text-align: left;
}
ul,ol{
  list-style: none;
}
img{
  border: 0;display: block;
}
input,select,textarea{
  outline:0;
}
textarea{
  resize:none; overflow: auto;
}
table{
  border-collapse:collapse;
  border-spacing: 0;
}
h1,h2,h3,h4,h5,h6,span,a,p,th,strong,var,em,i{
  font-weight: normal;
  font-style: normal;
}
a{
  text-decoration: none;display: block;
}
</style>
