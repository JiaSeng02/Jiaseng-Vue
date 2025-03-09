import { Store, install } from "vuex";
import Vue from "vue";
import carousel from "./carousel";
import setting from "./setting";
import about from "./about";
import project from "./project";
if (!window.Vuex) {
  install(Vue);
}

export default new Store({
  modules: {
    carousel,
    setting,
    about,
    project,
  },
  strict: true,
});
