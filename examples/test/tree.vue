<template>
    <div class="tree">
      <div v-for="item of data" :key="item.title">
        <!-- 显示title标题 -->
        <div class="title" >
          <!-- 插槽 -->
          <slot :title="item.title">
            {{ item.title }}
          </slot>
        </div>
        <!-- 如果存在子项则调用本身组件 递归 -->
        <Tree v-if="item.children" :data='item.children' >
          <!-- 每个孩子的item 作用域插槽 -->
          <template v-slot="item">
            <!-- 这里slot抛出给使用这个文件的作用域插槽 -->
            <slot :title='item.title' />
          </template>
        </Tree>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tree',
    props: {
      data: Array,
    }
  };
  </script>
  
  <style scoped>
  .tree{
    padding-left: 10px;
  }
  ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  </style>