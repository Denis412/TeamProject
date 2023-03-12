import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import user from "./user";
import filter from "./productFilter";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      user,
      filter
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
