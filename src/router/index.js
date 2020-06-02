import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  component: () => import(/* webpackChunkName: "home" */ '../components/Home/Home')
},
{
  path: '/city',
  component: () => import(/* webpackChunkName: "city" */ '../components/City/City')
},
{
  path: '/detail/:id',
  component: () => import(/* webpackChunkName: "detail" */ '../components/Detail/Detail')
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
