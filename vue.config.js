const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const Icons = require('unplugin-icons/webpack')
const IconsResolver = require('unplugin-icons/resolver')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

// 复制文件到指定目录
const copyFiles = [
  {
    from: path.resolve('src/plugins/manifest.json'),
    to: `${path.resolve('dist')}/manifest.json`,
  },
  {
    from: path.resolve('src/assets'),
    to: path.resolve('dist/assets'),
  },
  {
    from: path.resolve('src/plugins/inject.js'),
    to: path.resolve('dist/js'),
  },
]

// 复制插件
const plugin = new CopyWebpackPlugin({
  patterns: copyFiles,
})

// 页面文件
const pages = {}
// 配置 popup.html 页面
const chromeName = ['popup']

chromeName.forEach((name) => {
  pages[name] = {
    entry: `src/${name}/main.js`,
    template: `src/${name}/index.html`,
    filename: `${name}.html`,
  }
})

module.exports = {
  pages,
  productionSourceMap: false, // 配置 content.js background.js
  configureWebpack: {
    entry: {
      background: './src/background/main.js',
    },
    output: {
      filename: 'js/[name].js',
    },
    plugins: [
      plugin,
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            enabledCollections: ['ep'],
          }),
        ],
      }),
      Icons({
        autoInstall: true,
      }),
    ],
  },
  // 配置 content.css
  css: {
    extract: {
      filename: 'css/[name].css',
    },
  },
}
