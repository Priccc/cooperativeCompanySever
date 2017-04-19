<template lang="html">
  <el-menu default-active="xsbHome" class="el-menu-vertical" @select="handleSelect">
    <el-menu-item index="xsbHome"><i class="el-icon-message"></i>系统首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-message"></i>资源管理</template>
      <el-menu-item index="2-1">图书文章</el-menu-item>
      <el-menu-item index="2-2">文章管理</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><i class="el-icon-message"></i>栏目管理</el-menu-item>
    <el-menu-item index="4"><i class="el-icon-message"></i>分库管理</el-menu-item>
    <el-submenu index="5">
      <template slot="title"><i class="el-icon-message"></i>授权信息</template>
      <el-menu-item index="5-1">栏目授权信息</el-menu-item>
      <el-menu-item index="5-2">分库授权信息</el-menu-item>
    </el-submenu>
    <el-menu-item index="xsbAdminManage"><i class="el-icon-message"></i>账号管理</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'navmenu-ver',
  methods: {
    handleSelect (key, keyPath) {
      this.$store.commit('changeActPage', key)
    }
  }
}
</script>

<style lang="css">
.el-menu-vertical{
  height: 100%;
  overflow-y: scroll;
}
</style>
