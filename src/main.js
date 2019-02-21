import Vue from 'vue';
import Element from 'element-ui';
import Icon from 'vue-svg-icon/Icon.vue';  // eslint-disable-line
import App from './App.vue';
import router from './router/router';
import store from './store/index';
import './router/routerControl';
import './registerServiceWorker';
import './assets/style/index.scss';

import i18n from './lang';

Vue.config.productionTip = false;

Vue.component('icon', Icon);

Vue.use(Element, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value),
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
