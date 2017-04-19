<template lang="html">
  <div id="header" :style="{ 'height': height, 'background-color': backgroundColor }">
    <el-row type="flex" justify="space-between">
      <el-col :span="10" class="left">
        <img src="https://devchat.dyxsb.net/statics/img/bag.png" alt="">
        <span :style="{ 'line-height': height }">党员小书包第三方合作管理系统</span>
      </el-col>
      <el-col :span="5" class="right">
        <img src="https://devchat.dyxsb.net/statics/img/default_avatar.png" alt="">
        <div>
          <p>欢迎您</p>
          <p>管理员：
            <el-tooltip placement="bottom" effect="light">
              <div slot="content">
                <!-- <el-button type="text">修改密码</el-button> -->
                <p class="modfypass" @click="modfypass">修改密码</p>
              </div>
              <em>Heaven</em>
            </el-tooltip>
          </p>
        </div>
        <span class="back">退出</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      height: '66px',
      backgroundColor: '#68093E'
    }
  },
  methods: {
    modfypass () {
      this.$store.commit('changeActPage', 'xsbModifyPassword')
    }
  }
}
</script>

<style lang="css">
#header .left{
  overflow: hidden;
}
#header .left img{
  float: left;
  margin: 9px 10px 0 20px;
}
#header .left span{
  float: left;
  color: #fff;
  font-size: 26px;
}
#header .right{
  overflow: hidden;
  font-size: 16px;
  color: #fff;
}
#header .right img{
  float: left;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 8px 10px 0 0;
}
#header .right > div{
  float: left;
  margin-top: 10px;
}
#header .right > span{
  float: left;
  margin: 32px 0 0 10px;
}
#header .right .back{
  cursor: pointer;
}
#header .right .back:hover{
  color: #0099cc;
}
.modfypass{
  font-size: 15px;
  cursor: pointer;
}
.modfypass:hover{
  color: #0099cc;
}
</style>
