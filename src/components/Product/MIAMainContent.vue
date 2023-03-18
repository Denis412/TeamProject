<template>
  <div>
    <q-item-section class="q-my-md">
      {{ description }}
    </q-item-section>
    <div class="price-area row q-ml-sm">
      <div class="price col-4 text-red">От {{ price }} Р</div>
      <div class="old-price col-4 text-grey" v-if="old_price">
        От {{ old_price }} Р
      </div>
    </div>
  </div>
</template>

<script setup>
const { description, price, old_price } = defineProps({
  description: String,
  price: Number,
  old_price: Number,
});
</script>

<style lang="sass" scoped>
.price-area
  display: flex
  font-size: 16px
  .old-price
    text-decoration: line-through
</style>
