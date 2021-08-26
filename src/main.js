import Vue from 'vue';
import App from './App.vue';
// import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// 이미지 쉽게 불러오는 플러그인 
import common from '@/plugin/common';
// import ScrollPicker from 'vue3-scroll-picker';
//store.js를 불러오는 코드
import { store } from "./store";
library.add(faPlus, faCheck, faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

// Vue.use(VueRouter)
Vue.use(Antd);
// Vue.use(ScrollPicker);
Vue.config.productionTip = false;

Vue.use(common);

new Vue({
  // ScrollPicker,
  store,
  // router,
  render: h => h(App),
}).$mount('#app');
