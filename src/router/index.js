import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import home from '@/components/home'
import services from '@/components/services'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/home/:id/:age/:weight',
      name: 'home',
      props: true,
      component: home
    },
    {
      path: '/services',
      name: 'services',
      component: services
    }
   
  ]
})
