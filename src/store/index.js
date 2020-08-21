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
    textMessage: '' 
  },
  getters: {
    textMessage: state => state.textMessage
  },
  mutations: {
    updatetextMessage(state, newMessage) {
      state.textMessage = newMessage;
    }
  },
  actions: {
    updatetextMessage({commit}, newMessage) {
      commit('updatetextMessage', newMessage);
    }
  }
})