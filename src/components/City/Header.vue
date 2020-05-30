<template>
  <div class="header">
    城市选择
    <router-link to="/home">
      <div class="header-back iconfont icon-arrow-left"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/css/varibles.styl"
  .header
    position relative
    height $headerHeight
    overflow hidden
    line-height $headerHeight
    text-align center
    font-size .32rem
    color #fff
    background $bgColor

    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #fff

</style>
