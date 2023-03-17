<template>
  <div class="q-pt-xl q-px-md">
    <div class="text-h3 text-center">Наш ассортимент</div>
    <ProductFilter @useFilter="useFilter" />
    <div class="row">
      <div class="col-6 row">
        <q-select
          class="col-6"
          filled
          v-model="date"
          :options="['Сначала новое', 'Сначала старое']"
          use-chips
          stack-label
          label="Сортировать по дате:"
          @update:model-value="dateSort"
        />
        <q-select
          class="col-6"
          filled
          v-model="price"
          :options="['Сначала дорогое', 'Сначала дешевое']"
          use-chips
          stack-label
          label="Сортировать цене:"
          @update:model-value="priceSort"

        />
      </div>
      <div class="col-6">
        <input type="text" v-model="searchData" style="width: 100%;">
        <div v-show="searchData.length>2">
          <router-link :to="{ name: 'Product', params: { id: product.id } }" v-for="product in search()"
          :key="product.id"
          style="width: 20px;height: 20px;">
            {{ product.title }}
          </router-link>
        </div>
      </div>
    </div>
    <Products :products="products" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import ProductFilter from "./ProductFilter.vue";
import Products from "./Products.vue";
import { useQuery, provideApolloClient } from "@vue/apollo-composable";
import ApolloClient from "src/apollo/apollo-client.js";
import { filtredProduct, getProductByDateDesc, getProductByPriceDesc, getProductByPriceAsc } from "src/queries/queries";

provideApolloClient(ApolloClient);

const category = ref({ text: "Все" });

const useFilter = (categoryName) => {
  category.value.text = categoryName;
};

const dateSort=()=>{
  if (date.value === 'Сначала новое') {
    const queryProducts = useQuery(computed(() => getProductByDateDesc(category.value.text)), category);
    products = computed(() => queryProducts.result.value?.products ?? []);
  }
  else {
    const queryProducts = useQuery(computed(() => filtredProduct(category.value.text)), category);
    products = computed(() => queryProducts.result.value?.products ?? []);
  }
  price.value=null;
}

const priceSort=()=>{
  if (price.value === 'Сначала дорогое') {
    const queryProducts = useQuery(computed(() => getProductByPriceDesc(category.value.text)), category);
    products = computed(() => queryProducts.result.value?.products ?? []);
  }
  else if (price.value === 'Сначала дешевое') {
    const queryProducts = useQuery(computed(() => getProductByPriceAsc(category.value.text)), category);
    products = computed(() => queryProducts.result.value?.products ?? []);
  }
  else {
    const queryProducts = useQuery(computed(() => filtredProduct(category.value.text)), category);
    products = computed(() => queryProducts.result.value?.products ?? []);
  }
  date.value=null;
}

const queryProducts = useQuery(computed(() => filtredProduct(category.value.text)), category);

const searchData = ref('');

const search=()=>{
    return products.value.filter(e=>e.title.toLowerCase().includes(searchData.value.toLowerCase()))
}

let products = computed(() => queryProducts.result.value?.products ?? []);
const date = ref();
const price = ref();

onMounted(() => {


  console.log("result query", products.value);
});
</script>

<style lang="scss" scoped></style>
