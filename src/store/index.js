import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import user from "./user";
import filter from "./productFilter";
import products from "./products";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      user,
      filter,
      products
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
