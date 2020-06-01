<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="data.swiperList"></home-swiper>
    <home-icons :list="data.iconList"></home-icons>
    <home-recommend :list="data.recommendList"></home-recommend>
    <home-weekend :list="data.weekendList"></home-weekend>
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
      let res = await this.axios.get('/api/index.json?city=' + city)
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
