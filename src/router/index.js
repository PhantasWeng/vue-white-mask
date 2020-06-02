import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'
import configRouter from './configRouter'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      ...configRouter
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes
})

export default router
