<template>
  <q-page class="flex flex-center">
    <p>{{ currentUser.user_name }}</p>
  </q-page>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useQuery } from "@vue/apollo-composable";
import { users } from "../queries/queries";

const store = useStore();

const { result } = useQuery(users, null, { clientId: "default" });

const currentUser = computed(() => store.getters["user/CURRENT_USER"]);

onMounted(async () => {
  console.log(result.value);
  console.log("current user session", currentUser.value);
});
</script>
