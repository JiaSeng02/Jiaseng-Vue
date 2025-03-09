import Vuex from "vuex";
import Vue from "vue";
import carousel from "./carousel";
import setting from "./setting";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    carousel,
    setting,
  },
  strict: true,
});
