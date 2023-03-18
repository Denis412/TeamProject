const get = async () => {};

const register = async ({ email, password, user_name }) => {};

const login = async ({ email, password }) => {
  window.Clerk.openSignIn();
};

const updateProfile = async ({
  firstName,
  lastName,
  email,
  phoneNumber,
  password,
}) => {
  window.Clerk.user.update({
    firstName,
    lastName,
  });
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
  updateProfile,
};

export default userApi;
