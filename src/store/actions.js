import axios from 'axios';
import _ from 'lodash';
import { SET_PRODUCT_VALUE, SET_PRODUCT_FETCHING, SET_ORIGINAL_OBJECT, SET_ORIGINAL_CHANGED } from './constants';

export const _set_product_value = ({ commit }, input_object) => {
	commit(SET_PRODUCT_VALUE, { ...input_object });
};
export const _set_product_fetching = ({ commit }, { fetching }) => {
	commit(SET_PRODUCT_FETCHING, { fetching });
};

export const _set_original_changed = ({ commit }, { changed }) => {
	commit(SET_ORIGINAL_CHANGED, { changed });
};
export const _set_original_object = ({ commit, dispatch }, { new_original }) => {
	dispatch('_set_original_changed', { changed: false });
	commit(SET_ORIGINAL_OBJECT, { new_original });
};

export const _compare_and_set_value = ({ dispatch, rootState }, input_object) => {
	let { original } = rootState.Original;
	let { Producto } = rootState;

	dispatch('_set_product_value', input_object);

	if (_.isEqual(original, Producto)) {
		return dispatch('_set_original_changed', { changed: false });
	}
	return dispatch('_set_original_changed', { changed: true });
};
export const _get_get_product = async ({ dispatch, rootState }) => {
	try {
		let { fetching } = rootState.Producto;
		if (fetching) {
			return;
		}
		dispatch('_set_product_fetching', { fetching: true });

		let data = await axios.get('http://www.mocky.io/v2/5d6de07e30000048c38fbc9b');
		let keys = Object.keys(data.data.product);
		await Promise.all([
			...keys.map(i => dispatch('_set_product_value', { value: data.data.product[i], input: i })),
		]);
		dispatch('_set_original_object', { new_original: { ...rootState.Producto } });
		return Promise.resolve(data);
	} catch (error) {
		console.log('====================================');
		console.log(error);
		console.log('====================================');
	} finally {
		dispatch('_set_product_fetching', { fetching: false });
	}
};
