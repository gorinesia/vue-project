import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form: {
      gender: 'Man',
      birthday: '1989/12/13',
      question: 'OK!!!',
    },
    gender:'',
    textMessage: '' 
  },
  getters: {
    gender: state => state.gender,
    textMessage: state => state.textMessage,
  },
  mutations: {
    updateTextMessage(state, newMessage) {
      state.textMessage = newMessage;
    }
  }
})