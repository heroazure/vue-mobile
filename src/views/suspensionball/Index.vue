<template>
  <div>
    <div id="ball" class="ball"></div>
  </div>
</template>
<style lang="less" scoped>
  .ball {
    position: fixed;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ed424b;
    background-clip: padding-box;
  }
</style>
<script>
  import Inertia from './inertia'
  export default{
    data () {
      return {}
    },
    created () {
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new Inertia(document.getElementById('ball'))
      })
    }
  }
</script>
