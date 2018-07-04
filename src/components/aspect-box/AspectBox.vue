<template>
  <div aspect-box :style="style">
    <div aspect-box-content>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AspectBox',
  props: {
    // 盒子的宽高比
    ratio: {
      type: Number,
      default: 1
    },
    // 盒子的宽度
    width: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    style () {
      return {
        // --是css3的变量定义语法
        '--aspect-ratio': this.ratio,
        width: this.width
      }
    }
  }
}
</script>

<style lang="less" scoped>
  // 定义比例的盒子
  [aspect-box] {
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 1px;
      margin-left: -1px;
      height: 0;
    }
  }

  [aspect-box-content] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  [style*="--aspect-ratio"]::before {
    padding-top: calc(100% / (var(--aspect-ratio)));
  }
</style>
