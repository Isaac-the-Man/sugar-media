import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from "@/views/Quiz";
import Stats from "@/views/Stats";
import Food from "@/views/Food";
import Data from "@/views/Data";
import Tactics from "@/views/Tactics";
import Cases from "@/views/Cases";
import End from "@/views/End";

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
    component: Quiz
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/data',
    name: 'Data',
    component: Data
  },
  {
    path: '/tactics',
    name: 'Tactics',
    component: Tactics
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats
  },
  {
    path: '/case-study',
    name: 'Cases',
    component: Cases
  },
  {
    path: '/end',
    name: 'End',
    component: End
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
