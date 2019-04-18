<template>
<div>
  <slot></slot>
  <el-pagination
    class="pagination"
    @prev-click="handlePrevClick"
    @current-change="handleCurrentChange"
    background
    :page-size="pageSize"
    :pager-count="pagerCount"
    layout="prev, pager, next"
    :total="total"
    >
  </el-pagination>
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
    tableData:Array,
    total:{
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
