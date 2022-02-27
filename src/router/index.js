import Vue from "vue";
import Router from "vue-router";
import homepage from "@/views/homepage";
import login from "@/views/login";
import signin from "@/views/signin";
import page from "@/views/page";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "homepage",
      component: homepage
    },
    {
      path: "/page/:name",
      name: "page",
      component: page,
      children: [
        {
          path: "",
          name: "login",
          component: login
        },
        {
          path: "signin",
          name: "signin",
          component: signin
        }
      ]
    }
  ]
});
