<template>
  <div class="buttons-area row q-ml-sm q-my-lg">
    <q-btn
      icon="favorite"
      flat
      class="col-2 text-primary"
    />
    <q-btn
      flat
      class="col-6 offset-4 btn-tocart"
      label="В корзину"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const product = defineProps({
  product: Object,
});
</script>

<style lang="sass" scoped>
.btn-tocart
  background: #feb302
  color: white
  text-transform: none
  border-radius: 13px

.isFavorite
  color: #feb302
</style>
