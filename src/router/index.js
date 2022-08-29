import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ShowCaseView from "../views/ShowCaseView.vue"
import OtherView from "../views/OtherView.vue"
import ExampleView from '../views/ExampleView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/show_case',
    name: 'show_case',
    component: ShowCaseView
  },
  {
    path: '/other',
    name: 'other',
    component: OtherView
  },
  {
    path: '/example',
    name: 'example',
    component: ExampleView
  },
]

const router = new VueRouter({
  routes
})

export default router
