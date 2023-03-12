import { supabase } from "src/lib/supabaseClient";

const get = async (id) => {
  try {
    const { data: product, error } = await supabase
      .from("products")
      .select()
      .match({ id })
      .single();

    if (error) throw error;

    return product;
  } catch (error) {
    throw error;
  }
};

const create = async (data) => {
  try {
    const user = await supabase.auth.getUser();

    if (!user.data.user) return;

    const { data: product, error } = await supabase
      .from("products")
      .insert([{ user_id: user.data.user.id, ...data }])
      .single();

    if (error) throw error;

    return product;
  } catch (error) {
    throw error;
  }
};

const update = async (data, id) => {
  try {
    const user = await supabase.auth.getUser();

    if (!user.data.user) return;

    const { data: product, error } = await supabase
      .from("products")
      .update(data)
      .match({ id, user_id: user.data.user.id })
      .single();

    if (error) throw error;

    return product;
  } catch (error) {
    throw error;
  }
};

const remove = async (id) => {
  try {
    const user = await supabase.auth.getUser();

    if (!user.data.user) return;

    const { data: product, error } = await supabase
      .from("products")
      .update(data)
      .match({ id, user_id: user.data.user.id })
      .single();

    if (error) throw error;

    return product;
  } catch (error) {
    throw error;
  }
};

const productApi = { get, create, update, remove };

export default productApi;
