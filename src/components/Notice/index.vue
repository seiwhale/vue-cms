<template>
  <el-badge is-dot class="notice-box">
    <icon name="notice" :scale="2.8"></icon>
  </el-badge>
</template>

<script>
export default {
  name: 'Notice',
};
</script>

<style lang="scss" scoped>
.notice-box {
  width: 26px;
  height: 34px;
  cursor: pointer;
  transition: color 0.28s;
  svg {
    color: #515151;
    transition: color 0.28s;
    &:hover {
      color: #41b883;
    }
  }
}
</style>
