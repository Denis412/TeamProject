<template>
  <q-page class="flex flex-center">
    <button>Добавить продукт</button>
    {{ result }}
    <UploadAvatar />
  </q-page>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import UploadAvatar from "../components/UploadAvatar.vue";
import { useQuery } from "@vue/apollo-composable";
import { products } from "src/queries/queries";

const store = useStore();

const currentUser = computed(() => store.getters["user/CURRENT_USER"]);
const { result } = useQuery(products, null, { clientId: "default" });

onMounted(() => {
  console.log("current user session", currentUser.value);

  console.log("result", result);
});
</script>

<style lang="scss">
.photo_uploader {
  min-height: 200px;
  background-color: $primary;
  outline: dashed gray;
  border-radius: 6px;

  &:hover {
    background-color: $primary-hover;
  }
}
</style>
