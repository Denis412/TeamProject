<template>
  <div>
    {{ id }}
    <!-- {{ product.name }} -->
  </div>
</template>

<script setup>
import {useStore} from 'vuex';
import {computed,ref} from 'vue';
import { useRoute } from 'vue-router';

const store = useStore();

const route = useRoute();
const id = route.params.id;

// const product = route.params.product

// const product = computed(()=>store.getters['products/PRODUCTS']);

// onMounted(()=>{
//   product.value=product.value.filter((e)=>e.id===id)
// })

</script>

<style lang="scss" scoped>

</style>
