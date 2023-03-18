<template>
  <header>
    <div style="width: 40px; height: 40px">
      <q-img :src="profileImageUrl" ratio="16/9" />
    </div>
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
