/**
 * Created by xuwei on 2017/3/16.
 */
import ajax from 'service/ajax'

const url='book'

export default {
  get:(data = {})=>{
    return ajax({
      url: url,
      data: data,
      method:'get'
    })
  },
  post:(data = {})=>{
    return ajax({
      url: url,
      data: data,
      method:'post'
    })
  },
  get2:(data = {})=>{
    return ajax({
      url: 'http://test.eshangtech.com:6060/HighWay/Handler/handler_ajax.ashx?action_type=getTotalServerPart',
      data: data,
      method:'get'
    })
  }
}
