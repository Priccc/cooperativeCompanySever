<template lang="html">
  <el-row>
    <el-row>
      <xsbTitle>
        <p slot="left">统计信息</p>
      </xsbTitle>
    </el-row>
    <el-row style="margin-top: 50px;">
      <el-col>
        <el-table :data="data" :show-header="false" border style="width: 600px;">
          <el-table-column prop="title" align="center"></el-table-column>
          <el-table-column prop="value" align="center"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
import xsbTitle from '../../components/title-header'

export default {
  name: 'home',
  data () {
    return {
      data: [
        {
          title: '图书总数',
          value: '11111'
        },
        {
          title: '文章总数',
          value: '22222'
        },
        {
          title: '分库总数',
          value: '33333'
        },
        {
          title: '栏目总数',
          value: '44444'
        }
      ]
    }
  },
  components: {
    xsbTitle
  }
}
</script>

<style lang="css">
</style>
