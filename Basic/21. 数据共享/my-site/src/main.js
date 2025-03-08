import Vue from "vue";
import App from "./App.vue";
import "./styles/styles.css";
import store from "./store";

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
