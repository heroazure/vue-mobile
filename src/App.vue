<template>
  <div id="app" class="hlj-container-stretch app">
    <transition :name="viewTransition">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState({
      direction: state => state.vux.direction
    }),
    viewTransition () {
      console.log('vux-pop-' + (this.direction === 'forward' ? 'in' : 'out'))
      if (!this.direction) return ''
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
    }
  }
}
</script>

<style lang="less">
  @import "~@assets/css/index";

  .router-view {
    width: 100%;
  }

  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 300ms;
    height: 100%;
    position: absolute;
    top: 0;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
