import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Consume from "../views/Consume";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/consume/:uid',
    name: 'Consume',
    component: Consume
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
