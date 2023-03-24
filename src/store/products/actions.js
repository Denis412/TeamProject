// import userApi from "../../api/user";

export function FETCH_PRODUCTS({ commit }, products) {
  try {
    console.log(products);
    commit("UPDATE_PRODUCTS", products);
  } catch (error) {
    throw error;
  }
}
