<!--
 * @FileDescription: 
 * @Author: czh
 * @Date: 2024-03-14 11:03:57
 * @LastEditors: czh
 * @LastEditTime: 2024-03-15 15:16:40
-->
<template>
  <el-table-column
    :label="headerRow.label"
    :width="headerRow.width || ''"
    :min-width="headerRow.minWidth || ''"
  >
    <template v-for="item in headerRow.children">
      <tableHeader v-if="item.children" :headerRow="item">
        <template v-slot:header="scope">
          <slot
            name="header"
            :column="scope.column"
            :row="scope.row"
            :index="scope.index"
            :slotName="scope.slotName"
          ></slot>
        </template>
        <template v-slot="scope">
          <slot
            :slotName="scope.slotName"
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
            name="header"
            :slotName="`${item.prop}Header`"
            :column="scope.column"
            :row="scope.row"
            :index="scope.$index"
          >
            {{ item.label }}
          </slot>
        </template>
        <template slot-scope="scope">
          <slot
            :slotName="`${item.prop}`"
            :column="scope.column"
            :row="scope.row"
            :index="scope.$index"
          >
            {{ scope.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table-column>
</template>
<script>
export default {
  name: "TableHeader",
  props: ["headerRow"],
};
</script>
