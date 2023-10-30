import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/pages',
      name: 'pages',
      component: () => import('../views/PagesView.vue')
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('../views/FeaturesView.vue')
    },
    {
      path: '/buy-porto',
      name: 'buy-porto',
      component: () => import('../views/BuyPorto.vue')
    },
    {
      path: '/checkout-view',
      name: 'checkout-view',
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/create-account',
      name: 'create-account',
      component: () => import('../views/CreateAccount.vue')
    },
    {
      path: '/sign-out',
      name: 'sign-out',
      component: () => import('../views/SignOut.vue')
    }
  ]
})

export default router
