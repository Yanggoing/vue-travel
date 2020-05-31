import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home'
import City from '../components/City/City'
import Detail from '../components/Detail/Detail'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  component: Home
},
{
  path: '/city',
  component: City
},
{
  path: '/detail/:id',
  component: Detail
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
  routes
})

export default router
