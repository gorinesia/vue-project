import Vue from 'vue'
import VueRouter from 'vue-router'
import UserInformations from '../views/UserInformations.vue'
import ChoiceQuestions from '../views/ChoiceQuestions.vue'
import ConsultationMessage from '../views/ConsultationMessage.vue'
import ConfirmForm from '../views/ConfirmForm.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'UserInformations',
    component: UserInformations
  },
  {
    path: '/choiceQuestions',
    name: 'ChoiceQuestions',
    component: ChoiceQuestions
  },
  {
    path: '/consultationMessage',
    name: 'ConsultationMessage',
    component: ConsultationMessage
  },
  {
    path: '/confirmForm',
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
