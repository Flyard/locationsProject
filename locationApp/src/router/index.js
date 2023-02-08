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
    },
    {
      path: '/add',
      name: 'addLocation',
      component: () => import('../components/AddLocation.vue')
    },
    {
      path: '/edit',
      name: 'editAddProp',
      component: () => import('../components/EditAddProp.vue')
    },
    {
      path: '/editprop',
      name: 'edit',
      component: () => import('../components/Edit.vue')
    }
  ]
})

export default router;
