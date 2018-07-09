// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import elementVue from './elementVue'
import router from './router'
import Test from './Test'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.debug = true;
Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})