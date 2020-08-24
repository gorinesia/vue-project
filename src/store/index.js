import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gender:'',
    year:'',
    month:'',
    day:'',
    question1:'',
    question2:'',
    question3:'',
    textMessage: '' 
  },
  mutations
})