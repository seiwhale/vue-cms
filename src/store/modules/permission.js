import { constantRouterMap } from '../../router/router';
import routerConfig from '../../router/routerConfig';
import * as types from '../mutations';

console.log(constantRouterMap);
console.log(routerConfig);
const routePermission = (roles, route) => {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) > -1);
  }
  return true;
};

const filterAsyncRouter = (asyncRouterMap, roles) => {
  const routers = asyncRouterMap.filter((route) => {
    if (routePermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles);
      }
      return true;
    }
    return false;
  });
  return routers;
};

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
  },
  mutations: {
    [types.SET_ROUTERS]: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
    },
  },
  actions: {
    generateRoutes({ commit }, roles) {
      return new Promise((resolve) => {
        let routers = null;
        // 如果 roles 角色中存在 admin 则直接返回所有路由, 否则进行路由过滤
        routers = roles.indexOf('admin') > -1 ? routerConfig : filterAsyncRouter(routerConfig, roles);
        commit(types.SET_ROUTERS, routers);
        resolve();
      });
    },
  },
};

export default permission;
