<template>
  <header>
    <q-item-section class="product-image-container">
      <q-img class="product-image" :src="image" />
    </q-item-section>
    <q-item-section class="q-mt-md text-weight-bold">
      {{ title }}
    </q-item-section>
  </header>
</template>

<script setup>
const { image, title } = defineProps({
  image: String,
  title: String,
});
</script>

<style lang="sass" scoped>
.product__title
  text-decoration: none
  color: black
</style>
