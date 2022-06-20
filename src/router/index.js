import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cocktail from '../views/Cocktail.vue'
import Searched from '../views/Searched.vue'

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
    {
      path: '/searched/:id',
      name: 'Searched',
      component: Searched,
    },
  ],
})

export default router
