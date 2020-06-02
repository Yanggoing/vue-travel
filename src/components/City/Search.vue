<!--suppress JSValidateTypes -->
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
            @click="handleCityClick(item.name)"
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
import { ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  setup (props) {
    const store = useStore()
    const router = useRouter()
    const keyword = ref('')
    const list = ref([])
    let timer = ref(null)
    const search = ref(null)
    const hasNoData = computed(() => !list.length)
    watch(keyword, (keyword, prevKeyword) => {
      if (timer.value) {
        clearTimeout(timer)
        timer = null
      }
      if (!keyword) {
        list.value = []
        return
      }
      timer = setTimeout(() => {
        const result = []
        for (const i in props.cities) {
          props.cities[i].forEach(item => {
            if (item.spell.indexOf(keyword) > -1 || item.name.indexOf(keyword) > -1) {
              result.push(item)
            }
          })
        }
        list.value = result
      }, 100)
    })
    const handleCityClick = city => {
      store.commit('changeCity', city)
      router.push('/home')
    }
    onMounted(() => {
      // eslint-disable-next-line no-new
      new BScroll(search.value, { click: true })
    })
    return { keyword, list, hasNoData, handleCityClick, search }
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
