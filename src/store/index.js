import { createStore } from 'vuex'

// 创建一个store实例
const store = createStore({
  state: {
    city: '北京',
    location: 101010100,
  },
  actions: {
    changeCity(ctx, city) {
      ctx.commit('changeCity', city)
    },
  },
  mutations: {
    changeCity(state, city) {
      state.city = city.name
      state.location = city.id
    },
  },
})
export default store
