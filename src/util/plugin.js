/**
 * Created by xuwei on 2018/2/24.
 * vue的相关自定义全局插件
 */
import accounting from 'accounting'
import bus from './bus'
import {Input} from 'vue-ydui/dist/lib.rem/input'
import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button'
import {CellGroup, CellItem} from 'vue-ydui/dist/lib.rem/cell'

const components = {
  [Input.name]: Input,
  [Button.name]: Button,
  [ButtonGroup.name]: ButtonGroup,
  [CellGroup.name]: CellGroup,
  [CellItem.name]: CellItem
}

const doPrototype = (vue) => {
  accounting.settings = {
    currency: {
      symbol: '', // default currency symbol is '$'
      format: '%s%v', // controls output: %s = symbol, %v = value/number (can be object: see below)
      decimal: '.', // decimal point separator
      thousand: ',', // thousands separator
      precision: 2 // decimal places
    },
    number: {
      precision: 0, // default precision on numbers is 0
      thousand: ',',
      decimal: '.'
    }
  }
  vue.accounting = accounting
  vue.formatNumber = accounting.formatNumber
  vue.formatMoney = accounting.formatMoney
  vue.toFixed = accounting.toFixed
  vue.unformat = accounting.unformat
}

const install = (Vue, opts = {}) => {
  if (install.installed) return
  Vue.prototype.$bus = bus
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
  doPrototype(Vue.prototype)
}

export default {
  install
}
