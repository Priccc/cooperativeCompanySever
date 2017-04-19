<template lang="html">
  <el-row id="titleheader">
    <el-col :span='12' class="titleft">
      <slot name="left"></slot>
    </el-col>
    <el-col :span='12' class="titright">
      <slot name="right"></slot>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'title-header'
}
</script>

<style lang="css">
#titleheader{
  border-bottom: 1px solid #ebebeb;
  height: 55px;
  line-height: 55px;
  font-size: 24px;
}
#titleheader .titright{
  text-align: right;
}
</style>
