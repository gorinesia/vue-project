import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: '',
    form: {
      firstName: 'AKINORI',
      lastName: 'SAKAKIBARA',
      Email: 'gorion.1213@gmail.com',
      tel: '090-4215-9231',
      birthday: '1989/12/13'
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