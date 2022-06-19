import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cocktail from '../views/Cocktail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cocktail/:id',
      name: 'Cocktail',
      component: Cocktail,
    },
  ],
})

export default router
