<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import DetailBanner from './Banner'
import DetailHeader from './Header'
import DetailList from './List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  setup () {
    const route = useRoute()
    const sightName = ref('')
    const bannerImg = ref('')
    const gallaryImgs = ref([])
    const list = ref([])

    const getDetailInfo = async () => {
      let res = await axios.get('/api/detail.json', {
        params: { id: route.params.id}
      });
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        sightName.value = data.sightName
        bannerImg.value = data.bannerImg
        gallaryImgs.value = data.gallaryImgs
        list.value = data.categoryList
      }
    }

    onMounted(() => {
      getDetailInfo()
    })

    return {
      sightName,
      bannerImg,
      gallaryImgs,
      list
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
