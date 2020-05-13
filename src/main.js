import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Antd from 'ant-design-vue'
// import { Base, Layout, Button, Menu, Icon } from 'ant-design-vue'
import Antd from './antComponents'

// import 'ant-design-vue/dist/antd.css'
// import 'ant-design-vue/dist/antd.less'

import 'owlsight/dist/main.css'
import 'owlsight/icons/css/owl.css'
import 'owlsight/icons/css/animation.css'

Vue.config.productionTip = false
Object.keys(Antd).forEach(key => {
  Vue.use(Antd[key])
})
// Vue.use(Antd)
// Vue.use(Base)
// Vue.use(Layout)
// Vue.use(Menu)
// Vue.use(Icon)
// Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
