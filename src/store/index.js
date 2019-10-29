import Vue from "vue";
import Vuex from "vuex";
import { Producto } from "./modules/Producto";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Producto
  }
});
