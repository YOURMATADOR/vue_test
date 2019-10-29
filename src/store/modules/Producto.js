import { SET_PRODUCT_VALUE } from '../constants';
import {
	_set_product_value,
	_get_get_product,
	_set_product_fetching,
	_compare_and_set_value,
	_set_original_object,
} from '../actions';
export const Producto = {
	state: {
		['long_name']: '',
		['plain_description']: '',
		['model']: '',
		['brand']: '',
		['length']: '',
		['height']: '',
		['width']: '',
		['distance_unit']: '',
		['weight']: '',
		['mass_unit']: '',
		['colors']: '',
		['sizes']: '',
	},
	mutations: {
		[SET_PRODUCT_VALUE](state, { input, value }) {
			state[input] = value;
		},
	},
	actions: {
		_set_product_value,
		_get_get_product,
		_set_product_fetching,
		_set_original_object,
		_compare_and_set_value,
	},
};
