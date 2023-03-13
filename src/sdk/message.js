import { supabase } from "src/lib/supabaseClient";

const create = async (messageData) => {
  const user = supabase.auth.user();

  if (!user) return;

  try {
    const { data, error } = await supabase
      .from("messages")
      .insert([{ ...messageData, user_id: user.id }])
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    console.log(error);
  }
};

const update = async (messageData) => {
  const user = supabase.auth.user();

  try {
    const { data, error } = await supabase
      .from("messages")
      .update({ ...messageData })
      .match({ id: messageData.id, user_id: user.id });

    if (error) throw error;

    return data;
  } catch (error) {
    console.log(error);
  }
};

const remove = async (id) => {
  const user = supabase.auth.user();

  try {
    const { data, error } = await supabase
      .from("messages")
      .delete()
      .match({ id, user_id: user.id });

    if (error) throw error;

    return data;
  } catch (error) {
    console.log(error);
  }
};

const messageApi = { create, update, remove };

export default messageApi;
