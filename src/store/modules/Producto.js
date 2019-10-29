import { SET_PRODUCT_VALUE, SET_PRODUCT_FETCHING } from "../constants";
import {
  _set_product_value,
  _get_get_product,
  _set_product_fetching
} from "../actions";
export const Producto = {
  state: {
    fetching: false,
    ["name"]: "gggg",
    ["plain_description"]: "",
    ["model"]: "",
    ["brand"]: "",
    ["lenght"]: "",
    ["height"]: "",
    ["width"]: "",
    ["distance_unit"]: "",
    ["weight"]: "",
    ["mass_unit"]: "",
    ["colors"]: "",
    ["sizes"]: ""
  },
  mutations: {
    [SET_PRODUCT_VALUE](state, { input, value }) {
      state[input] = value;
    },
    [SET_PRODUCT_FETCHING](state, { fetching }) {
      state.fetching = fetching;
    }
  },
  actions: {
    _set_product_value,
    _get_get_product,
    _set_product_fetching
  }
};
