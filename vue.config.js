// var owlsight = require('owlsight')
const path = require('path')
function resolve (dir) {
  console.log('dir', dir)
  console.log('path', path.join(__dirname, dir))
  return path.join(__dirname, dir)
}

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  // Muti Entry Setting: https://cli.vuejs.org/config/#pages
  publicPath: process.env.NODE_ENV === 'production'
    ? '/owljourney/'
    : '/',
  runtimeCompiler: true,
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end()
      .use('yaml')
      .loader('yaml-loader')
      .end()

    // config.resolve.alias
    //   .set('sub', resolve('sub'))
  },
  css: {
    sourceMap: isDev,
    loaderOptions: {
      // sass: {
      //   data: `@import "@/stylesheets/_function.sass"`
      // },
      postcss: {
        plugins: [
          // require('tailwindcss')(owlsight),
          require('autoprefixer')
        ]
      }
    }
  },
  devServer: {
    port: 8740,
    host: '0.0.0.0',
    disableHostCheck: true,
    https: false,
    proxy: {
      '/mock': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/mock': '/'
        }
      }
    }
  }
}
