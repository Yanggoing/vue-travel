<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <router-link tag="li" :to="'/detail/'+item.id" class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img"
             :src="item.imgUrl"
             />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommond',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/css/mixins.styl'
  .title
    margin-top .4rem
    line-height .8rem
    background #eee
    text-indent .2rem

  .item
    display flex
    height 1.9rem
    overflow hidden

  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem

  .item-info
    flex 1
    padding .1rem
    min-width 0

    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()

    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()

    .item-btn
      line-height .44rem
      background #ff9300
      padding 0 .1rem
      border-radius .06rem
      color #fff
</style>
