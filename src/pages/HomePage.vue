<template>
  <q-page>
    <!-- <p class="text-center">{{ currentUser.user_name }}</p> -->
    <Assortment/>
  </q-page>
</template>

<script setup>
import Assortment from "src/components/Home/Assortment.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const currentUser = computed(() => store.getters["user/CURRENT_USER"]);

onMounted(async () => {
  console.log("current user session", currentUser.value);
});
</script>
