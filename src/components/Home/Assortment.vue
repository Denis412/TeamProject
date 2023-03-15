<template>
    <div class="q-pt-xl q-px-md">
      <div  class="text-h3 text-center">
      Наш ассортимент
    </div>
    <ProductFilter @useFilter="useFilter"/>
    <Products
    :products="products"/>
    </div>
</template>

<script setup>
import {computed,ref} from 'vue';
import ProductFilter from "./ProductFilter.vue";
import Products from "./Products.vue";
import { useQuery } from "@vue/apollo-composable";
import {filtredProduct} from "src/queries/queries";

const category = ref({text:"Все"})

const useFilter =(categoryName)=>{
  category.value.text = categoryName
}

const queryProducts = useQuery(computed(()=>filtredProduct(category.value.text)),category);

const products = computed(() => queryProducts.result.value?.products ?? [])

</script>

<style lang="scss" scoped>

</style>
