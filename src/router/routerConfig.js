import Home from '../views/home/index.vue';
import Profile from '../views/profile/index.vue';
import Component1 from '../views/components/page1.vue';
import Component2 from '../views/components/page2.vue';
import Component3 from '../views/components/page3.vue';
import HelloPage from '../views/hello/index.vue';

export default [
  // 首页
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      icon: 'test',
      title: 'home',
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    hidden: true,
    meta: {
      title: 'profile',
    },
  },
  // 控件
  {
    path: '/widget',
    component: HelloPage,
    name: 'widget',
    meta: {
      title: 'widget',
      icon: 'widgets',
    },
  },
  // 卡片列表
  {
    path: '/panels',
    component: HelloPage,
    name: 'panels',
    meta: {
      title: 'panels',
      icon: 'panels',
    },
  },
  // 权限页面 只有 admin 用户才可访问
  {
    path: '/permission',
    component: HelloPage,
    name: 'permission',
    meta: {
      title: 'permission',
      icon: 'test',
      roles: ['admin'],
    },
  },
  // 表格
  {
    path: '/datatable',
    component: HelloPage,
    name: 'datatable',
    meta: {
      title: 'datatable',
      icon: 'table',
    },
  },
  // 组件
  {
    path: '/components',
    name: 'components',
    meta: {
      title: 'components',
      icon: 'comp',
    },
    children: [
      {
        path: 'page1',
        component: Component1,
        name: 'page1',
        meta: {
          title: 'page1',
        },
      },
      {
        path: 'page2',
        component: Component2,
        name: 'page2',
        meta: {
          title: 'page2',
        },
      },
      {
        path: 'page3',
        component: Component3,
        name: 'page3',
        meta: {
          title: '  ',
        },
      },
    ],
  },
  // {
  //   path: '*',
  //   redirect: '/404',
  //   hidden: true,
  // },
];
