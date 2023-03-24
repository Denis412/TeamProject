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
  await window.Clerk.user.update({
    firstName,
    lastName,
  });

  if (avatarImage) {
    await window.Clerk.user.setProfileImage(avatarImage);
  }

  if (phoneNumber) {
    await window.Clerk.user.createPhoneNumber(phoneNumber);
  }
};

const logout = async () => {
  await window.Clerk.signOut();
};

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
