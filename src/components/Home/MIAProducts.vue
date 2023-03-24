<template>
  <q-list class="row wrap q-mt-xl products">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </q-list>
</template>

<script setup>
import ProductItem from "./MIAProductItem.vue";

const { products } = defineProps({
  products: Array,
});
</script>
