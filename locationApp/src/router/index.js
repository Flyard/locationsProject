import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/Register.vue')
    },
    {
      path: '/locations',
      name: 'locations',
      component: () => import('../components/Locations.vue')
    },
    {
      path: '/landing',
      name: 'landing',
      component: () => import('../components/Landing.vue')
    }
  ]
})

export default router;
