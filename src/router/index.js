import { createRouter, createWebHistory } from 'vue-router'
import i18n from '../i18n'
const { t } = i18n.global;
const routes = [
  {
    path: '/',
    name: '/',
    redirect:"/login"
  },
  {
    path: '/login',
    name: 'login',
    meta:{
      title:t('登录')
    },
    component: () => import( '../views/loginPages/login.vue')
  },
  {
    path: '/homePage',
    name: 'homePage',
    meta:{
      title:t('主页')
    },
    component: () => import( '../views/homePage')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
