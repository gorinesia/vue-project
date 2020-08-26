import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gender: '',
    year: '',
    month: '',
    day: '',
    question1: '',
    question2: '',
    question3: '',
    textMessage: ''
  },
  mutations: {
    setUser(state, user) {
      state.gender = user.gender;
      state.year = user.year;
      state.month = user.month;
      state.day = user.day
    },
    setQuestion(state, user) {
      state.question1 = user.question1;
      state.question2 = user.question2;
      state.question3 = user.question3;
    },
    setTextMessage(state, user) {
      state.textMessage = user.textMessage
    }
  }
})