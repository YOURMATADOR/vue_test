import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 1
  },
  mutations: {
    add_counter: function(state) {
      state.counter++;
    }
  },
  actions: {},
  modules: {}
});
