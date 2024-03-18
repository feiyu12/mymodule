# 其它零碎的东西

### 在enhanceApp.js中引入element-ui报错
*  element ui 依赖 core-js的 2.x 版本，而web项目依赖 core-js 的 3.x 版本导致的 , 安装依赖 async-validator@1.11.5 就可以 解决问题 了！
*  <a href="https://taixingyiji.com/vuepress/elementuierror/#vuepress%E5%8A%A0%E8%BD%BDelement-ui%E6%97%B6%E6%8A%A5%E9%94%99cannot-find-module-core-js-library-fn-object-assign">原文链接</a>

```
npm install async-validator@1.11.5
yarn add async-validator@1.11.5
```