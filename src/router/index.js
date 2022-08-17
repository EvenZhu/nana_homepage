import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ExampleView from '../views/ExampleView.vue'
import ShowCaseView from "../views/ShowCaseView.vue"
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
    path: '/example',
    name: 'example',
    component: ExampleView
  },
]

const router = new VueRouter({
  routes
})

export default router
