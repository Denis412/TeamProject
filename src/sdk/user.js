import Clerk from "@clerk/clerk-js";
import { supabase } from "src/lib/supabaseClient";
import serializeUser from "src/utils/serializeUser";
import { v4 as uuidv4 } from "uuid";

const get = async () => {
  // try {
  //   const user = await supabase.auth.getUser();
  //   if (!user.data.user) return null;
  //   const { data, error } = await supabase
  //     .from("users")
  //     .select()
  //     .match({ id: user.data.user.id })
  //     .single();
  //   if (error) throw error;
  //   return data;
  // } catch (error) {
  //   throw error;
  // }
};

const register = async ({ email, password, user_name }) => {
  // try {
  //   const el = document.getElementById("sign-up");
  //   window.Clerk.mountSignUp(el);
  //   console.log(el);
  //   const { data: user, error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //     user_metadata: {
  //       user_name,
  //       password,
  //     },
  //   });
  //   // user.user.user_metadata = {
  //   //   user_name,
  //   //   password,
  //   // };
  //   console.log(user.user.user_metadata);
  //   if (error) throw error;
  //   const { data: _user, error: _error } = await supabase
  //     .from("users")
  //     .insert([serializeUser(user.user)])
  //     .single();
  //   if (_error) throw _error;
  //   return _user;
  // } catch (error) {
  //   throw error;
  // }
};

const login = async ({ email, password }) => {
  window.Clerk.openSignIn();
};

const logout = async () => {
  // try {
  //   const { error } = await supabase.auth.signOut();
  //   if (error) throw error;
  //   return null;
  // } catch (error) {
  //   throw error;
  // }
};

const addFavorites = async (data) => {
  // try {
  //   const user = await supabase.auth.getUser();
  //   if (!user.data.user) return;
  //   const { data: _user, error } = await supabase
  //     .from("users")
  //     .update({ favorites: data })
  //     .match({ id: user.data.user.id })
  //     .single();
  //   if (error) throw error;
  //   return data;
  // } catch (error) {
  //   throw error;
  // }
};

const update = async (data) => {
  // try {
  //   const user = await supabase.auth.getUser();
  //   if (!user.data.user) return;
  //   const { data: _user, error } = await supabase
  //     .from("users")
  //     .update(data)
  //     .match({ id: user.data.user.id })
  //     .single();
  //   if (error) throw error;
  //   return _user;
  // } catch (error) {
  //   throw error;
  // }
};

const deleteFavorites = async (data) => {
  // try {
  //   const user = await supabase.auth.getUser();
  //   if (!user.data.user) return;
  //   const { data: _user, error } = await supabase
  //     .from("users")
  //     .update({ favorites: null })
  //     .match({ id: user.data.user.id })
  //     .single();
  //   if (error) throw error;
  //   return data;
  // } catch (error) {
  //   throw error;
  // }
};

const uploadAvatar = async () => {
  // try {
  //   const user = await supabase.auth.getUser();
  //   if (!user.data.user) return null;
  //   console.log("serialize", await get());
  //   const _user = await get();
  //   return { avatar_url: _user.avatar_url };
  // } catch (error) {
  //   throw error;
  // }
};

const updateAvatar = async (file) => {
  // try {
  //   const user = await supabase.auth.getUser();
  //   if (!user.data.user) return null;
  //   const { id } = user.data.user;
  //   const ext = file.name.split(".").at(-1);
  //   const name = `${id}${uuidv4()}.${ext}`;
  //   user.data.user.user_metadata.avatar_url =
  //     "https://qgczlcboewmzhjxdbzhb.supabase.co/storage/v1/object/public/avatars/" +
  //     name;
  //   console.log("url user", user.data.user.user_metadata.avatar_url);
  //   const { data, error } = await supabase.storage
  //     .from("avatars")
  //     .update(name, file, {
  //       cacheControl: "no-cache",
  //       upsert: true,
  //     });
  //   if (error) throw error;
  //   return data;
  // } catch (error) {
  //   throw error;
  // }
};

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
