<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      class="sidebar-menu"
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      :background-color="bg"
      :text-color="tc"
      :active-text-color="atc"
    >
       <sidebar-item/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './sidebarItem.vue';

export default {
  name: 'SideBar',
  data() {
    return {
      bg: '#556d84',
      tc: '#fff',
      atc: '#41B883',
    };
  },
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse() {
      return this.sidebar.sliderState !== 'full';
    },
  },
  components: {
    SidebarItem,
  },
  mounted() {
    console.log(this.$route.path);
  },
};
</script>

<style lang="scss" scoped>
.sidebar-menu{
  border-right: none;
  width: 100%;
}
</style>

