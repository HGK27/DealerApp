import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/package',
      name: 'package',
      component: () => import('../views/BuyPackagesView.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('../views/GetReportView.vue')
    },
  ]
})

export default router
