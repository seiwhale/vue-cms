import Vue from 'vue';
import Router from 'vue-router';
import Main from '../views/main/index.vue';
import ErrorPage401 from '../views/errorPage/401.vue';
import ErrorPage404 from '../views/errorPage/404.vue';
import routerCofig from './routerConfig';

Vue.use(Router);

const routerFilter = () => {
  const routerArr = [];
  routerCofig.map((item) => {
    if (item.component) {
      routerArr.push(item);
    } else {
      item.children.forEach((el) => {
        if (!/^\//.test(el.path)) {
          el.path = (`${item.path}/${el.path}`);
        }
        routerArr.push(el);
      });
    }
    return item;
  });
  return routerArr;
};

export const constantRouterMap = [
  {
    path: '',
    component: Main,
    redirect: 'home',
    children: routerFilter(),
  },
  {
    path: '/401',
    component: ErrorPage401,
    hidden: true,
  }, {
    path: '/404',
    component: ErrorPage404,
    hidden: true,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/about/index.vue'),
  },
  {
    path: '/lock',
    name: 'lock',
    component: () =>
      import(/* webpackChunkName: "lock" */ '../views/lock/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/login/index.vue'),
  },
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap,
});
