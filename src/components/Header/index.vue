<template>
  <div class="header-wrap">
    <!-- 左侧：Logo -->
    <div class="left-box">
      <icon class="el-header__icon logo" name="logo" :scale="4"/>
      <span class="el-header__title">
        Vue<span class="subtitle">Cola</span>
      </span>
      <span class="el-header__version">
        {{system_version}}
      </span>
    </div>
    <!-- 中间：面包屑、消息 -->
    <div class="middle-box">
      <div class="middle-box__cgwrap" @click="handleSwitchNavbar">
        <icon class="el-header__icon" name="category" :scale="2.8"></icon>
      </div>
      <div class="middle-box__msglist">
        <BreadCrumb />
        <SeamlessScroll
          :messageList="messageList"
          :singleHeight="60"
          :limitMoveNum="2"
        />
      </div>
    </div>
    <!-- 右侧：语言、全屏及个人信息 -->
    <ul class="right-box">
      <!-- 语言选择 -->
      <li>
        <LangSetting/>
      </li>
      <!-- 消息提示 -->
      <li>
        <Notice/>
      </li>
      <!-- 全屏 -->
      <li>
        <FullScreen/>
      </li>
      <!-- 个人信息 -->
      <li>
        <PersonalInfoDrop/>
      </li>
    </ul>
  </div>
</template>

<script>
import BreadCrumb from '../BreadCrumb';
import SeamlessScroll from '../SeamlessScroll';
import LangSetting from '../LangSetting';
import Notice from '../Notice';
import FullScreen from '../FullScreen';
import PersonalInfoDrop from '../PersonalInfoDrop';
import dayjs from 'dayjs';

export default {
  name: 'Header',
  data() {
    return {
      system_version: 'V1.0.0',
      messageList: [
        {
          date: dayjs().format('YYYY-MM-DD'),
          msg: this.$t('msg.msg1'),
        },
        {
          date: dayjs().format('YYYY-MM-DD'),
          msg: this.$t('msg.msg2'),
        },
        {
          date: dayjs().format('YYYY-MM-DD'),
          msg: this.$t('msg.msg3'),
        },
      ],
    };
  },
  methods: {
    handleSwitchNavbar() {
      this.$store.dispatch('toggleSideBar');
    },
  },
  components: {
    BreadCrumb,
    SeamlessScroll,
    LangSetting,
    Notice,
    FullScreen,
    PersonalInfoDrop,
  },
};
</script>

<style lang="scss">
@import "../../assets/style/default.scss";

.el-header {
  .header-wrap {
    height: 60px;
    display: flex;
    font-size: 0;
  }

  .left-box {
    min-width: 240px;
    padding-left: 12px;
    box-sizing: border-box;
    user-select: none;
  }

  &__icon {
    vertical-align: middle;
    position: relative;
    &.logo {
      top: -8px;
    }
  }

  &__title {
    font-size: 20px;
    font-weight: bold;
    color: $main-color;
    .subtitle {
      color: $sub-color;
    }
  }
  &__version {
    background: #eaeaea;
    font-weight: bold;
    color: $main-color;
    padding: 3px 8px;
    font-size: 12px;
    margin-left: 8px;
    border-radius: 3px;
    vertical-align: top;
  }
  .middle-box {
    flex: 1;
    display: flex;
    &__cgwrap {
      width: 60px;
      .el-header__icon {
        color: #515151;
        cursor: pointer;
      }
    }
    &__msglist {
      flex: 1;
      display: flex;
    }
  }
  .right-box {
    display: flex;
    li{
      margin-left: 20px;
    }
  }
}
</style>
