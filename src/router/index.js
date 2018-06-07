import Vue from 'vue'
import Router from 'vue-router'
let Book = (resolve) => require(['@views/book/Index'], resolve)
let Suspensionball = (resolve) => require(['@views/suspensionball/Index'], resolve)

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'Book',
    meta: {
      title: 'book'
    },
    component: Book
  },
  {
    path: '/ball',
    name: 'ball',
    meta: {
      title: 'ball'
    },
    component: Suspensionball
  }
]
const router = new Router({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
