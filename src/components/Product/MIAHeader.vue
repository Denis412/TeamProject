<template>
  <div>
    <router-link class="block" :to="{ name: 'Product', params: { id: id } }">
      <q-item-section>
        <q-img :src="require('../../assets/img/' + image)" />
      </q-item-section>
    </router-link>
    <q-item-section class="q-mt-md text-weight-bold">
      <router-link
        class="product__title"
        :to="{ name: 'Product', params: { id: id } }"
      >
        {{ title }}
      </router-link>
    </q-item-section>
  </div>
</template>

<script setup>
const { id, image, title } = defineProps({
  id: Number,
  image: String,
  title: String,
});
</script>

<style lang="sass" scoped>
.product__title
  text-decoration: none
  color: black
</style>
