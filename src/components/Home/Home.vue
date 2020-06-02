<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './Header'
import HomeSwiper from './Swiper'
import HomeIcons from './Icons'
import HomeRecommend from './Recommond'
import HomeWeekend from './Weekend'
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  // composition API
  setup: function () {
    const swiperList = ref([])
    const iconList = ref([])
    const recommendList = ref([])
    const weekendList = ref([])

    // useStore获取store
    const store = useStore()

    const city = store.state.city

    const getHomeInfo = async () => {
      let res = await axios.get('/api/index.json?city=' + city)
      res = res.data
      if (res.ret && res.data) {
        const result = res.data
        swiperList.value = result.swiperList
        iconList.value = result.iconList
        recommendList.value = result.recommendList
        weekendList.value = result.weekendList
      }
    }

    onMounted(() => {
      getHomeInfo()
    })

    return {
      swiperList,
      iconList,
      recommendList,
      weekendList
    }
  }
}
</script>

<style>

</style>
