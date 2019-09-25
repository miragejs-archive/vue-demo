import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "./server";
import Todos from "./components/Todos";
import About from "./components/About";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Todos },
    { path: "/about", component: About }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
