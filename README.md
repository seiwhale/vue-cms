<p align="center">
  <img width="250px" src="https://note.youdao.com/yws/api/personal/file/WEB63c44a9e93b186c27e57b735ed34523d?method=getImage&version=362&cstk=2oaEjCYG">
</p>

<p align="center">
  <a href="https://travis-ci.org/Sakuyakun/vue-eden">
    <img src="https://img.shields.io/travis/Sakuyakun/vue-eden.svg?style=flat-square" alt="GitHub release">
  </a>
  <a href="https://www.codacy.com/app/Sakuyakun/vue-eden?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Sakuyakun/vue-eden&amp;utm_campaign=Badge_Grade">
    <img src="https://img.shields.io/codacy/grade/7f511c51cd5b4f42bf930e2bbd187e3c.svg?style=flat-square">
  </a>
  <a href="https://github.com/Sakuyakun/vue-eden/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/Sakuyakun/vue-eden.svg?style=flat-square" alt="license">
  </a>
</p>

<p align="center">
  <a href="https://Sakuyakun.github.io/eden-docs">说明文档</a>
</p>

VueCola 是一个美观的后台管理系统模板，参照简称 [Eden](https://Sakuyakun.github.io/eden-docs)（伊甸园）。主要使用了 vue 框架与 element-ui 组件库开发。VueCola 在后台集成方面没有过于复杂，只包含了最基础和最常用的功能。也易移除模块，当做基础模板进行开发。登陆页参考 vue-manager。

![1.png](https://note.youdao.com/yws/api/personal/file/WEB67fab1f5e54359f5ecd7b8048e3fbf09?method=getImage&version=344&cstk=2oaEjCYG)

![2.png](https://note.youdao.com/yws/api/personal/file/WEBf78b7602a99874fe15e6e19dcf71ffc7?method=getImage&version=346&cstk=2oaEjCYG)

![3.png](https://note.youdao.com/yws/api/personal/file/WEB90eb938b532bbd224497da65f71b27f4?method=getImage&version=345&cstk=2oaEjCYG)

![4.png](https://note.youdao.com/yws/api/personal/file/WEBb50e12a9b554ac75d89585f8738a9d24?method=getImage&version=343&cstk=2oaEjCYG)

![5.png](https://note.youdao.com/yws/api/personal/file/WEB4897591027f0094c2fed67716f709095?method=getImage&version=342&cstk=2oaEjCYG)

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
