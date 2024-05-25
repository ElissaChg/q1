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
      path: '/bike',
      name: 'bike',
      component: () => import('../views/BikeList.vue')
    },
    {
      path: '/bike/:id',
      name: 'bike-detail',
      component: () => import('../views/BikeView.vue')
    },
    {
      path: '/admin/bike/:id',
      name: 'admin-bike-detail',
      component: () => import('../views/BikeView.vue')
    }
  ]
})

export default router
