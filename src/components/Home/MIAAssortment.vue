<template>
  <div class="q-pt-xl q-px-md">
    <div class="text-h3 text-center">Наш ассортимент</div>
    <ProductFilter @useFilter="useFilter" />
    <div v-if="loading" class="text-h3 text-center q-mt-xl">
      Загрузка товаров...
    </div>
    <Products v-else :products="products" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import ProductFilter from "./MIAProductFilter.vue";
import Products from "./MIAProducts.vue";
import { useQuery } from "@vue/apollo-composable";
import { filtredProduct } from "src/graphql-operations/queries";

const category = ref({ text: "Все" });

const useFilter = (categoryName) => {
  category.value.text = categoryName;
};

const { result, loading, error } = useQuery(
  computed(() => filtredProduct(category.value.text)),
  category
);

const products = computed(() => result.value?.products ?? []);
</script>

<style lang="scss" scoped></style>
