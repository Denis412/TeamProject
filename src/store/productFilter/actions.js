// import userApi from "../../api/user";

export async function FETCH_PRODUCT_FILTERS({ commit }) {
  try {
    commit("UPDATE_PRODUCT_FILTER",product);
  } catch (error) {
    throw error;
  }
}
