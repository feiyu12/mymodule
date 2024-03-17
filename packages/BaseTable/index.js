/*
 * @FileDescription: 
 * @Author: czh
 * @Date: 2024-03-15 17:05:22
 * @LastEditors: czh
 * @LastEditTime: 2024-03-16 13:19:00
 */
import BaseTable from './src/index.vue'

console.log(BaseTable)
/* istanbul ignore next */
BaseTable.install = function (Vue) {
  Vue.component(BaseTable.name, BaseTable)
}

export default BaseTable
