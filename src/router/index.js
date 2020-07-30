import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import FreeInspection from '../views/FreeInspection.vue'
import ServiceArea from '../views/ServiceArea.vue'
import Blog from '../views/Blog.vue'
import Learn from '../views/Learn.vue'
import BlogPost from '../components/BlogPost.vue'
import MakeBlogPost from '../views/MakeBlogPost.vue'
import EditBlogPost from '../views/EditBlogPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Roofing Solutions of Texas'
    }
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
    path: '/make-blog-post',
    name: 'Make Blog Post',
    component: MakeBlogPost
  },
  {
    path: '/blog/:id',
    name: 'Blog Post',
    component: BlogPost
  },
  {
    path: '/blog/:id/edit',
    name: 'Edit Blog Post',
    component: EditBlogPost
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
