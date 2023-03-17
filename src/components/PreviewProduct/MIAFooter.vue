<template>
  <div class="buttons-area row q-ml-sm q-my-lg">
    <q-btn icon="compare_arrows" flat class="col-2 text-grey" />
    <q-btn icon="search" flat class="col-2 text-grey" />
    <q-btn
      :class="classes"
      @click="toggleFavorite"
      icon="favorite"
      flat
      class="col-2"
    />
    <q-btn flat class="col-6 btn-tocart" label="В корзину" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const product = defineProps({
  product: Object,
});

const classes = ref({
  isFavorite: false,
});

const toggleFavorite = async () => {
  classes.value.isFavorite = !classes.value.isFavorite;
};
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
