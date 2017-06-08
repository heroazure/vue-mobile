/**
 * Created by xuwei on 2017/3/16.
 */
import axios from 'axios'
const timeout = 8000

axios.defaults.baseURL = '/api/'
axios.defaults.timeout = timeout
export default ({
                  url,
                  data = {},
                  method = 'get',
                  selfHandleMsg = false,
                  timeout = timeout,
                  config
                }) => {
  method = method.toLowerCase()
  let option = {
    url: url,
    method: method,
    timeout: timeout// 默认超时时间
  }
  option[method === 'get' ? 'params' : 'data'] = data

  option = Object.assign({}, option, config)
  return new Promise((resolve, reject) => {
    axios(option).then(({data}) => {
      if (!selfHandleMsg) {
        if (data.status.retCode !== 0) {
          alert(data.status.msg)
          reject()
        } else {
          resolve(data)
        }
      } else {
        resolve(data)
      }
    }).catch(error => {
      alert('网络异常，请重试...')
      reject(error)
    })
  })
}
