/* eslint-enable */
<p align="center">
  <img width="250px" src="https://github.com/LishiJ/vue-cms/blob/master/pic/logo.png?raw=true">
</p>

<p align="center">
  <a href="https://www.codacy.com/app/LishiJ/vue-cms?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=LishiJ/vue-cms&amp;utm_campaign=Badge_Grade">
    <img src="https://api.codacy.com/project/badge/Grade/92886eee6c2f4327bd17fff55f2af8b9"/>
  </a>
  <a href="https://github.com/LishiJ/vue-cms/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="license">
  </a>
</p>

<p align="center">
  <a href="https://github.com/LishiJ/vue-cms/blob/master/README.md">说明文档</a>
</p>

VueCola 是一个美观的后台管理系统模板，参照简称 [Eden](https://Sakuyakun.github.io/eden-docs)（伊甸园）。主要使用了 vue 框架与 element-ui 组件库开发。VueCola 在后台集成方面没有过于复杂，只包含了最基础和最常用的功能。也易移除模块，当做基础模板进行开发。登陆页参考 vue-manager。

![1.png](https://github.com/LishiJ/vue-cms/blob/master/pic/F43F6564-A836-4389-BBAD-5A04F03CEFCA.png?raw=true)

![2.png](https://github.com/LishiJ/vue-cms/blob/master/pic/C0A32CFD-7797-499c-A217-6D079FF3D5F4.png?raw=true)

![3.png](https://github.com/LishiJ/vue-cms/blob/master/pic/4C3E7F14-11B7-4eef-9A55-E6E6888C38E9.png?raw=true)

![4.png](https://github.com/LishiJ/vue-cms/blob/master/pic/1815672C-688A-4c2e-9F24-5704C9D91049.png?raw=true)

![5.png](https://github.com/LishiJ/vue-cms/blob/master/pic/743840F4-52C1-4aec-B0EE-B2BA4680FC0E.png?raw=true)

VueCola拥有：

- [x] 舒适配色与布局
- [x] 权限控制
- [x] 动态路由
- [x] MOCK 数据
- [x] 登录登出
- [x] 界面锁定
- [x] 伸缩侧边栏
- [x] 自适应布局
- [x] 页面标签控制
- [x] 国际化多语言
- [x] 个人中心

还有更多 ...

## 目录结构

```
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── api            请求接口
│   ├── assets         静态资源
│   ├── components     组件
│   ├── lang           国际化
│   ├── main.js        入口文件
│   ├── router         路由
│   ├── store          Store
│   ├── svg            svg 存放目录
│   ├── utils          辅助工具方法
│   └── views          页面
└── .babelrc          babel 配置文件
```

## 启动

执行 serve 脚本将自动启动 http://localhost:8080

```
# install dependency
npm install

# develop
npm run serve

# build for production environment
npm run build

# lint
npm run lint
```
