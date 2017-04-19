<template lang="html">
  <el-row id="modifypass">
    <el-row>
      <el-col>
        <xsbTitle>
          <p slot="left">修改管理员密码</p>
        </xsbTitle>
      </el-col>
    </el-row>
    <el-row class="content">
      <el-col :span="7">
        <el-input placeholder="账号" :disabled="true">
          <template slot="prepend">
            <span>账号：</span>
          </template>
        </el-input>
        <el-input placeholder="旧密码">
          <template slot="prepend">
            <span>旧密码：</span>
          </template>
        </el-input>
        <el-input placeholder="新密码">
          <template slot="prepend">
            <span>新密码：</span>
          </template>
        </el-input>
        <el-input placeholder="确认信密码">
          <template slot="prepend">
            <span>确认信密码：</span>
          </template>
        </el-input>
        <el-button type="primary">修改</el-button>
        <el-button>取消</el-button>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
import xsbTitle from '../../components/title-header'

export default {
  name: 'modify-password',
  components: {
    xsbTitle
  }
}
</script>

<style lang="css">
#modifypass .content{
  margin-top: 20px;
}
#modifypass .content .el-input span{
  display: inline-block;
  width: 120px;
  text-align: center;
}
#modifypass .content .el-input .el-input-group__prepend{
  background-color: #eee;
  color: #555;
}
#modifypass .content .el-button{
  width: 60px;
  margin-top: 10px;
}
</style>
