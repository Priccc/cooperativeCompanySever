<template lang="html">
  <div :is="page"></div>
</template>

<script>
import xsbHome from './pages/home'
import xsbAdminManage from './pages/admin-manage'
import xsbModifyPassword from './pages/modify-password'

export default {
  name: 'slotpage',
  props: ['page'],
  components: {
    xsbHome,
    xsbAdminManage,
    xsbModifyPassword
  }
}
</script>

<style lang="css">
</style>
