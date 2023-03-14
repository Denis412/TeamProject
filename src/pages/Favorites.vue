<template>
  <q-list class="row wrap justify-between q-mt-xl products">
    <q-item class="product block col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="product in sortProducts()"
    :key="product.id">
          <div class="wrapper q-pa-sm">
              <q-item-section>
              <q-img :src="require('../assets/img/'+product.img)"/>
            </q-item-section>
            <q-item-section class="product__title q-mt-md text-weight-bold">
              {{ product.name }}
            </q-item-section>
            <q-item-section class="q-my-md">
              {{ product.description }}
            </q-item-section>
            <div class="price-area row q-ml-sm">
              <div class="price col-4 text-red">
                От {{ product.price }} Р
              </div>
              <div class="old-price col-4 text-grey"
              v-if="product.old_price">
                От {{ product.old_price }} Р
              </div>
            </div>
          </div>
    </q-item>
  </q-list>
</template>

<script setup>
import {useStore} from 'vuex';
import {computed} from 'vue';

const store = useStore();

const favorite = computed(()=>store.getters['user/CURRENT_USER'].favorites);
const products = computed(()=>store.getters['products/PRODUCTS'])

const sortProducts=(()=>{
  return products.value.filter((e)=>favorite.value===e.id)
})
</script>

<style lang="sass" scoped>
.wrapper
  background: #F6F9FF
  border-radius: 26px
</style>
