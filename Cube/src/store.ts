import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      role: 0
    }
  },
  mutations: {
    SetRole(state: any, status: any){
        state.role = status
    }
  }
})