//vue脚手架项目-默认的配置文件
//webpack-node环境-到处配置对象
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000,
    open: true//浏览器自动打开
  },
  lintOnSave: false
})
