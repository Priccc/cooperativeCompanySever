<template lang="html">
  <el-row id="adminManage">
    <el-row>
      <el-col>
        <xsbTitle>
          <p slot="left">账号管理</p>
          <el-button slot="right" type="primary">添加账号</el-button>
        </xsbTitle>
      </el-col>
    </el-row>
    <el-row>
      <xsbTables :data="data" :pageSize="pageSize" operation="true" @operation="ope"></xsbTables>
    </el-row>
  </el-row>
</template>

<script>
import xsbTitle from '../../components/title-header'
import xsbTables from '../../components/tables'

export default {
  name: 'admin-manage',
  data () {
    const val = {
      title: [
        '111',
        '222',
        '333',
        '444'
      ],
      content: [
        {
          '111': '1111111111',
          '222': '8989898989',
          '333': '0000000000',
          '444': '0000000000',
          'operation': [
            {
              name: '查看',
              back: ['111', '222'],
              fuc: 'console.log(1234)'
            }
          ]
        },
        {
          '111': '1111111112',
          '222': '2323232323',
          '333': '0000000000',
          '444': '0000000000',
          'operation': [
            {
              name: '查看',
              text: 'text',
              back: ['111', '222']
            },
            {
              name: '编辑',
              // text: 'primary',
              back: ['111', '222']
            }
          ]
        },
        {
          '111': '1111111113',
          '222': '222222222',
          '333': '0000000000',
          '444': '0000000000',
          'operation': [
            {
              name: '查看',
              back: ['111', '222']
            },
            {
              name: '编辑',
              back: ['111']
            }
          ]
        },
        {
          '111': '1111111114',
          '222': '4545454545',
          '333': '0000000000',
          '444': '0000000000',
          'operation': [
            {
              name: '查看',
              back: ['111', '222']
            },
            {
              name: '编辑',
              back: ['111']
            }
          ]
        },
        {
          '111': '1111111115',
          '222': '6666666666',
          '333': '0000000000',
          '444': '0000000000',
          'operation': [
            {
              name: '查看',
              back: ['111', '222']
            },
            {
              name: '编辑',
              back: ['111']
            }
          ]
        },
        {
          '111': '1111111116',
          '222': '5757575757',
          '333': '0000000000',
          '444': '0000000000',
          'operation': [
            {
              name: '查看',
              back: ['111', '222']
            },
            {
              name: '编辑',
              back: ['111']
            }
          ]
        },
        {
          '111': '1111111117',
          '222': '3838383838',
          '333': '0000000000',
          '444': '0000000000',
          'operation': [
            {
              name: '查看',
              back: ['111', '222']
            },
            {
              name: '编辑',
              back: ['111']
            }
          ]
        }
      ]
    }
    return {
      data: val,
      pageSize: 3
    }
  },
  methods: {
    ope (val) {
      console.log(val)
    }
  },
  components: {
    xsbTitle,
    xsbTables
  }
}
</script>

<style lang="css">
</style>
