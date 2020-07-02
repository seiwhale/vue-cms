<template>
  <el-breadcrumb class="c-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="item in list"
        v-if="item.meta.title"
        :key="item.path"
        :to="item.redirect || item.path"
      >
        <span>
          {{getTitle(item.meta.title)}}
        </span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'BreadCrumb',
  data() {
    return {
      list: null,
    };
  },
  created() {
    this.getBreadcrumb();
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name);
      if (matched[0] && matched[0].name !== 'Home') {
        matched = [{ path: '/home', meta: { title: 'home' } }].concat(matched);
      }
      this.list = matched;
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
.c-breadcrumb {
  line-height: 60px;
}
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all 0.5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>

