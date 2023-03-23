<template>
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
    >
      <q-carousel-slide :name="index + 1" class="column no-wrap" v-for="(items, index) in getSlides()"  :key="items[index]">
        <div class="row justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <div class="col-sm-3 col-6" v-for="item in items" :key="item.id">
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
import { defineProps,ref } from 'vue';

const {products} = defineProps({
  products:{
    type:Array
  }
})

const slide = ref(1)


const getSlides = () => {
  let i;
  document.body.clientWidth>600?i=4:i=2;
  let arr = [];
  let arrItem = [];
  products?.forEach((element, index) => {
    arrItem.push(element);
    if ((index + 1) % i == 0) {
      arr.push(arrItem);
      arrItem = [];
    }
  });
  return arr
}
</script>

<style lang="scss" scoped>

</style>
