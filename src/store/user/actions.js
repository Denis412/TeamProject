import userApi from "../../sdk/user";

export async function FETCH_CURRENT_USER({ commit }) {
  try {
    commit("UPDATE_CURRENT_USER", await userApi.get());
  } catch (error) {
    throw error;
  }
}
