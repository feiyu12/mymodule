<!--
 * @FileDescription: 
 * @Author: czh
 * @Date: 2024-03-13 15:46:30
 * @LastEditors: czh
 * @LastEditTime: 2024-03-20 15:08:31
-->
<template>
    <div>
      <div>表格封装</div>
      <BaseTable
        :isSelection="true"
        :isExpand="true"
        :isIndex="true"
        :dataList="dataList"
        :header="headerList"
        @row-dblclick="dblclick"
        @selection-change="handleSelectionChange"
        :border="true"
      >
        <template slot="expand" slot-scope="scope">
          <div>
            {{ scope.data.$index }}我是展开行的东西
            <div>
              <!-- {{ getScope(scope.data) }} -->
            </div>
          </div>
        </template>
        
        <template v-slot:index="scope"> * {{ scope.data.$index + 1 }} </template>
  
        <template slot="nameHeader" slot-scope="scope">
          {{ scope.column.label }}132{{ getScope(scope) }}
        </template>
  
        <template slot="name" slot-scope="scope">
            {{ scope.row.name }}123
        </template>
  
        <template slot="ccHeader" slot-scope="scope">
          {{ scope.column.label }}123
        </template>
  
        <template slot="cc" slot-scope="scope">
            1232fsad
        </template>
  
        <template slot="mmHeader" slot-scope="scope">
            mmHeader
        </template>
  
        <template slot="zf" slot-scope="scope">
            123asdfas
        </template>
  
        <template slot="school" slot-scope="scope">
            123
        </template>
  
        <template slot="schoolHeader" slot-scope="scope">
           {{ scope.column.label }}123
        </template>
  
        <template slot="sex" slot-scope="scope">
            123132
        </template>
  
        <template slot="sexHeader" slot-scope="scope">
            {{ scope.column.label }}123
        </template>
  
        <template slot="dateHeader" slot-scope="scope">
            123
        </template>
  
        <template slot="addressHeader" slot-scope="scope">
            123
        </template>
  
       
  
        <template slot-scope="{ data }">
          <el-button size="mini" @click="handleEdit(2, data)">修改</el-button>
          <el-button size="mini" @click="handleEdit(3, data)">详情</el-button>
        </template>
  
      </BaseTable>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headerList: [
          {
            label: "日期",
            prop:'date',
            children: [
              {
                label: "性别",
                prop:'sex',
                children:[
                  {
                    label:'曹操',
                    prop:"cc",
                    children:[
                      {
                        label:'zz',
                        prop:'zz'
                      },
                      {
                        label:'mm',
                        prop:'mm'
                      }
                    ]
                  },
                  {
                    label:'张飞',
                    prop:'zf'
                  }
                ]
              },
              {
                label: "学校",
                prop: "school",
              },
            ],
          },
          {
            label: "姓名",
            prop: "name",
          },
          {
            label: "地址",
            prop: "address",
          },
        ],
        dataList: [
          {
            date: "2016-05-02",
            name: "王小虎",
            sex:'男',
            school:'北京大学',
            address: "上海市普陀区金沙江路 1518 弄",
            cc:'tt1',
            zf:'ff',
            zz:'13244zz',
            mm:'0000mmm'
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            sex:'男',
            school:'北京大学',
            address: "上海市普陀区金沙江路 1517 弄",
            cc:'tt',
            zf:'ff'
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            sex:'男',
            school:'北京大学',
            address: "上海市普陀区金沙江路 1519 弄",
            cc:'tt',
            zf:'ff'
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            sex:'男',
            school:'北京大学',
            address: "上海市普陀区金沙江路 1516 弄",
            cc:'tt',
            zf:'ff'
          },
        ],
      };
    },
    methods: {
      handleSelectionChange() {
        console.log("handleSelectionChange");
      },
      getScope(scope) {
        console.log(scope);
      },
      dblclick(e) {
        console.log(e);
        console.log(2);
      },
      handleEdit(e, data) {
        console.log(e);
        console.log(data);
      },
    },
  };
  </script>
  