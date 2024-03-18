/*
 * @FileDescription: 
 * @Author: czh
 * @Date: 2024-03-15 17:05:22
 * @LastEditors: czh
 * @LastEditTime: 2024-03-18 15:14:08
 */
import BaseTable from './src/index.vue'

/* istanbul ignore next */
BaseTable.install = function (Vue) {
  Vue.component(BaseTable.name, BaseTable)
}

export default BaseTable
