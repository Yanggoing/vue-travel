<template>
  <div class="header">
    <div class="header-left iconfont icon-arrow-left">
    </div>
    <div class="header-input">
      <span class="iconfont icon-search"></span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont icon-arrow-down"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'HomeHeader',
  setup () {
    const store = useStore()
    const city = store.state.city
    return { city }
  }

}
</script>

<style scoped lang="stylus">
  @import "../../assets/css/varibles.styl"
  .header {
    display: flex;
    line-height: $headerHeight
    background-color: $bgColor
    color: #fff

    .header-left {
      float: left;
      width: .64rem
    }

    .header-input {
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      margin-top: .12rem;
      margin-left: .2rem;
      padding-left: .1rem;
      border-radius: 5px;
      background: #fff;
      color: #ccc;
    }

    .header-right {
      float: right;
      min-width: 1.04rem;
      padding 0 .1rem
      text-align: center
      color white
    }
  }

  .icon-arrow-left {
    text-align: center;
    font-size: .4rem;
  }

</style>
