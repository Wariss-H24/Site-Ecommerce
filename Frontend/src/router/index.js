import { createRouter, createWebHistory } from 'vue-router'
import AboutsComp from '@/components/AboutsComp.vue'
import ContactComp from '@/components/ContactComp.vue'
import HomeComp from '@/components/HomeComp.vue'
import SignComp from '@/components/SignComp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComp,
    },
    {
      path:'/about',
      name: 'about',
      component: AboutsComp
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactComp,
    },
    {
      path: '/sign',
      name: 'sign',
      component: SignComp,
    }
  ],
})

export default router
