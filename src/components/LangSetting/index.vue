<template>
  <el-dropdown class="language-box" @command="handleCommand" placement="bottom">
    <div>
      <icon class="language-box__icon" name="earth" :scale="2.9"></icon>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item  command="zh" :disabled="$i18n.locale === 'zh'">中文</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="$i18n.locale === 'en'">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'LanguageSetting',
  computed: {

  },
  methods: {
    handleCommand(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch('setLanguage', lang);
      const message = this.$t('app.switchlang');
      this.$message({
        message,
        type: 'success',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.language-box {
  &__icon {
    vertical-align: middle;
    color: #515151;
    transition: color 0.3s;
    &:hover {
      color: #41b883;
    }
  }
}
</style>

