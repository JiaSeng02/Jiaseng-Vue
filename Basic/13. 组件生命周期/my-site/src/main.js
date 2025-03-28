// 入口文件
import "./mock";
import Vue from "vue";
//import App from "./App.vue";
//import App from "./demo-dom/App.vue";
import App from "./demo-timer/App.vue";
import "./styles/global.less";
import router from "./router";
import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;

import "./api/banner";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
