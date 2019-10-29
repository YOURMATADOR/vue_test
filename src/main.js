import Vue from "vue";
import VueRouter from "vue-router";
import app from "./App.vue";
import {
  MdButton,
  MdContent,
  MdTabs,
  MdList,
  MdField,
  MdMenu,
  MdProgress
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import "./styles/main.css";
import store from "./store";

Vue.use(VueRouter);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdMenu);
Vue.use(MdTabs);
Vue.use(MdField);
Vue.use(MdList);
Vue.use(MdProgress);
Vue.config.productionTip = false;

const linkActiveClass = "my-link-active-class";

// pass custom class to Vue Material
Vue.material.router.linkActiveClass = linkActiveClass;

const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar }
];
// pass custom class
const router = new VueRouter({
  routes // short for `routes: routes`,
  // linkActiveClass
});

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount("#app");
