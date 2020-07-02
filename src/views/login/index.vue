<template>
  <div class="login-page">
    <!-- 语言切换及Github地址 -->
    <div class="login-header">
      <LanguageSetting class="lang" />
      <el-tooltip class="svg-github" effect="dark" content="Fork Me" placement="bottom">
        <a href="https://github.com/seiwhale" target="_blank"><icon name="github" :scale="2.5"></icon></a>
      </el-tooltip>
    </div>
    <!-- 登录/忘记密码框 -->
    <div class="login-box">
      <el-col :class="translateLeft" :span="10">
        <!-- 登录 -->
        <div v-if="notforget">
          <div class="logo">
            <icon name="logo" :scale="8"></icon>
            <div class="title">
              <a>
                <span>{{$t('login.colaPart1')}}</span><span class="subtitle">{{$t('login.colaPart2')}}</span>
              </a>
            </div>
          </div>
          <!-- 表单 -->
          <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login-form">
            <el-form-item prop="username">
                <el-input :placeholder="$t('login.userplaceholder')" v-model="loginForm.username"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input :placeholder="$t('login.pwdplaceholder')" type="password" v-model="loginForm.password"></el-input>
              </el-form-item>
              <el-form-item class="btn">
                <el-button :loading="loading" type="primary" @click="handleLogin('loginForm')">{{$t('login.btn')}}</el-button>
              </el-form-item>
          </el-form>
          <!-- 表单底部 -->
          <div class="login-footer">
            <el-col :span="12">
              <el-checkbox v-model="remember" name="type">{{$t('login.remember')}}</el-checkbox>
            </el-col>
            <el-col class="forgetpwd" :span="12">
              <span @click="wrapSwitch(false)">{{$t('login.forgetpwd')}}</span>
            </el-col>
          </div>
        </div>
        <!-- 忘记密码 -->
        <div v-else>
          <div class="title forgetwrap-title">
            <a>
              <span>{{$t('login.colaPart1')}}</span><span class="subtitle">{{$t('login.colaPart2')}}</span>
            </a>
          </div>
          <div class="forget-form">
            <el-form :model="forgetForm" :rules="forgetRules"  ref="forgetForm">
              <el-form-item>
                <el-input :placeholder="$t('login.forget_email')" v-model="forgetForm.email"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input :placeholder="$t('login.forget_code')" v-model="forgetForm.code"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input :placeholder="$t('login.forget_passwrd')" type="password" v-model="forgetForm.newPassword"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input :placeholder="$t('login.confirm_passwrd')" type="password" v-model="forgetForm.confirmPassword"></el-input>
              </el-form-item>
              <el-form-item class="btn">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-button @click="wrapSwitch(true)" type="primary">{{$t('login.forget_back')}}</el-button>
                  </el-col>
                  <el-col :span="12">
                    <el-button @click="forgetHandle" type="primary">{{$t('login.forget_btn')}}</el-button>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>
      <el-col :class="translateRight" :span="14">
        <div class="wallpaper"></div>
      </el-col>
    </div>
  </div>
</template>

<script>
import LanguageSetting from '../../components/LangSetting';
import storage from '../../utils/storage';

const useRegexp = {
  exist: /\S+/,
};
export default {
  name: 'Login',
  data() {
    const validobj = {
      username: [
        { ruleName: 'exist', error: this.$t('login.valid.userexist') },
      ],
      password: [{ ruleName: 'exist', error: this.$t('login.valid.pwdexist') }],
    };

    const _typeof = val =>
      Object.prototype.toString
        .call(val)
        .replace(/^\S+\s/, '')
        .replace(/]$/, '')
        .toLocaleLowerCase();

    const validfn = (rule, value, callback) => {
      const _validobj = validobj[rule.field.replace(/^\S+(?=\.)\./g, '')];
      for (let i = 0; i < _validobj.length; i++) {
        const _rule = useRegexp[_validobj[i].ruleName];
        if (_typeof(_rule) === 'regexp') {
          if (!_rule.test(value)) {
            return callback(new Error(_validobj[i].error));
          }
        } else if (_typeof(_rule) === 'function') {
          if (_rule(value, _validobj[i].params)) {
            return callback(new Error(_validobj[i].error));
          }
        }
      }
      callback();
    };

    const validPwdfn = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.forgetForm.newPassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {
      remember: true,
      loading: false,
      switchLeft: false,
      switchRight: false,
      notforget: true,
      // 登录表单
      loginForm: {
        username: storage.get('loginUser') || 'admin',
        password: '',
      },
      rules: {
        username: [{ validator: validfn, trigger: 'blur', required: true }],
        password: [{ validator: validfn, trigger: 'blur', required: true }],
      },
      // 忘记密码
      forgetForm: {
        email: '',
        code: '',
        newPassword: '',
        confirmPassword: '',
      },
      forgetRules: {
        email: [{ validator: validfn, trigger: 'blur', required: true }],
        code: [{ validator: validfn, trigger: 'blur', required: true }],
        newPassword: [{ validator: validfn, trigger: 'blur', required: true }],
        confirmPassword: [{ validator: validPwdfn, trigger: 'blur' }],
      },
    };
  },
  computed: {
    translateLeft() {
      return {
        'translate-left': true,
        'switch-left': this.switchLeft,
      };
    },
    translateRight() {
      return {
        'translate-right': true,
        'switch-right': this.switchLeft,
      };
    },
  },
  mounted() {
    this.$notify({
      title: '登陆提示',
      message: '用户名 admin 密码随意输入',
      position: 'top-left',
      duration: 0,
    });
  },
  methods: {
    wrapSwitch(state) {
      this.switchLeft = !this.switchLeft;
      this.switchRight = !this.switchRight;
      setTimeout(() => {
        this.notforget = state;
        this.$refs[state ? 'forgetForm' : 'loginForm'].resetFields();
      }, 300);
    },
    handleLogin(formName) {
      this.loading = true;
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            const { username, password } = this.loginForm;
            this.remember
              ? storage.set('loginUser', username)
              : storage.remove('loginUser', username);
            const response = await this.$store.dispatch('loginbyUser', {
              username: username.trim(),
              password,
            });
            console.log(response);
            this.loading = false;
            if (response.code === 0) {
              this.$notify.closeAll();
              this.$router.push({ path: '/' });
            } else {
              this.$message({
                message: response.message,
                type: 'error',
                duration: 10000,
                showClose: true,
              });
            }
          } catch (error) {
            throw new Error(error);
          }
        } else {
          this.loading = false;
          this.$message.error(this.$t('login.validfaild'));
        }
      });
    },
    forgetHandle() {
      this.$message.success(this.$t('login.pwdChanged'));
      this.wrapSwitch(true);
    },
  },
  components: {
    LanguageSetting,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/default.scss";
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  .login-header {
    position: absolute;
    top: 24px;
    right: 30px;
    display: flex;
    justify-content: center;
    .lang {
      padding: 0 20px;
    }
  }
  .translate-left,
  .translate-right {
    will-change: auto;
    transform: translateX(0px);
    transition: transform 0.6s ease-in-out;
  }
  .switch-left {
    transform: translateX(525px);
  }
  .switch-right {
    transform: translateX(-375px);
  }
}

.login-box {
  width: 900px;
  height: 400px;
  background: white;
  border-radius: 4px;
  transform: translateY(-10px);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);

  .el-col {
    height: 100%;
  }
  // 右侧背景图
  .wallpaper {
    width: 100%;
    height: 100%;
    background: url("../../assets/img/loginwallpaper.jpg");
    background-size: cover;
  }

  .logo {
    padding-top: 26px;
    text-align: center;
  }

  .title {
    font-weight: bold;
    color: $main-color;
    padding-top: 8px;
    font-size: 22px;
    a {
      cursor: cell;
    }
    a:before {
      content: "[";
      opacity: 0;
      margin-right: 10px;
      transform: translateX(-10px);
      transition: transform 0.2s, opacity 0.2s;
    }

    a:after {
      content: "]";
      opacity: 0;
      margin-left: 10px;
      transform: translateX(10px);
      transition: transform 0.2s, opacity 0.2s;
    }

    a:hover:before,
    a:hover:after {
      opacity: 1;
      transform: translateX(0);
    }

    .subtitle {
      color: $sub-color;
    }
  }

  .forgetwrap-title {
    padding-top: 30px;
    padding-left: 15px;
  }

  .forget-form {
    padding: 20px 30px 30px;
    padding-bottom: 0;
  }

  .login-form {
    padding: 30px;
    padding-bottom: 0;
  }
  .forget-form,
  .login-form {
    .el-form-item__content {
      line-height: 40px;
    }
    .el-input__inner {
      padding-top: 2px;
      height: 40px;
      line-height: 40px;
    }

    .btn button {
      width: 100%;
      padding: 12px 20px;
    }
  }

  .login-footer {
    padding: 0 30px;
    .forgetpwd {
      text-align: right;
      span {
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        color: #606266;
      }
    }
  }
}
</style>

