<template>
  <div class="text-h3 text-center q-mt-lg">
    {{ product.title }}
  </div>
  <div class="row q-pa-lg">
    <div class="col-3 q-pa-lg categories-area">
      <div class="q-pa-md" style="font-weight: 700;">
        Категории
      </div>
      <q-list>
        <q-item class="q-pa-md" :class="{'active-category':getCategory(category.name)}" v-for="category in categories" :key="category.id">
          {{ category.name }}
        </q-item>
      </q-list>
    </div>
    <div class="col-8 offset-1 row product-information">
      <div class="col-5">
        <q-img :src="require('../assets/img/'+product.image)"/>
      </div>
      <div class="col-6 offset-1 relative-position">
        <p>
          {{ product.description }}
        </p>
        <div class="buy-area text-h4 absolute-bottom text-red text-weight-bold">
          <div>
            {{ product.price }} Р
          </div>
          <q-btn flat class="btn-tocart q-mt-xl" label="В корзину" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useQuery } from "@vue/apollo-composable";
import { getProductsById } from "src/queries/queries";
import { useStore } from "vuex";

const store = useStore();

const categories = computed(() => store.getters["filter/PRODUCT_FILTER"]);

const route = useRoute();
const id = ref({ id: +route.params.id });

const queryProduct = useQuery(getProductsById, id);

const product = computed(() => queryProduct.result.value?.products[0] ?? [])

watch(queryProduct.loading, () => {
  console.log(queryProduct)
  console.log(product.value.title);
})

const getCategory=(name)=>{
  return name===product.value.category
}

onMounted(() => {

})



</script>

<style lang="sass" scoped>
.q-item
  min-height: 40px
  line-height: 28px
  border-radius: 20px
.categories-area
  background: #F6F9FF
  border-radius: 26px
  height: min-content
.active-category
  background: #feb302
  color: #fff
.product-information
  height: 70vh
.btn-tocart
  background: #feb302
  color: white
  text-transform: none
  border-radius: 13px
  width: 50%
  height: 50px
</style>
