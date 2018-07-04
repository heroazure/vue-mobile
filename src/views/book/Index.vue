<template>
  <div class="hlj-container-wrap">
    <div class="test">
      test
      <div class="test3 ignore">
        test3
      </div>
    </div>
    <div class="test4">
      test4
    </div>
    <AspectBox :ratio="5" width="200px">
      <div class="test5"></div>
    </AspectBox>
    <div class="example">example</div>
  </div>
</template>
<style scoped lang="less">
  .test {
    font-size: 20px;
  }

  .test3.ignore {
    font-size: 10px;
  }

  .test4 {
    position: relative;
    @media (min-width: 200px) {
      font-size: 20px;
      border: 1px solid #eee;
    }
    &::after {
      position: absolute;
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background: #000;
      right: 0;
    }
  }

  .test5 {
    width: 100%;
    height: 100%;
    background: #000;
  }

  @svg px1-border {
    height: 2px;
  @rect {
    fill: var(--color, black);
    width: 100%;
    height: 50%;
  }
  }
  .example {
    border: 1px solid transparent;
    border-image: svg(px1-border param(--color #00b1ff)) 2 2 stretch;
  }
</style>
<script>
import AspectBox from '@components/aspect-box'

export default {
  name: 'book',
  components: {
    AspectBox
  },
  data () {
    return {}
  }
}
</script>
