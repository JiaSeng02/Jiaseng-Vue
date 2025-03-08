// 数据仓库模块
import Vuex from "vuex";
import Vue from "vue";
import loginUser from "./loginUser";
import counter from "./counter";
Vue.use(Vuex); // 应用vuex插件

const store = new Vuex.Store({
  modules: {
    counter,
    loginUser,
  },
  strict: true, // 开启严格模式后，只允许通过mutation改变状态
});

window.store = store;

export default store;
