import { createRouter, createWebHistory } from 'vue-router'
import ProductsAdd from '../views/ProductsAdd.vue'
import ProductsEdit from '../views/ProductsEdit.vue'
import ProductView from '../views/ProductView.vue'
import ProductsList from '@/views/ProductsList.vue'
import SignUp from '@/views/SignUp.vue'
import HomeView from '@/views/HomeView.vue'
import LoginP from '@/views/LoginP.vue'
import VerifyOTP from '@/views/VerifyOTP.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: LoginP
    },
    {
      path: '/verify-otp',
      name: 'VerifyOTP',
      component: VerifyOTP
    },
    {
      path: '/CreateP',
      name: 'CreateP',
      component: ProductsAdd
    },
    {
      path: '/EditP/:id',
      name: 'EditP',
      component: ProductsEdit
    },
    {
      path: '/ViewP/:id',
      name: 'ViewP',
      component: ProductView
    },
    {
      path: '/ListP',
      name: 'ListP',
      component: ProductsList
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(`Navegando de ${from.fullPath} a ${to.fullPath}`)
  next()
})

export default router
