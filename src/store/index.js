/**
 * Created by xuwei on 2017/3/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// no transitoin in demo site
const shouldUseTransition = !/transition=none/.test(location.href)

export default new Vuex.Store({
  modules: {
    vux: {
      state: {
        demoScrollTop: 0,
        isLoading: false,
        direction: shouldUseTransition ? 'forward' : ''
      },
      mutations: {
        updateDemoPosition (state, payload) {
          state.demoScrollTop = payload.top
        },
        updateLoadingStatus (state, payload) {
          state.isLoading = payload.isLoading
        },
        updateDirection (state, payload) {
          if (!shouldUseTransition) {
            return
          }
          state.direction = payload.direction
        }
      },
      actions: {
        updateDemoPosition ({commit}, top) {
          commit({type: 'updateDemoPosition', top: top})
        }
      }
    }
  }
})
