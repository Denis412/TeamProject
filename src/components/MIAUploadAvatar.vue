<template>
  <input type="file" accept="image/*" @change="updateAvatar" />
</template>

<script setup>
import { ref } from "vue";
import supabase from "src/lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

const emit = defineEmits(["updateUrl"]);

const imageUrl = ref("");

const updateAvatar = async (event) => {
  try {
    const ext = event.target.files[0].name.split(".")[1];
    const fileName = `${uuidv4()}.${ext}`;

    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(fileName, event.target.files[0]);

    if (error) throw error;

    imageUrl.value =
      "https://rknojxtpjwcckodbfjju.supabase.co/storage/v1/object/public/avatars/" +
      fileName;

    emit("updateUrl", imageUrl.value);
  } catch (error) {
    console.log(error);
  }
};
</script>
