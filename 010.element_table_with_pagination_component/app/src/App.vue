<template>
  <div id="app">
    <h1>分页容器</h1>
    <PaginationContainer 
      :tableData="tableData"
      :total="total"
      :currentPage="currentPage"
      :getData="getData"
    >
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期">
        </el-table-column>
        <el-table-column
          prop="name"
          label="页面">
        </el-table-column>
      </el-table>
    </PaginationContainer>


    <h1>带分页的Table</h1>
    <TableWithPagination 
      :tableData="tableData"
      :total="total"
      :currentPage="currentPage"
      :getData="getData"
      :columns="columns"
    />


  </div>
</template>

<script>
import PaginationContainer from './components/PaginationContainer.vue'
import TableWithPagination from './components/TableWithPagination.vue'

export default {
  name: 'app',
  data(){
    return {
      total:10,
      tableData: [],
      currentPage: 0,
      columns:[
        {title:"name-第一列",prop:"name"},
        {title:"date-第二列",prop:"date"},
      ],
    }
  },
  mounted(){
    this.getData( this.currentPage );
  },
  methods: {
    getData(currentPage){
      this.currentPage = currentPage;
      //准备页面数据
      let pageData = [];
      for( let i=0; i<5; i++ ){
        pageData.push({
          date: '2016-05-'+currentPage,
          name: '页'+currentPage+"-"+i,
        });
      }
      this.tableData = pageData;
    }
  },
  components: {
    PaginationContainer,
    TableWithPagination,
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
