import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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

// {
//   path: '/about',
//   name: 'About',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
