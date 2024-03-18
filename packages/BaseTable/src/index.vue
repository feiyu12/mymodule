<!--
 * @FileDescription: 
 * @Author: czh
 * @Date: 2024-03-13 16:12:55
 * @LastEditors: czh
 * @LastEditTime: 2024-03-18 16:19:59
-->
<template>
  <el-table :data="dataList" v-bind="$attrs" v-on="$listeners">
    <!-- 复选框展示 -->
    <el-table-column v-if="isSelection" type="selection" width="55">
    </el-table-column>
    <!-- 展开项 -->
    <el-table-column v-if="isExpand" type="expand" fixed>
      <slot name="expand" slot-scope="scope" :data="scope"> </slot>
    </el-table-column>
    <!-- 索引展示 -->
    <el-table-column label="序号" v-if="isIndex" type="index" width="50">
      <slot name="index" slot-scope="scope" :data="scope">{{
        scope.$index + 1
      }}</slot>
    </el-table-column>

    <!-- 内容展示 -->
    <template v-for="item in header">
      <tableHeader v-if="item.children" :headerRow="item">
        <template v-slot:header="scope">
          <slot
            :name="scope.slotName"
            :column="scope.column"
            :row="scope.row"
            :index="scope.index"
          ></slot>
        </template>
        <template v-slot="scope">
          <slot
            :name="scope.slotName"
            :column="scope.column"
            :row="scope.row"
            :index="scope.index"
          ></slot>
        </template>
      </tableHeader>

      <el-table-column
        v-else
        :prop="item.prop"
        :label="item.label"
        :width="item.width || ''"
        :min-width="item.minWidth || ''"
      >
        <template slot="header" slot-scope="scope">
          <slot
            :name="`${item.prop}Header`"
            :column="scope.column"
            :index="scope.$index"
          >
            {{ item.label }}
          </slot>
        </template>
        <template slot-scope="scope">
          <slot
            :name="`${item.prop}`"
            :column="scope.column"
            :row="scope.row"
            :index="scope.index"
          >
            {{ scope.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </template>

    <el-table-column
      :label="operation.label"
      :fixed="operation.fixed"
      :width="operation.width"
      :min-width="operation.minWidth"
      v-if="operationShow"
    >
      <slot slot-scope="scope" :data="scope"> </slot>
    </el-table-column>
  </el-table>
</template>
<script>
import tableHeader from "./tableHeader.vue";
export default {
  name: "BaseTable",
  components: {
    tableHeader,
  },
  props: {
    header: {
      type: Array,
      default: () => {
        return [];
      },
    },
    dataList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 是否有展看项
    isExpand: {
      type: Boolean,
      default: false,
    },
    // 是否有索引
    isIndex: {
      type: Boolean,
      default: false,
    },
    // 是否有索引
    isSelection: {
      type: Boolean,
      default: false,
    },
    // 操作列显示的
    operation: {
      type: Object,
      default: () => {
        return {
          label: "操作",
          width: "170",
          mintWidth: "170",
          fixed: false,
        };
      },
    },
    // 是否显示操作栏
    operationShow:true
  },
  methods: {
    getTableData(row, prop) {
      return row[prop];
    },
  },
};
</script>

<style scoped></style>
