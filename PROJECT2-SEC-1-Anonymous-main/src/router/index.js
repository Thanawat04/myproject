import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFoundView.vue'
import AboutView from '../views/AboutView.vue'
import Home from '../components/Home.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
      path: '/aboutus',
      name: 'About',
      component: AboutView
    },
    {
      path: '/:catchNotMathPath(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ],

  linkExactActiveClass: 'text-blue-500',
  linkActiveClass: 'text-green-500'
})
export default router
