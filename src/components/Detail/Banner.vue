<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           :src="bannerImg"
      >
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number banner-icon iconfont icon-image">
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary @close="handleGallaryClose" v-show="showGallary" :imgs="gallaryImgs"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import { ref } from 'vue'
import CommonGallary from '../common/gallary/Gallary'
import FadeAnimation from '../common/fade/Fade'

export default {
  name: 'DetailBanner',

  components: {
    CommonGallary,
    FadeAnimation
  },

  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },

  setup () {
    const showGallary = ref(false)
    const handleBannerClick = () => {
      showGallary.value = true
    }
    const handleGallaryClose = () => {
      showGallary.value = false
    }
    return { showGallary, handleBannerClick, handleGallaryClose }
  }

}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%

    .banner-img
      width 100%

    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))

      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem

      .banner-number
        height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        line-height .32rem
        font-size .24rem
        background rgba(0, 0, 0, .8)

        .banner-icon
          font-size .2rem
</style>
