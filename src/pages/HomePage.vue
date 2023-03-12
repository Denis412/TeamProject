<template>
  <q-page class="flex flex-center">
    <p>{{ currentUser.user_name }}</p>
  </q-page>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const currentUser = computed(() => store.getters["user/CURRENT_USER"]);

onMounted(async () => {
  console.log("current user session", currentUser.value);
});
</script>
