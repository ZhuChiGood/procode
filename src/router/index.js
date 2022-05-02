import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const Home = () => import(/* webpackChunkName: "home" */ "../views/home");
const Example = () => import(/* webpackChunkName: "home" */ "../views/example");
const robot = () => import(/* webpackChunkName: "home" */ "../views/robotptr");
const robotsynopsis = () => import(/* webpackChunkName: "home" */ "../views/robotsynopsis");
const robotverfsions = () => import(/* webpackChunkName: "home" */ "../views/robotversions");
const robotOnlineuse = () => import(/* webpackChunkName: "home" */ "../views/robotOnlineuse");
const robotvideo = () => import(/* webpackChunkName: "home" */ "../views/robotvideo");
export default new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/example",
      name: "example",
      component: Example
    },
    {
      path: "/robot",
      name: "robot",
      component: robot,
      children: [
        {
          path: "/robotsynopsis",
          name: "robotsynopsis",
          component: robotsynopsis
        },
        {
          path: "/robotverfsions",
          name: "robotverfsions",
          component: robotverfsions
        },
        {
          path: "/robotOnlineuse",
          name: "robotOnlineuse",
          component: robotOnlineuse
        },
        {
          path: "/robotvideo",
          name: "robotvideo",
          component: robotvideo
        }
      ]
    }
  ]
});
