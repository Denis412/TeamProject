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

  // const script = document.createElement("script");
  // script.async = true;
  // script.src = "../src/lib/clerk.js";
  // script.crossOrigin = "anonymous";

  // console.log(script);
});
</script>
