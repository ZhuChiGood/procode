import Vue from "vue";
import VueI18n from "vue-i18n";
import "../components";
import router from "../router";
import App from "./app";
import "filters";
import "directives";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

//国际化
Vue.use(VueI18n);
Vue.use(ElementUI);

const i18n = new VueI18n();

new Vue({
  el: "#app",
  i18n,
  router,
  render: (createElement) => createElement(App)
});
