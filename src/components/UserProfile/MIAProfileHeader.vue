<template>
  <header class="flex justify-center w-100p">
    <q-img class="avatar-image q-mb-md" :src="profileImageUrl" />
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue";

const profileImageUrl = ref("");

onMounted(() => {
  profileImageUrl.value = window.Clerk.user.profileImageUrl;

  console.log(profileImageUrl.value);
});
</script>

<style>
.avatar-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
