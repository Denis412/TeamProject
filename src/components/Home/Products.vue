<template>
  <q-list class="row wrap justify-between q-mt-xl products">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </q-list>
</template>

<script setup>
import ProductItem from "./ProductItem.vue";

const { products } = defineProps({
  products: Array,
});
</script>

<style lang="sass" scoped>
.wrapper
  background: #F6F9FF
  border-radius: 26px
.product
  min-height: 504px
  margin-bottom: 56px
.price-area
  display: flex
  font-size: 16px
  .old-price
    text-decoration: line-through
.btn-tocart
  background: #feb302
  color: white
  text-transform: none
  border-radius: 13px
.product__title
  text-decoration: none
  color: black
</style>
