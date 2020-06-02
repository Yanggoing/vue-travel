<template>
  <div>
    <city-header></city-header>
    <city-search :cities="data.cities"></city-search>
    <city-list :letter="letter" :cities="data.cities" :hot="data.hotCities"></city-list>
    <city-alphabet @change="handleLetterChange" :cities="data.cities"></city-alphabet>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import CityHeader from './Header'
import CitySearch from './Search'
import CityList from './List'
import CityAlphabet from './Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  setup () {
    const { letter, handleLetterChange } = useLetterLogic()
    const { data } = useCityLogic()
    return { data, letter, handleLetterChange }
  }
}
const useCityLogic = () => {
  const data = reactive({
    cities: {},
    hotCities: []
  })
  const getCityInfo = async () => {
    let res = await axios.get('/api/city.json')
    res = res.data
    if (res.ret && res.data) {
      const result = res.data
      data.cities = result.cities
      data.hotCities = result.hotCities
    }
  }
  onMounted(() => {
    getCityInfo()
  })
  return { data }
}

const useLetterLogic = () => {
  const letter = ref('')
  const handleLetterChange = selected => {
    letter.value = selected
  }
  return { letter, handleLetterChange }
}
</script>

<style scoped>

</style>
