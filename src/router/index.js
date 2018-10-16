import Vue from 'vue'
import Router from 'vue-router'
import store from '@store'

let Book = (resolve) => require(['@views/book/Index'], resolve)
let Demo = (resolve) => require(['@views/demo/Index'], resolve)

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
    path: '/demo',
    name: 'Demo',
    meta: {
      title: 'demo'
    },
    component: Demo
  }
]
const router = new Router({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
})

// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', '0')
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
  endTime = Date.now()
})
methods.forEach(key => {
  let method = router[key].bind(router)
  router[key] = function (...args) {
    isPush = true
    method.apply(null, args)
  }
})

router.beforeEach((to, from, next) => {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('updateDirection', {direction: ''})
      } else {
        store.commit('updateDirection', {direction: 'reverse'})
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount + '')
    to.path !== '/' && history.setItem(to.path, historyCount + '')
    store.commit('updateDirection', {direction: 'forward'})
  }

  next()
})

router.afterEach((to, from, next) => {
  isPush = false
  window.scrollTo(0, 0)
})

export default router
