<!--suppress JSValidateTypes -->
<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hot"
               :key="item.id"
               @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" :ref="elem => elems[key] = elem" v-for="(item,key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { ref, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  setup (props) {
    const store = useStore()
    const router = useRouter()
    const currentCity = store.state.city
    const elems = ref({})
    let scroll = null
    const wrapper = ref(null)
    const handleCityClick = (city) => {
      store.commit('changeCity', city)
      router.push('/home')
    }
    watch(() => props.letter, (letter, prevLetter) => {
      if (letter && scroll) {
        const element = elems.value[letter]
        scroll.scrollToElement(element)
      }
    })
    onMounted(() => {
      scroll = new BScroll(wrapper.value, {
        click: true
      })
    })
    return { currentCity, elems, handleCityClick, wrapper }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/css/varibles.styl"
  .border-bottom
    &:before
      border-color #ccc

  .border-topbottom
    &:before
      border-color #ccc

    &:after
      border-color #ccc

  .list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden

  .title
    line-height .54rem
    background #eee
    padding-left .2rem
    font-size .26rem
    color #666

  .button-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden

    .button-wrapper
      float left
      width 33.33%

      .button
        margin .1rem
        padding .1rem 0
        border .02rem solid #ccc
        border-radius .06rem
        text-align center

  .item-list
    .item
      line-height .76rem
      padding-left .2rem
</style>
