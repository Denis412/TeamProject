<template>
  <div class="text-h3 text-center q-mt-lg">
    {{ product.title }}
  </div>
  <div class="row wrap q-pa-lg">
    <div class="col-sm-3 col-xs-12 q-pa-lg categories-area">
      <div class="q-pa-md" style="font-weight: 700;">
        Категории
      </div>
      <q-list>
        <q-item class="q-pa-md" :class="{'active-category':getCategory(category.category_name)}" v-for="category in categories" :key="category.category_name">
          {{ category.category_name }}
        </q-item>
      </q-list>
    </div>
    <div class="col-sm-8 col-xs-12 offset-1 row wrap product-information">
      <div class="col-md-5 col-sm-12 q-mb-lg">
        <q-img :src="require('../assets/img/'+product.image)"/>
      </div>
      <div class="col-md-6 offset-1 relative-position text-information">
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
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useQuery } from "@vue/apollo-composable";
import { getProductsById,getCategories } from "src/queries/queries";

const queryCategories =useQuery(getCategories);
const categories = computed(() => queryCategories.result.value?.categories ?? []);

const route = useRoute();
const id = ref({ id: +route.params.id });

const queryProduct = useQuery(computed(()=>getProductsById), id);
const product = computed(() => queryProduct.result.value?.products[0] ?? []);

const getCategory=(name)=>{
  return name===product.value.category
}
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
  min-height: 70vh
.text-information
  min-height: 30vh
.btn-tocart
  background: #feb302
  color: white
  text-transform: none
  border-radius: 13px
  width: 50%
  height: 50px
</style>
