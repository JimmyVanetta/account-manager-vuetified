import Vue from 'vue'
import Vuex from 'vuex'
import accounts from './modules/AccountStore'
import employees from './modules/EmployeeStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    accounts,
    employees
  }
})
