import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginFirst from '../views/LoginFirst.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active-class",
  routes: [
    {
      path: '/',
      name: 'loginFirst',
      component: LoginFirst,
      props: true
    },
    {
      path: '/loginMain',
      name: 'loginMain',
      props: true,
      component: () => import('../views/LoginMain.vue')
    },
    {
      path: '/loginPolicy',
      name: 'loginPolicy',
      props: true,
      component: () => import('../views/LoginPolicy.vue')
    },
    {
      path: '/test',
      name: 'Test',
      props: true,
      component: () => import('../views/Test.vue')
    }
  ]
})
// router.replace({ path: '*', redirect: '/' })

export default router

