import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: '',
    form: {
      gender: 'Man',
      birthday: '1989/12/13',
      question: 'OK!!!',
      textMessage: 'Thank you!!!'
      
    }
  },
  getters: {
    message: state => state.message
  },
  mutations: {
    updateMessage(state, newMessage) {
      state.message = newMessage;
    }
  },
  actions: {
    updateMessage({commit}, newMessage) {
      commit('updateMessage', newMessage);
    }
  }
})