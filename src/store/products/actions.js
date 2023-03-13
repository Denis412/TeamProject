// import userApi from "../../api/user";

export async function FETCH_PRODUCTS({ commit }) {
  try {
    commit("UPDATE_PRODUCTS",product);
  } catch (error) {
    throw error;
  }
}
