require('es6-promise').polyfill();

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import FreeInspection from '../views/FreeInspection.vue'
import ServiceArea from '../views/ServiceArea.vue'
import Blog from '../views/Blog.vue'
import Learn from '../views/Learn.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/roofing-services',
    name: 'Services',
    component: Services
  },
  {
    path: '/service-area',
    name: 'Service Area',
    component: ServiceArea
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/free-inspection',
    name: 'Free Inspection',
    component: FreeInspection
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
