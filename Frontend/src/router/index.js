import { createRouter, createWebHistory } from 'vue-router'
import AboutsComp from '@/components/ProductComponent/AboutsComp.vue'
import ContactComp from '@/components/ContactComp.vue'
import HomeComp from '@/components/HomeComp.vue'
import SignComp from '@/components/SignComp.vue'
import ProductsView from '@/views/ProductsView.vue'
import SignUpComp from '@/components/SignUpComp.vue'
import RegisterComp from '@/components/RegisterComp.vue'
import ProductDetaills from '@/views/ProductDetaills.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComp,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutsComp,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactComp,
    },
    {
      path: '/product',
      name: 'product',
      component: ProductsView,
    },
    {
      path: '/product/:id',
      name: 'ProductDetails',
      component: ProductDetaills,
    },
    {
      path: '/sign',
      name: 'sign',
      component: SignComp,
      children: [
        {
          path: '/signup',
          name: 'signUp',
          component: SignUpComp,
        },
        {
          path: '/register',
          name: 'register',
          component: RegisterComp,
        },
      ],
    },
  ],
})

export default router
