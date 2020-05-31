<template>
  <div>
    <router-link tag="div" to="/home" class="header-abs" v-show="showAbs">
      <div class="header-abs-back iconfont icon-arrow-left">
      </div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/home" class="header-fixed-back iconfont icon-arrow-left" >
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
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
