import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import './assets/style/border.css';
import './assets/style/icon/font_2769330_d865pv1r1gj/iconfont.css';
createApp(App)
  .use(router)
  .mount('#app');
