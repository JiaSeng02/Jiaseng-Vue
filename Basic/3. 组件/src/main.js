import App from "./App.js";
import Vue from "./vue.browser.js";

new Vue({
    render: (h) => h(App), // 渲染组件App
}).$mount("#app");