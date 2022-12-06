import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Inbox',
    component: () => import(/* webpackChunkName: "about" */ '../views/InboxView.vue')
  },
  {
    path: '/scheduled',
    name: 'Scheduled',
    component: () => import(/* webpackChunkName: "about" */ '../views/ScheduledView.vue')
  },
  {
    path: '/flagged',
    name: 'Flagged',
    component: () => import(/* webpackChunkName: "about" */ '../views/FlaggedView.vue')
  },
  {
    path: '/groceries',
    name: 'Groceries',
    component: () => import(/* webpackChunkName: "about" */ '../views/GroceriesView.vue')
  },
  {
    path: '/reminders',
    name: 'Reminders',
    component: () => import(/* webpackChunkName: "about" */ '../views/RemindersView.vue')
  },
  {
    path: '/kitchen',
    name: 'Kitchen Remodel',
    component: () => import(/* webpackChunkName: "about" */ '../views/KitchenRemodelView.vue')
  },
  {
    path: '/vacation',
    name: 'Vacation',
    component: () => import(/* webpackChunkName: "about" */ '../views/VacationView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
