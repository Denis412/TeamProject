<template>
  <div class="q-pt-xl q-px-md">
    <div class="text-h3 text-center">Наш ассортимент</div>
    <ProductFilter @useFilter="useFilter" />
    <Products :products="products" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import ProductFilter from "./MIAProductFilter.vue";
import Products from "./MIAProducts.vue";
import { useQuery } from "@vue/apollo-composable";
import { filtredProduct } from "src/queries/queries";
import gql from "graphql-tag";

const category = ref({ text: "Все" });

const useFilter = (categoryName) => {
  category.value.text = categoryName;
};

const queryProducts = useQuery(
  computed(() => filtredProduct(category.value.text)),
  category
);

const GET_DATA = gql`
  query {
    products {
      title
    }
  }
`;

const products = computed(() => queryProducts.result.value?.products ?? []);

onMounted(() => {
  const { result } = useQuery(GET_DATA);

  console.log("result query", result);
});
</script>

<style lang="scss" scoped></style>
