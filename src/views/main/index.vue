<template>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-container>
      <el-aside :width="asideWidth">
        <SideBar/>
      </el-aside>
      <el-main>
        <TagView/>  
        <section class="main">
          <transition name="fade" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </section>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from '../../components/Header';  // eslint-disable-line
import SideBar from '../../components/SideBar';
import TagView from '../../components/tagView'

export default {
  name: 'Main',
  data() {
    return {};
  },
  computed:{
    asideWidth() {
      return this.$store.getters.getSliderStateWidth
    }
  },
  components: {
    Header,SideBar,TagView
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/default.scss";

.el-container {
  width: 100%;
  height: 100%;
}

.el-header {
  padding: 0;
  // font-size: 0;
  line-height: 60px;
  background: white;
  box-sizing: border-box;
  overflow: hidden;
}

.el-aside {
  transition: width 0.3s;
  background: $el-aside-bg;
  color: $el-aside-color;
  overflow: hidden;
}

.el-main {
  padding: 0;
  height: 100%;
  overflow: auto;
  background-color: #f1f2f7
}

.main{
  height: calc(100% - 40px);
  padding: 15px;
  overflow: auto;
  box-sizing: border-box;
}
</style>

