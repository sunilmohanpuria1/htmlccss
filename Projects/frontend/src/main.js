import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import useradd from './components/useradd.vue';

Vue.use(VueRouter)
const routes = [
  { path: '/', component: HomePage },
  { path: '/useradd', component: useradd }
]
Vue.config.productionTip = false;

const router=new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
