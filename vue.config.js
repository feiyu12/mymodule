/*
 * @FileDescription: 
 * @Author: czh
 * @Date: 2024-03-13 15:46:30
 * @LastEditors: czh
 * @LastEditTime: 2024-03-20 09:30:58
 */
const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave:false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  configureWebpack: config => {
    config.resolve.alias['@'] = resolve('examples')
    config.resolve.alias['components'] = resolve('examples/components')
    config.resolve.alias['~'] = resolve('packages')
    // 生产环境配置
    if (isProduction) {
      config.mode = 'production'
      // 打包文件大小配置
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000
      }
    }
  }
}
