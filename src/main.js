import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import axios from 'axios'

Vue.prototype.axios = axios

createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
