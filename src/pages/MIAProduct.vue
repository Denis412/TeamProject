<template>
  <div class="text-h3 text-center q-mt-lg">
    {{ product.title }}
  </div>
  <div class="row wrap q-pa-lg">
    <div class="col-sm-3 col-xs-12 q-pa-lg categories-area">
      <div class="q-pa-md" style="font-weight: 700">Категории</div>
      <q-list>
        <q-item
          class="q-pa-md"
          :class="{ 'active-category': getCategory(category.category_name) }"
          v-for="category in categories"
          :key="category.category_name"
        >
          {{ category.category_name }}
        </q-item>
      </q-list>
    </div>
    <div class="col-sm-8 col-xs-12 offset-1 row wrap product-information">
      <div class="col-md-5 col-sm-12 q-mb-lg">
        <q-img :src="product.image" />
      </div>
      <div class="col-md-6 offset-1 relative-position text-information">
        <p>
          {{ product.description }}
        </p>
        <div class="buy-area text-h4 absolute-bottom text-red text-weight-bold">
          <div>{{ product.price }} Р</div>
          <q-btn flat class="btn-tocart q-mt-xl" label="В корзину" />
        </div>
      </div>
    </div>
  </div>
  <div class="text-center text-h3">
    Похожие товары
  </div>
  <div class="q-pa-lg">
  <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="index + 1" class="column no-wrap" v-for="(items, index) in getSlides()" :key="items[index]">
        <div class="row justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <div class="col-3" v-for="item in items" :key="item.id">
                <router-link class="block" :to="{ name: 'Product', params: { id: item.id } }">
                  <div class="img-container">
                    <q-img class="rounded-borders img" :src="item.image"/>
                  </div>
                </router-link>
                <div class="q-mt-md text-weight-bold">
                  <router-link
                    class="product__title"
                    :to="{ name: 'Product', params: { id: item.id } }"
                  >
                    {{ item.title }}
                  </router-link>
                </div>
                <div>
                  {{ item.description }}
                </div>
                <div class="price-area row q-ml-sm">
                  <div class="price col-4 text-red">От {{ item.price }} Р</div>
                  <div class="old-price col-4 text-grey" v-if="item.old_price">
                    От {{ item.old_price }} Р
                  </div>
                </div>
              </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import { getProductsById, getCategories, getByCategory } from "src/graphql-operations/queries";

const queryCategories = useQuery(getCategories);
const categories = computed(
  () => queryCategories.result.value?.categories ?? []
);

const route = useRoute();
const id = ref({ id: +route.params.id });

const slide = ref(1)

const queryProduct = useQuery(
  computed(() => getProductsById),
  id
);
const product = computed(() => queryProduct.result.value?.products[0] ?? []);

const products = computed(() => useQuery(getByCategory, { text: product.value?.category }).result.value?.products ?? []);

const getCategory = (name) => {
  return name === product.value?.category;
};

const getSlides = () => {
  let arr = [];
  let arrItem = [];
  products.value?.forEach((element, index) => {
    arrItem.push(element);
    if ((index + 1) % 4 == 0) {
      arr.push(arrItem);
      arrItem = [];
    }
  });
  console.log(arr)
  return arr


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

.price-area
  display: flex
  font-size: 16px
.old-price
    text-decoration: line-through
.img-container
  height: 200px
  width: 100%
.img
  height: 100%
  width: 100%
a
  text-decoration: none
  color: black
</style>
