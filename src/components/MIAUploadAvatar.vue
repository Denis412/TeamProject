<template>
  <div>
    <input type="file" accept="image/*" @change="updateAvatar" />
    <q-img :src="currentUser.avatar_url" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import supabase from "src/lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

const store = useStore();
const currentUser = computed(() => store.getters["user/CURRENT_USER"]);

const emit = defineEmits(["imageUrl"]);

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
      "https://qgczlcboewmzhjxdbzhb.supabase.co/storage/v1/object/public/avatars/" +
      fileName;

    emit("updateUrl", imageUrl.value);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style></style>
