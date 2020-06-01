<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
      <swiper-slide :key="item.id" v-for="item of list">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'HomeSwiper',
  setup (props) {
    const swiperOptions = {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true,
      autoplay: true
    }
    const showSwiper = computed(() => props.list.length)
    return { swiperOptions, showSwiper }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper-img
    width: 100%;

  .wrapper
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    overflow: hidden;

  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
</style>
