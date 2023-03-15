<template>
  <q-page>
    <!-- <HeaderPage /> -->
    <!-- <p class="text-center">{{ currentUser.user_name }}</p> -->
    <Assortment />
  </q-page>
</template>

<script setup>
import Assortment from "src/components/Home/Assortment.vue";
import HeaderPage from "src/components/HeaderPage.vue";
import { computed, isReactive, isRef, onMounted, provide } from "vue";
import { useStore } from "vuex";
import { useQuery } from "@vue/apollo-composable";
import { products } from "src/queries/queries";

const store = useStore();

const currentUser = computed(() => store.getters["user/CURRENT_USER"]);
const { result } = useQuery(products, null, { clientId: "default" });

const productsArr = computed(() => result.value?.products ?? []);

provide("products", productsArr);

onMounted(() => {
  console.log("current user session", currentUser.value);

  console.log(isRef(result));

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
