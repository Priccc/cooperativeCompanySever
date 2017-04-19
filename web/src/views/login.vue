<template lang="html">
  <div id="login" :style="{ 'height': wH + 'px' }">
    <el-row class="head">
      <img src="https://devchat.dyxsb.net/statics/img/bag.png" alt="">
      <h2>党员小书包第三方合作管理系统</h2>
    </el-row>
    <el-row class="con" :style="{ 'height': bgH + 'px' }">
      <el-col :span="12" :style="{ 'line-height': bgH + 'px', 'text-align': 'center' }">
        <span style="color: #fff;font-size: 30px;">党员小书包第三方合作管理系统</span>
      </el-col>
      <el-col :span="12">
        <div class="formBox">
          <span style="font-size: 15px;">登录</span>
          <el-input placeholder="用户名">
            <template slot="prepend">
              <i class="iconfont icon-usher"></i>
            </template>
          </el-input>
          <el-input placeholder="密码" type="password">
            <template slot="prepend">
              <i class="iconfont icon-lock"></i>
            </template>
          </el-input>
          <el-input placeholder="验证码" style="margin: 20px 0 20px 0;">
            <template slot="prepend">
              <i class="iconfont icon-keyboard-o"></i>
            </template>
            <template slot="append">
              <span>1234</span>
            </template>
          </el-input>
          <el-button style="width: 80px;background: #d9534f;color: #fff;">登录</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row class="footer">
      <xsbFooter></xsbFooter>
    </el-row>
  </div>
</template>

<script>
import xsbFooter from '../components/Footer'

export default {
  name: 'login',
  data () {
    const winH = document.documentElement.clientHeight
    return {
      wH: winH,
      bgH: winH * 0.68
    }
  },
  components: {
    xsbFooter
  }
}
</script>

<style lang="css">
#login{
  width: 100%;
  position: relative;
}
#login .head{
  overflow: hidden;
  padding: 10px 20px;
}
#login .head img{
  float: left;
}
#login .head h2{
  float: left;
  margin: 8px 0 0 10px;
  font-size: 24px;
  font-weight: 500;
  color: #FF0000;
}
#login .con{
  margin-top: 30px;
  width: 100%;
  background: #C82924 url(https://devchat.dyxsb.net/statics/img/login_bg.png)no-repeat;
  background-size: 100%;
  -webkit-box-align: center;
}
#login .formBox{
  width: 240px;
  background: #fff;
  border-radius: 5px;
  position: relative;
  top: 30%;
  padding: 20px 30px;
}
#login .footer{
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
