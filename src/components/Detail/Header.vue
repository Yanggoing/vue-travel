<template>
  <div>
    <router-link tag="div" to="/home" class="header-abs" v-show="showAbs">
      <div class="header-abs-back iconfont icon-arrow-left">
      </div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/home" class="header-fixed-back iconfont icon-arrow-left">
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

export default {
  name: 'DetailHeader',
  setup () {
    const showAbs = ref(true)
    const opacityStyle = reactive({
      opacity: 0
    })
    const handleScroll = () => {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageXOffset
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        opacityStyle.opacity = opacity
        showAbs.value = false
      } else {
        showAbs.value = true
      }
    }
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    return { showAbs, opacityStyle }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/css/varibles.styl"
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    background rgba(0, 0, 0, .8)

    .header-abs-back
      padding-top .18rem
      padding-left .16rem
      color #fff
      font-size .4rem

  .header-fixed
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    overflow hidden
    line-height $headerHeight
    text-align center
    font-size .32rem
    color #fff
    background $bgColor

    .header-fixed-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
