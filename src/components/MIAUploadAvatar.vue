<template>
  <div>
    <input type="file" accept="image/*" @change="updateAvatar" />
    <q-img :src="currentUser.avatar_url" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const currentUser = computed(() => store.getters["user/CURRENT_USER"]);

const imageUrl = ref("");

const updateAvatar = async (event) => {
  console.log(event);
};
</script>

<style></style>
