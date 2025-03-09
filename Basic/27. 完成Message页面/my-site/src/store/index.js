import Vuex from "vuex";
import Vue from "vue";
import carousel from "./carousel";
import setting from "./setting";
import about from "./about";
import project from "./project";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    carousel,
    setting,
    about,
    project,
  },
  strict: true,
});
