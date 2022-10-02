import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      basketList: []
    }
  },
  getters :{
    bigPacket : state => state.basketList.filter(i=> i.creditlimit>100)
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store
