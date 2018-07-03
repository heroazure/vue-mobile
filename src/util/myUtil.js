/**
 * Created by xuwei on 2017/3/14.
 * 一些工具函数
 */
// 有时直接document.title = title无效，特别是微信端
function setDocumentTitle (title) {
  'use strict'
  setTimeout(function () {
    // 利用iframe的onload事件刷新页面
    document.title = title
    let iframe = document.createElement('iframe')
    iframe.src = '/favicon.ico' // 必须
    iframe.style.visibility = 'hidden'
    iframe.style.width = '1px'
    iframe.style.height = '1px'
    iframe.onload = function () {
      setTimeout(function () {
        document.body.removeChild(iframe)
      }, 0)
    }
    document.body.appendChild(iframe)
  }, 0)
}
export default {
  setDocumentTitle
}
