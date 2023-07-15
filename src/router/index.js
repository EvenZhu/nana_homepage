import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import ShowCaseView from "../views/ShowCaseView"
import WorksView from "../views/ShowCaseView"
import OtherView from "../views/OtherView"
import ExampleView from '../views/ExampleView'
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
    path: '/showCase',
    name: 'showCase',
    component: ShowCaseView
  },
  {
    path: '/works',
    name: 'works',
    component: WorksView
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
  mode: 'history',
  routes
})

export default router
