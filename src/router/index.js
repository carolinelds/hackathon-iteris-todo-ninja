import Vue from 'vue'
import VueRouter from 'vue-router'
import MyDashboard from '../views/MyDashboard.vue'
import MyProjects from '../views/MyProjects'
import MyTeams from '../views/MyTeams.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MyDashboard',
    component: MyDashboard
  },
  {
    path: '/projects',
    name: 'MyProjects',
    component: MyProjects
  },
  {
    path: '/team',
    name: 'MyTeams',
    component: MyTeams
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
