// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vue-ydui/dist/ydui.base.css'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import {Input} from 'vue-ydui/dist/lib.px/input'
import {Button, ButtonGroup} from 'vue-ydui/dist/lib.px/button';
import {CellGroup, CellItem} from 'vue-ydui/dist/lib.px/cell';
Vue.component(Input.name,Input)
Vue.component(Button.name,Button)
Vue.component(ButtonGroup.name,ButtonGroup)
Vue.component(CellGroup.name,CellGroup)
Vue.component(CellItem.name,CellItem)
Vue.config.productionTip = false
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
