<template>
  <swiper ref="mySwiper">
    <swiper-slide v-for="(page,index) of pages" :key="index">
      <div class="icons">
        <div class="icon-img" :key="item.id" v-for="item of page">
          <img class="icon-img-content" :src="item.imgUrl" alt="">
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  setup (props) {
    const pages = computed(() => {
      const pages = []
      props.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    })
    return { pages }
  },
  computed: {
    pages () {

    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/css/varibles.styl"
  .icons
    display flex
    flex-wrap wrap
    text-align center

    .icon-img
      width 25%
      padding-top .2rem

      .icon-img-content
        width .66rem
        height .66rem

      .icon-desc
        margin-top .2rem
        color $darkTextColor
</style>
