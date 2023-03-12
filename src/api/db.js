import { supabase } from "src/lib/supabaseClient";

async function fetchAllData() {
  try {
    const { data: users } = await supabase.from("users").select("*");
    const { data: messages } = await supabase.from("messages").select();
    const { data: chats } = await supabase.from("chats").select("*");

    return { users, messages, chats };
  } catch (error) {
    console.log(error);
  }
}

const dbApi = { fetchAllData };

export default dbApi;
