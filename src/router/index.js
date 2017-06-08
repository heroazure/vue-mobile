import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/components/book/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Book',
      component: Book
    }
  ]
})
