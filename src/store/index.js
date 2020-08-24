import Vue from 'vue'
import Vuex from 'vuex'

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
  getters: {
    gender: state => state.gender,
    year: state => state.year,
    month: state => state.month,
    day: state => state.day,
    question1: state => state.question1,
    question2: state => state.question2,
    question3: state => state.question3,
    textMessage: state => state.textMessage,
  },
  mutations: {
    updateGender(state, newMessage) {
      state.gender = newMessage;
    },
    updateYear(state, newMessage) {
      state.year = newMessage;
    },
    updateMonth(state, newMessage) {
      state.month = newMessage;
    },
    updateDay(state, newMessage) {
      state.day = newMessage;
    },
    updateQuestion1(state, newMessage) {
      state.question1 = newMessage;
    },
    updateQuestion2(state, newMessage) {
      state.question2 = newMessage;
    },
    updateQuestion3(state, newMessage) {
      state.question3 = newMessage;
    },
    updateTextMessage(state, newMessage) {
      state.textMessage = newMessage;
    },
  }
})