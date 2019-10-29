import { SET_ORIGINAL_OBJECT, SET_ORIGINAL_CHANGED, SET_PRODUCT_FETCHING } from '../constants';
import { _set_original_object, _set_original_changed } from '../actions';

export const Original = {
	state: { original: null, changed: false, fetching: false },
	mutations: {
		[SET_ORIGINAL_OBJECT](state, { new_original }) {
			state.original = new_original;
		},
		[SET_ORIGINAL_CHANGED](state, { changed }) {
			state.changed = changed;
		},
		[SET_PRODUCT_FETCHING](state, { fetching }) {
			state.fetching = fetching;
		},
	},
	actions: {
		_set_original_object,
		_set_original_changed,
	},
};
