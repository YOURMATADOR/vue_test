import Vue from 'vue';
import Vuex from 'vuex';
import { Producto } from './modules/Producto';
import { Original } from './modules/Original';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		Producto,
		Original,
	},
});
