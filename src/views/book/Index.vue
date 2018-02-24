<template>
  <div class="hlj-container-wrap">
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">书名：</span>
        <yd-input slot="right" required v-model="bookName" max="20" placeholder="请输入书名"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">价钱：</span>
        <yd-input slot="right" type="number" v-model="price" placeholder="请输入价钱"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <div class="hlj-container">
      <yd-button size="large" type="primary" @click.native="onSure">添加</yd-button>
    </div>
    <div class="swipe-cell">
      <div class="swipe-cell-content" @touchstart="onTouchStart1" @touchmove="onTouchMove1" @touchend="onTouchEnd1"
           :style="{transform:`translateX(${translateX}px)`}">
        我是内容
      </div>
      <div class="swipe-cell-del" @click="onDel1">
        删除
      </div>
    </div>
    <div class="list">
      <h2 class="list-title">书籍列表</h2>
      <yd-cell-item v-for="item in books" :key="item._id" type="label" @touchstart.native="onTouchStartCell"
                    @touchend.native="onTouchEndCell" arrow>
        <span slot="left">{{item.bookName}}</span>
        <span slot="right">${{item.price}}</span>
      </yd-cell-item>
    </div>
  </div>
</template>
<style scoped lang="less">
  @import "~@base/fn";

  .list {
    margin-top: 10px;
    background-color: #fff;
    &-title {
      position: relative;
      padding: 10px 0;
      color: #333;
      font-weight: normal;
      &:after {
        .setBottomLine();
      }
    }
  }

  .swipe-cell {
    position: relative;
    height: 50px;
    line-height: 50px;
    &-content {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      transition: transform .2s linear;
    }
    &-del {
      position: absolute;
      z-index: 1;
      right: 0;
      top: 0;
      background-color: #f00;
      height: 100%;
      width: 50px;/*no*/
      text-align: center;
    }
  }
</style>
<script>
  import api from '@service/book'
  export default{
    name: 'book',
    data(){
      return {
        bookName: '',
        price: '',
        books: [],
        translateX: 0

      }
    },
    mounted(){
      api.get()
        .then(({data}) => {
          this.books = data
        })
    },
    methods: {
      onSure(){
        api.post({bookName: this.bookName, price: this.price})
          .then(({data}) => {
            this.books.push(data)
          })
      },
      onTouchStartCell(e){
        e.preventDefault()
        this.timeout = setTimeout(() => {
          alert('确认删除吗？')
        }, 2000)
      },
      onTouchEndCell(){
        clearTimeout(this.timeout)
      },
      onTouchStart1(e){
        e.preventDefault()
        this.startX = e.changedTouches[0].pageX
        this.startY=e.changedTouches[0].pageY
      },
      onTouchMove1(e){
        e.stopPropagation()
        this.endX = e.changedTouches[0].pageX
        this.endY=e.changedTouches[0].pageY
        let bx=this.endX-this.startX
        let by=this.endY-this.startY
        //y方向的移动大于x方向的，认为是纵向移动
        if(Math.abs(bx) - Math.abs(by)<0){
            return
        }
        //左划
        if (bx < 0) {
          let len = Math.abs(this.translateX) + Math.abs(bx)
          this.translateX = len >= 50 ? -50 : -len
        } else {
          let ln = this.translateX + bx
          this.translateX = ln >= 0 ? 0 : ln
        }
      },
      onTouchEnd1(){
        if(Math.abs(this.translateX)>20){
          this.translateX=-50
        }else {
          this.translateX=0
        }
      },
      onDel1(){
          alert('确认删除吗？')
      }
    }
  }
</script>
