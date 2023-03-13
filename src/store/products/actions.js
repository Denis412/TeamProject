// import userApi from "../../api/user";

export async function FETCH_PRODUCTS({ commit },product) {
  try {
    commit("UPDATE_PRODUCTS",product);
  } catch (error) {
    throw error;
  }
}
