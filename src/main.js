import Vue from 'vue';
import '@/registerServiceWorker';
import '@/config/globalComponents/index'; // GlobalComponents
import router from './router';
import store from './store';
import App from './App.vue';

// Global SVG Component

Vue.config.productionTip = false;

new Vue({
  name: 'AppVue',
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
