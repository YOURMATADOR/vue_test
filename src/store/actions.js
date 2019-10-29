import axios from "axios";
import { SET_PRODUCT_VALUE, SET_PRODUCT_FETCHING } from "./constants";

export const _set_product_value = ({ commit }, input_object) => {
  commit(SET_PRODUCT_VALUE, { ...input_object });
};
export const _set_product_fetching = ({ commit }, { fetching }) => {
  commit(SET_PRODUCT_FETCHING, { fetching });
};

export const _get_get_product = async ({ dispatch, rootState }) => {
  try {
    let { fetching } = rootState.Producto;
    if (fetching) {
      return;
    }
    dispatch("_set_product_fetching", { fetching: true });

    let data = await axios.get(
      "http://www.mocky.io/v2/5d6de07e30000048c38fbc9b"
    );
    let keys = Object.keys(data.data.product);
    
    await Promise.all([
      ...keys.map(i =>
        dispatch("_set_product_value", { value: data.data.product[i], input: i })
      )
    ]);
    return Promise.resolve(data);
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  } finally {
    dispatch("_set_product_fetching", { fetching: false });
  }
};
