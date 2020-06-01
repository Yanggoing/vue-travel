import Vuex from 'vuex'

let defalutCity = '上海'
try {
  if (localStorage.getItem('city')) {
    defalutCity = localStorage.getItem('city')
  }
} catch (e) {

}

export default Vuex.createStore({
  state: {
    city: defalutCity
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.setItem('city', city)
      } catch (e) {

      }
    }
  },
  getters: {
    doubleCity (state) {
      return state.city + '' + state.city
    }
  },
  actions: {
    // changeCity (ctx, city) {
    //   ctx.commit('changeCity', city)
    // }
  },
  modules: {
  }
})
