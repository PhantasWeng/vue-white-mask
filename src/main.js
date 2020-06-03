import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-tw'

import VueProgressBar from 'vue-progressbar'

// import Antd from 'ant-design-vue'
// import { Base, Layout, Button, Menu, Icon } from 'ant-design-vue'
import Antd from './antComponents'

// import 'ant-design-vue/dist/antd.css'
// import 'ant-design-vue/dist/antd.less'

import owlsight from 'owlsight'

import 'owlsight/dist/main.css'
import 'owlsight/icons/css/owl.css'
import 'owlsight/icons/css/animation.css'

import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.config.productionTip = false

dayjs.locale('zh-tw')

Vue.prototype.$dayjs = dayjs

Object.keys(Antd).forEach(key => {
  Vue.use(Antd[key])
})
// Vue.use(Antd)
// Vue.use(Base)
// Vue.use(Layout)
// Vue.use(Menu)
// Vue.use(Icon)
// Vue.use(Button)

Vue.use(PerfectScrollbar)

Vue.use(VueProgressBar, {
  color: owlsight.theme.extend.colors.green.default,
  failedColor: owlsight.theme.extend.colors.red.default,
  thickness: '5px',
  autoRevert: true,
  location: 'top'
})

// router.beforeEach((to, from, next) => {
//   console.log(to, from, next)
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
