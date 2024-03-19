# 确保脚本抛出遇到的错误
###
 # @FileDescription: 
 # @Author: czh
 # @Date: 2024-03-19 14:06:35
 # @LastEditors: czh
 # @LastEditTime: 2024-03-19 14:33:52
### 
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/feiyu12/mymodule.git master:gh-pages


cd -
