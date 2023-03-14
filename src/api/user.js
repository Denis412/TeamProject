import { supabase } from "src/lib/supabaseClient";
import serializeUser from "src/utils/serializeUser";

const get = async () => {
  try {
    const user = await supabase.auth.getUser();

    if (!user.data.user) return null;

    const { data, error } = await supabase
      .from("users")
      .select()
      .match({ id: user.data.user.id })
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    throw error;
  }
};

const register = async ({ email, password, user_name }) => {
  try {
    const { data: user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    user.user.user_metadata = {
      user_name,
      password,
    };

    console.log(user.user.user_metadata);

    if (error) throw error;

    const { data: _user, error: _error } = await supabase
      .from("users")
      .insert([serializeUser(user.user)])
      .single();

    if (_error) throw _error;

    return _user;
  } catch (error) {
    throw error;
  }
};

const login = async ({ email, password }) => {
  try {
    const { data: user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    const { data: _user, error: _error } = await supabase
      .from("users")
      .select()
      .match({ id: user.user.id })
      .single();

    console.log("user", _user);

    if (_error) throw _error;

    return _user;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;

    return null;
  } catch (error) {
    throw error;
  }
};

const addFavorites = async (data) => {
  try {
    const user = await supabase.auth.getUser();

    if (!user.data.user) return;

    const { data: _user, error } = await supabase
      .from("users")
      .update({favorites:data})
      .match({ id: user.data.user.id })
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    throw error;
  }
};

const deleteFavorites = async (data) => {
  try {
    const user = await supabase.auth.getUser();

    if (!user.data.user) return;

    const { data: _user, error } = await supabase
      .from("users")
      .update({favorites:null})
      .match({ id: user.data.user.id })
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    throw error;
  }
};

const userApi = { get, register, login, logout, addFavorites, deleteFavorites };

export default userApi;
