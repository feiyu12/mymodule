<template>
    <div>
      <Tree :data="data">
        <template #default="{ title }">
          <div class="prent">
            {{ title + "+自定义1" }}
          </div>
        </template>
      </Tree>
    </div>
  </template>
  <script>
  import Tree from "./tree.vue";
  export default {
    components: {
      Tree,
    },
    data() {
      return {
        data: [{
          title: "父1",
          children: [{
            title: "子",
            children:[{title:"孙",}]
          }],
        },{
          title: "父2",
          children:[{title:"子"}]
        }]
      };
    }
  };
  </script>