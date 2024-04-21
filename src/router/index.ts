// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'articles',
    component: () => import('../pages/Articles.vue'),
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('../pages/Article.vue'),
  },
  {
    path: '/:notFound(.*)',
    // redirect: '/'
    component: () => import('../pages/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
