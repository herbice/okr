<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px;margin-top:-50px">
      <span style="float:left;margin-left:200px;color:white;font-size:25px">BestBrain</span>
        <el-input  placeholder="请输入内容"
        suffix-icon="el-icon-search"
        style="width:200px;margin-right:80px;"
        ></el-input>
      <a href="/test" style="color:white;margin-right:20px;text-decoration:none;">Fintech服务</a>
      <a href="" style="color:white;margin-right:20px;text-decoration:none;">我的OKR</a>
      <a href="" style="color:white;margin-right:80px;text-decoration:none;">登录</a>
    </el-header>

    <el-main style="background-color:#f3f3f3;">
      <div style="margin-top:1px;">
        <h1 style="float:left;margin-left:200px;margin-top:0px;font-size:20px">热门课题列表</h1>
        <el-button type="primary" style="float:right;margin-right:200px;margin-top:1px;">新建课题</el-button>
      </div>
      <div style="margin-top:50px;margin-left:200px;margin-right:200px;background-color:white;height:50px">
        <el-tabs v-model="activeName" @tab-click="handleClick" style="float:left">
        <el-tab-pane label="全部" name="first"></el-tab-pane>
        <el-tab-pane label="极客" name="second"></el-tab-pane>
        <el-tab-pane label="新员工" name="third"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="" style="margin-top:10px;margin-left:200px;margin-right:200px;background-color:white;height:50px">
        <el-input  placeholder="搜索负责人、课题名称"
        suffix-icon="el-icon-search"
        style="width:240px;float:left;margin-left:5px;margin-top:5px"
        ></el-input>
        <el-radio-group v-model="radio3" style="float:right;margin-right:5px;margin-top:5px">
          <el-radio-button label="进行中"></el-radio-button>
          <el-radio-button label="已结束"></el-radio-button>
        </el-radio-group>
    </div>
    <!--课题列表-->
    <div style="margin-top:10px;margin-left:200px;margin-right:200px;background-color:white;">
        <el-table
          :data="tableData"
          style="width: 100%;text-align:center">
          <el-table-column
            prop="person"
            label="负责人"
            width="280"
            align="center"
            >
          </el-table-column>
          <el-table-column
            prop="projectName"
            label="课题"
            width="280"
            align="center"
            >
            <template scope="scope">
            <el-button type="text"  @click="getDetails(scope.$index, scope.row)" >{{ scope.row.projectName }}</el-button>
           </template>
          </el-table-column>
          <el-table-column
            prop="updateDate"
            label="最近更新"
            width="280"
            align="center">
          </el-table-column>
          <el-table-column
            prop="type"
            label="类型"
            width="280"
            align="center">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态"
            width="280"
            align="center">
          </el-table-column>
        </el-table>
        <el-dialog :visible.sync="outerVisible" center:false>
        <!--位置确定好，需要进一步传递参数到子组件-->
          <!--添加冒号后传参成功-->
           <projectDetails :projectName = "pN" :updateDate = "uD" :person="pS" :type="tY" :state="sT"></projectDetails>
        </el-dialog>
    </div>
    </el-main>
    <el-footer style="height:60px;background-color:#e6f8f6;padding-top:20px;">OKR开发团队</el-footer>
  </el-container>
</template>

<script type="text/javascript">
import projectDetails from './projectDetails'
export default {
  components: {
    projectDetails
  },
  name:'projectList',
  data () {
    return {
      author: "LJ",
      activeName: 'second',
      radio: '1',
      outerVisible:false,
      currentIndex:'',
      pN:'',
      uD:'',
      pS:'',
      tY:'',
      sT:'',
      form: {},
       radio3: '进行中',
       tableData: [{
         person:'小王',
         projectName:'OKR工作法',
         updateDate:'1月18日',
         type:'个人',
         state:'进行中'
       }, {
         person:'小王',
         projectName:'OKR工作',
         updateDate:'1月18日',
         type:'个人',
         state:'进行中'
       }, {
         person:'小王',
         projectName:'OKR工',
         updateDate:'1月18日',
         type:'个人',
         state:'进行中'
       }, {
         person:'小王',
         projectName:'OKR',
         updateDate:'1月18日',
         type:'个人',
         state:'进行中'
       },{
         person:'小王',
         projectName:'OKR工作法',
         updateDate:'1月18日',
         type:'个人',
         state:'进行中'
       }]
    }
  },
  methods: {
      getDetails(index, row) {
    this.form = this.tableData[index]
    this.currentIndex = index
    this.outerVisible = true
    this.pN = row.projectName
    this.uD = row.updateDate
    this.pS = row.person
    this.tY = row.type
    this.sT = row.state
  },
     }
}

</script>
<style>

.el-header {
  background-color: #21d8bd;
  color: #333;
  line-height: 60px;
},
.el-footer {
    background-color: red;
    color: #333;
    text-align: center;
    line-height: 60px;
    height:100px;
  },
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
 .el-input__inner{
   border-radius:20px;
 }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
