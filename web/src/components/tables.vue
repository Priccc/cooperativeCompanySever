<template lang="html">
  <el-row id="tables">
    <el-row class="search" type="flex" justify="end">
      <el-col :span="6">
        <el-input placeholder="搜索" icon="search" @change="tableSearch"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-table :data="tableData">
        <el-table-column v-for="key in data.title" :key="key" :label="key" :prop="key" align="center"></el-table-column>
        <el-table-column v-if="operation" label="操作" align="center">
          <template scope="scope">
            <el-button v-for="key in scope.row.operation" :key="key" @click="operationClick(scope.row)" :type="key.text === undefined ? 'text' : key.text" size="mini">{{ key.name }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row class="nag">
      <el-col :span="12">
        <span class="left">从 {{ startItem }} 到 {{ endItem }} /共 {{ totalItems }} 条数据</span>
      </el-col>
      <el-col :span="12" style="text-align: right;">
        <el-pagination layout="prev, pager, next" :page-size="pageSize" :total="totalItems" @current-change="handleCurrentChange"></el-pagination>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'tables',
  data () {
    return {
      source: [],
      totalItems: 1,
      startItem: 1,
      endItem: 1,
      currentPage: 1
    }
  },
  props: ['data', 'pageSize', 'operation'],
  methods: {
    operationClick (val) {
      // console.log(val)
      this.$emit('operation', val)
    },
    tableSearch (val) {
      const data = this.data.content
      let ary = []
      for (let key of data) {
        for (let el in key) {
          if (new RegExp(val).test(key[el])) {
            ary.push(key)
            break
          }
        }
      }
      this.pages(ary)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.startItem = (val - 1) * this.pageSize + 1
      if (this.startItem + this.pageSize - 1 > this.totalItems) {
        this.endItem = this.totalItems
      } else {
        this.endItem = this.startItem + this.pageSize - 1
      }
    },
    pages (data) {
      this.source = []
      if (data.length > this.pageSize) {
        const count = Math.ceil(data.length / this.pageSize)
        for (let i = 0; i < count; i++) {
          let ary = []
          for (let j = 0; j < this.pageSize; j++) {
            if (i * this.pageSize + j < data.length) {
              ary.push(data[i * this.pageSize + j])
            } else {
              break
            }
          }
          this.source.push(ary)
        }
      } else {
        this.source.push(data)
      }
      this.totalItems = data.length
      this.startItem = 1
      this.endItem = this.pageSize
      if (this.totalItems < this.pageSize) {
        this.endItem = this.totalItems
        console.log(this.endItem)
      }
    }
  },
  computed: {
    tableData () {
      return this.source[this.currentPage - 1]
    }
  },
  created () {
    this.pages(this.data.content)
  }
}
</script>

<style lang="css">
#tables .search{
  text-align: right;
  margin: 10px 0;
}
#tables .nag{
  margin-top: 10px;
}
#tables .nag .left{
  font-size: 13px;
  color: grey;
}
</style>
