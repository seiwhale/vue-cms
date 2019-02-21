<template>
  <vue-seamless 
    :class-option="classOption" 
    :data="messageList"
    class="seamless-wrap"
  >
    <ul>
      <li v-for="(item,index) in messageList" :key="index">
        <div class="seamless-wrap__content">
          <span class="seamless-wrap__date" v-text="item.date"></span>
          <span class="seamless-wrap__title" v-text="item.msg"></span>
        </div>
      </li>
    </ul>  
  </vue-seamless> 
</template>

<script>
import VueSeamless from "vue-seamless-scroll";
export default {
  name: 'SeamlessScroll',
  props: {
    messageList: {
      type: Array,
      required: true
    },
    singleHeight: {
      type: Number,
      default: 20
    },
    limitMoveNum: {
      type: Number,
      default: 3
    },
    waitTime: {
      type: Number,
      default: 3000
    },
    hoverStop: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classOption() {
      return {
        singleHeight: this.singleHeight,
        limitMoveNum: this.limitMoveNum,
        waitTime: this.waitTime,
        hoverStop: this.hoverStop
      }
    }
  },
  components: {
    VueSeamless,
  }
};
</script>

<style lang="scss" scoped>
  .seamless-wrap {
    flex: 1;
    text-align: right;
    min-width: 300px;
    font-size: 14px;
    height: 60px;
    overflow: hidden;
    cursor: pointer;
    &__content{
      transition: color .5s;
      height: 60px;
      width: 100%;
      color: #737373;
      &:hover{
        color: #39986d;
      }
    }
    &__date{
      padding-right: 10px
    }
  }
</style>

