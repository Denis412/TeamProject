<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  console.log("App");
  store.dispatch("user/FETCH_CURRENT_USER");
});
</script>
