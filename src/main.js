import 'vue-ydui/dist/ydui.base.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import plugin from '@util/plugin'

Vue.use(plugin)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
