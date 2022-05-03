import { createStore } from 'vuex'
import { account } from './modules/account.module'
import { alert } from './modules/alert.module'
import { users } from './modules/users.module'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    account,
    alert,
    users
  }
})
