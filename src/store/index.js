import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import user from "./user";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      user,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
