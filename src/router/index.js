import Vue from 'vue'
import VueRouter from 'vue-router'
import Information from '../views/Information.vue'
import Question from '../views/Question.vue'
import TextMessage from '../views/TextMessage.vue'
import ConfirmForm from '../views/ConfirmForm.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Information',
    component: Information
  },
  {
    path: '/question',
    name: 'Question',
    component: Question
  },
  {
    path: '/textMessage',
    name: 'TextMessage',
    component: TextMessage
  },
  {
    path: '/confirm',
    name: 'ConfirmForm',
    component: ConfirmForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
