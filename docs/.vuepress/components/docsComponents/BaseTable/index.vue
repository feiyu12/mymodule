<!--
 * @FileDescription: 
 * @Author: czh
 * @Date: 2024-03-13 15:46:30
 * @LastEditors: czh
 * @LastEditTime: 2024-03-18 16:20:47
-->
<template>
  <div class="code-format">
    <BaseTable
      :isSelection="true"
      :isExpand="false"
      :isIndex="true"
      :dataList="dataList"
      :header="headerList"
      @row-dblclick="dblclick"
      @selection-change="handleSelectionChange"
      :border="true"
      :operationShow="false"
    >
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
                  prop:"cc"
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
          zf:'ff'
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

<style>
