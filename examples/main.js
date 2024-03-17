/*
 * @FileDescription: 
 * @Author: czh
 * @Date: 2024-03-13 15:46:30
 * @LastEditors: czh
 * @LastEditTime: 2024-03-13 16:11:56
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import './components/component'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
