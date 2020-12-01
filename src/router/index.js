import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from "@/views/Quiz";
import Stats from "@/views/Stats";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'Quiz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Quiz
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router