const path = require('path')
// const data = require('./data.json')
// const info = data.info
// const goods = data.goods
// const ratings = data.ratings

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [path.resolve(__dirname, './src/theme')]
      }
    }
  },
  // path
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // 代理目标的基础路径
        // ws: true,
        changeOrigin: true,
        pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
          '^/api': ''
        }
      },
      '/foo': {
        target: '<other_url>'
      }
    }
    // before (app) {
    //   app.get('apis/info', function (req, res) {
    //     res.json({
    //       code: 0,
    //       data: info
    //     })
    //   })
    //   app.get('apis/goods', function (req, res) {
    //     res.json({
    //       code: 0,
    //       data: goods
    //     })
    //   })
    //   app.get('apis/ratings', function (req, res) {
    //     res.json({
    //       code: 0,
    //       data: ratings
    //     })
    //   })
    // }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      // .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('styles', resolve('src/common/styles'))
    // .set('layout', resolve('src/layout'))
    // .set('base', resolve('src/base'))
    // .set('static', resolve('src/static'))
  }
}
