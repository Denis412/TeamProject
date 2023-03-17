<template>
  <div>
    <input type="file" accept="image/*" @change="updateAvatar" />
    <q-img :src="currentUser.avatar_url" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import userApi from "../sdk/user";

const store = useStore();
const currentUser = computed(() => store.getters["user/CURRENT_USER"]);

const updateAvatar = async (event) => {
  try {
    await userApi.updateAvatar(event.target.files[0]);
    currentUser.value = await userApi.get();
  } catch (error) {
    console.log(error);
  }
  console.log("user", await userApi.get());
};
</script>

<style></style>
