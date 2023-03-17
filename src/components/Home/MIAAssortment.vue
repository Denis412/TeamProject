<template>
  <div>
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
import { useQuery, useMutation } from "@vue/apollo-composable";
import { filtredProduct } from "src/graphql-operations/queries";
import { addProductToCatalog } from "src/graphql-operations/mutations";

const category = ref({ text: "Все" });

const {
  mutate,
  loading: loadingAdded,
  error: errorAdded,
} = useMutation(addProductToCatalog);

const useFilter = (categoryName) => {
  category.value.text = categoryName;
};

const addProduct = () => {};

const { result, loading, error } = useQuery(
  computed(() => filtredProduct(category.value.text)),
  category
);

const products = computed(() => result.value?.products ?? []);
</script>

<style lang="scss" scoped></style>
