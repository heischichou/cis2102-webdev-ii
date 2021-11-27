import { createRouter, createWebHistory } from 'vue-router'
import Menu from '@/views/Menu.vue'
import Cart from '@/views/Cart.vue'
import Item from '@/views/Item.vue'

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/item/:path',
    name: 'Item',
    component: Item
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
