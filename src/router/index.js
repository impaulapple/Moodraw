import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginFirst from '../views/Login-First.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  linkActiveClass: "active-class",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: LoginFirst,
      props: true
    },
    {
      path: '/about',
      name: 'About',
      props: true,
      component: () => import('../views/Login-Main.vue')
    },
    {
      path: '/test',
      name: 'Test',
      props: true,
      component: () => import('../views/Test.vue')
    }
  ]
})

