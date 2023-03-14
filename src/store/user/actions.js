import userApi from "../../api/user";

export async function FETCH_CURRENT_USER({ commit }) {
  try {
    commit("UPDATE_CURRENT_USER", await userApi.get());
  } catch (error) {
    throw error;
  }
}

export async function UPDATE_FAVORITES({ commit, state }, id) {
  console.log(state.currentUser)
  console.log(state.currentUser.favorites)
  console.log(id)
  if (state.currentUser.favorites!=id) {
    try {
      console.log("дал айди");
      commit("ADD_TO_FAVORITES", await userApi.addFavorites(id));
    } catch (error) {
      throw error;
    }
  }
  else{
    try {
      console.log("забрал");
      commit("DELETE_FROM_FAVORITES", await userApi.deleteFavorites(id));
    } catch (error) {
      throw error;
    }
  }

}
