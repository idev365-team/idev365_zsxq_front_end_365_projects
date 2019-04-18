<template>
<div>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      v-for="item in columns"
      :prop="item.prop"
      :label="item.title">
    </el-table-column>
  </el-table>
  <el-pagination
    class="pagination"
    @prev-click="handlePrevClick"
    @current-change="handleCurrentChange"
    background
    :current-page="currentPage"
    :page-size="pageSize"
    :pager-count="pagerCount"
    layout="prev, pager, next"
    :total="total"
  ></el-pagination>
</div>
</template>

<script>
export default {
  name: 'MyPagination',
   data() {
      return {
        
      }
  },
  props: {
    columns:{
      default:[],
      type: Array,
    },
    tableData:Array,
    total:{
      default:0,
      type:Number,
    },
    currentPage:{
      default:0,
      type:Number,
    },
    pageSize:{
      default:2,
      type:Number,
    },
    pagerCount:{
      default:5,
      type: Number,
    },
    getData:{
      type:Function, 
    }
  },
  methods: {
    handlePrevClick(currentPage){
      console.log("handlePrevClick--->",currentPage)
      if(this.getData){
        this.getData(currentPage)
      }
    },
    handleCurrentChange(currentPage){
      console.log("handleCurrentChange--->",currentPage)
      if(this.getData){
        this.getData(currentPage)
      }
    }
  }
}
</script>


<style scoped>
.pagination{
  margin-top: 10px;
}
</style>
