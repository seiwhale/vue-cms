<template>
  <div class="sidebar-wrap">
    <template v-for="item in routerConfig" v-if="!item.hidden">
      <!-- 一级菜单 -->
      <router-link
        v-if="!(item.children && item.children.length)"
        :key="item.name"
        :to="renderRouterPath(item.path)"
      >
        <el-menu-item :index="item.path">
          <icon
            v-if="item.meta && item.meta.icon"
            :name="item.meta.icon"
            :scale="2">
          </icon>
          <span slot="title"
            v-if="item.meta && item.meta.title">
            {{getTitle(item.meta.title)}}
          </span>
        </el-menu-item>
      </router-link>
      <!-- 多级菜单 -->
      <el-submenu
        v-else
        class="sidebar-wrap__menu"
        :key="item.name"
        :index="item.name || item.path">
        <template slot="title">
          <icon
            v-if="item.meta && item.meta.icon"
            :name="item.meta.icon"
            :scale="2">
          </icon>
          <span slot="title" v-if="item.meta && item.meta.title">
            {{sliderState === 'full' ? getTitle(item.meta.title) : ''}}
          </span>
        </template>
        <template v-for="child in item.children" v-if="!child.hidden">
          <!-- 二级子菜单 -->
          <sidebar-item
            v-if="child.children && child.children.length > 0"
            :routes="[child]"
            :key="child.path">
          </sidebar-item>
          <router-link
            v-else
            :to="child.path"
            :key="child.name">
            <el-menu-item :index="child.path">
              <icon
                v-if="child.meta && child.meta.icon"
                :name="child.meta.icon"
                :scale="2">
              </icon>
              <span slot="title" v-if="child.meta && child.meta.title">
                {{getTitle(child.meta.title)}}
              </span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
import routerConfig from '../../router/routerConfig.js';

export default {
  name: 'SidebarItem',
  data() {
    return {
      routerConfig,
    };
  },
  computed: {
    sliderState() {
      return this.$store.getters.sidebar.sliderState;
    },
  },
  methods: {
    renderRouterPath(path) {
      if (!/^\//.test(path)) {
        return `home${path}`;
      } return path;
    },
    getTitle(title) {
      if (this.$te(`route.${title}`)) {
        return this.$t(`route.${title}`);
      }
      return title;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/default.scss';

.sidebar-wrap {
  .el-submenu,
  .el-menu-item {
    font-size: 0;
    svg {
      margin-right: 17px;
    }
    span {
      font-size: 14px;
    }
    .svg-icon {
      fill: currentColor;
    }
  }
  .el-submenu .el-menu-item {
    background-color: $submenu-bg !important;
    &:hover {
      background-color: $menu-hover !important;
    }
  }
}

</style>

