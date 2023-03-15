<template>
  <div class="q-pt-xl q-px-md">
    <div class="text-h3 text-center">Наш ассортимент</div>
    <ProductFilter @useFilter="useFilter" />
    <Products />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import ProductFilter from "./ProductFilter.vue";
import Products from "./Products.vue";

const store = useStore();

const products = computed(() => store.getters["products/PRODUCTS"]);

const productsBuffer = ref(products.value);

const useFilter = (categoryName) => {
  if (categoryName === "Все") productsBuffer.value = products.value;
  else
    productsBuffer.value = products.value.filter(
      (el) => el.category == categoryName
    );
};
</script>

<style lang="scss" scoped></style>
