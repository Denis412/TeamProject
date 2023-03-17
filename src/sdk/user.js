const get = async () => {};

const register = async ({ email, password, user_name }) => {};

const login = async ({ email, password }) => {
  window.Clerk.openSignIn();
};

const logout = async () => {};

const addFavorites = async (data) => {};

const update = async (data) => {};

const deleteFavorites = async (data) => {};

const uploadAvatar = async () => {};

const updateAvatar = async (file) => {};

const userApi = {
  get,
  register,
  login,
  update,
  logout,
  addFavorites,
  deleteFavorites,
  uploadAvatar,
  updateAvatar,
};

export default userApi;
