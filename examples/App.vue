<!--
 * @FileDescription: 
 * @Author: czh
 * @Date: 2024-03-13 15:46:30
 * @LastEditors: czh
 * @LastEditTime: 2024-03-20 15:11:38
-->
<template>
  <div id="app">
    <div>表格封装</div>
   <Test></Test>
  </div>
</template>

<script>
import Test from "./test";
export default {
  components:{Test},
  name: "App",
  data() {
    return {
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
