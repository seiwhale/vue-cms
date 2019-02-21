<template>
  <div @click="handleScreenFull" class="fullscreen">
    <icon class="fullscreen__icon" name="fullscreen" :scale="scale"></icon>
  </div>
</template>

<script>
import screenfull from "screenfull";
export default {
  name: "fullscreen",
  props: {
    scale: {
      type: Number,
      default: 2.5
    },
    iconClass: {
      type: String
    },
    enabled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      status: false
    };
  },
  methods: {
    handleScreenFull() {
      if (!this.enabled) return null;
      if (!screenfull.enabled) {
        this.$message({
          message: "fullscreen can not work",
          type: "warning"
        });
        return false;
      }
      screenfull.toggle();
    }
  }
};
</script>

<style lang="scss" scoped>
.fullscreen {
  &__icon {
    vertical-align: middle;
    color: #515151;
    transition: color 0.28s;
    &:hover {
      cursor: pointer;
      color: #41b883;
    }
  }
}
</style>

