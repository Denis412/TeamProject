export function UPDATE_CURRENT_USER(state, user) {
  state.currentUser = user;
}

export function ADD_TO_FAVORITES(state, id) {
  state.currentUser.favorites=id;
}

export function DELETE_FROM_FAVORITES(state) {
  state.currentUser.favorites=null;
}
