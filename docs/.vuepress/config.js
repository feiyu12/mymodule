/*
 * @FileDescription:
 * @Author: czh
 * @Date: 2024-03-17 23:35:34
 * @LastEditors: czh
 * @LastEditTime: 2024-03-19 16:50:35
 */
module.exports = {
  // 网站的一些基本配置
  // base:配置部署站点的基础路径，后续再介绍
  // 网站的标题
  title: "基础组件文档库",
  base: "/mymodule/",
  // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  description: "基于Element-ui二次封装基础组件示例",
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: `./favicon.ico` }], // 需要被注入到当前页面的 HTML <head> 中的标签
  ],
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "实际项目问题", link: "/projectProblem/permission" },
      { text: "基础组件", link: "/baseComponents/base" }
    ],
    sidebar: {
      "/projectProblem/": [
        {
          title: "Vue项目",
          collapsable: true,
          children: ["permission", "keepAlive", "axios", "others"],
        },
      ],
      "/baseComponents/": [
        {
          title: "常用组件",
          collapsable: false,
          children: [
            "BaseButton/base", // button组件
            "BaseTable/base", // table组件
          ],
        },
      ],
    },
  },
  chainWebpack(config) {
    config.resolve.alias.set("core-js/library/fn", "core-js/features");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            "cache-loader",
            {
              loader: "babel-loader",
              options: {
                babelrc: false,
                configFile: false,
                presets: [
                  "@babel/preset-env", // 可以识别es6语法
                  "@vue/babel-preset-jsx", // 解析jsx语法
                ],
              },
            },
            {
              loader: "ts-loader",
              options: {
                appendTsxSuffixTo: [/\.vue$/, /\.md$/],
              },
            },
          ],
        },
      ],
    },
  },
  plugins: [
    [
      "vuepress-plugin-typescript",
      {
        tsLoaderOptions: {
          // ts-loader 的所有配置项
        },
      },
    ],
    // ['@vuepress/plugins-back-to-top', false],
    [
      "vuepress-plugin-gotop-plus",
      {
        // mobileShow: false,
        threshold: 150,
      },
    ],
    "@vuepress-reco/extract-code",
  ],
};
