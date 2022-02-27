// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;
//在代码中直接使用bus总线
/**
 * this.$bus.$emit()
 * this.$bus.$on()
 */
const bus = new Vue();
Vue.prototype.$bus = bus;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
