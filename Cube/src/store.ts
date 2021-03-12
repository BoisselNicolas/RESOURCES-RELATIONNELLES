import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import * as Cookies from 'js-cookie';
import cookie from 'cookie';

export const store = createStore({
  plugins: [createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: false }),
      removeItem: key => Cookies.remove(key)
    }
  })],
  state() {
    return {
      role: 0,
      token: ""
    }
  },
  mutations: {
    SetRole: (state: any, status) => state.role = status,
    SetToken: (state: any, status) => state.token = status
  }
})