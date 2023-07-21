<template>
  <header class="flex justify-center w-100p">
    <q-img class="avatar-image q-mb-md" :src="profileImageUrl" />
    <!-- <input type="file" accept="image/*" @change="uploadAvatar" /> -->
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue";

const profileImageUrl = ref("");

// const uploadAvatar = async (event) => {
//   try {
//     console.log(event.target.files[0]);
//     await window.Clerk?.user.setProfileImage(event.target.files[0]);
//   } catch (error) {
//     console.log(error);
//   }
// };

onMounted(() => {
  profileImageUrl.value = window.Clerk.user.profileImageUrl;
});
</script>

<style>
.avatar-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
