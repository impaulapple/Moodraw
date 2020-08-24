import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginFirst from '../views/Login-First.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  linkActiveClass: "active-class",
  routes: [
    {
      path: '/loginFirst',
      name: 'loginFirst',
      component: LoginFirst,
      props: true
    },
    {
      path: '/loginMain',
      name: 'loginMain',
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

