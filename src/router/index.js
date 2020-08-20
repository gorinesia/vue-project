import Vue from 'vue'
import VueRouter from 'vue-router'
import NameForm from '../views/NameForm.vue'
import ContactForm from '../views/ContactForm.vue'
import BirthDayForm from '../views/BirthDayForm.vue'
import ConfirmForm from '../views/ConfirmForm.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'NameForm',
    component: NameForm
  },
  {
    path: '/contact',
    name: 'ContactForm',
    component: ContactForm
  },
  {
    path: '/birthday',
    name: 'BirthDayForm',
    component: BirthDayForm
  },
  {
    path: '/confirm',
    name: 'ConfirmForm',
    component: ConfirmForm
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
