<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img"
             :src="item.imgUrl"
             alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommond',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/a9/a9411416ff215fe2a3.water.jpg_200x200_3110fb7b.jpg',
        title: '上海迪士尼乐园',
        desc: '全球最大的迪士尼城堡'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_200x200_6d7378b2.jpg',
        title: '东方明珠',
        desc: '259米透明悬空观光廊了解一下~'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1811/7e/7ecbd353174c66b1a3.img.jpg_200x200_f661532a.jpg',
        title: '上海欢乐谷',
        desc: '敢上1200米长的木质过山车吗？'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1512/b5/b5be74400df235aa90.water.jpg_200x200_192ddb7f.jpg',
        title: '环球金融中心观光厅',
        desc: '全球最大的迪士尼城堡'
      }, {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/a9/a9411416ff215fe2a3.water.jpg_200x200_3110fb7b.jpg',
        title: '上海迪士尼乐园',
        desc: '上海夜景尽收眼底'
      }]
    }
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
