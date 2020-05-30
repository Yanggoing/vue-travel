<template>
  <div>
    <div class="search">
      <!--suppress HtmlFormInputWithoutLabel -->
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
    </div>
    <div v-show="keyword" class="search-content" ref="search">
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
        >
          {{item.name}}
        </li>
        <li v-show="hasNoData" class="search-item border-bottom">
          没有找到匹配项
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list.length = 0
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach(item => {
            if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/css/varibles.styl"
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor

    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      padding 0 .1rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666

  .search-content
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
    overflow hidden
    z-index 1

    .search-item
      line-height .62rem
      padding-left .2rem
      background #fff
      color #666
</style>
