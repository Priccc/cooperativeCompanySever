<template>
  <div id="main">
    <el-row>
      <xsbHeader></xsbHeader>
    </el-row>
    <el-row :style="{ 'height': conH - 66 + 'px' }">
      <el-col :span="4">
        <xsbNavmenu></xsbNavmenu>
      </el-col>
      <el-col :span="20" style="overflow-y: scroll;">
        <el-row :style="{ 'height': conH - 66 -60 + 'px','padding': '0 20px' }">
          <xsbSlot :page="actPage"></xsbSlot>
        </el-row>
        <el-row>
          <xsbFooter></xsbFooter>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import xsbNavmenu from '../components/Navmenu-ver'
import xsbHeader from '../components/Header'
import xsbFooter from '../components/Footer'
import xsbSlot from './slotpage'

const winH = document.documentElement.clientHeight

export default {
  name: 'main',
  data () {
    return {
      conH: winH
    }
  },
  computed: {
    actPage () {
      return this.$store.state.actPage
    }
  },
  components: {
    xsbNavmenu,
    xsbHeader,
    xsbFooter,
    xsbSlot
  }
}
</script>

<style>
#main{
  /*min-width: 1100px;*/
}
</style>
