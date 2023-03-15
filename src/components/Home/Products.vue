<template>
  <q-list class="row wrap justify-between q-mt-xl products">
    <q-item
      class="product block col-lg-3 col-md-4 col-sm-6 col-xs-12"
      v-for="product in products"
      :key="product.id"
    >
      <div class="wrapper q-pa-sm">
        <q-item-section>
          <!-- <q-img :src="require('../../assets/img/' + product.img)" /> -->
        </q-item-section>
        <q-item-section class="product__title q-mt-md text-weight-bold">
          {{ product.title }}
        </q-item-section>
        <q-item-section class="q-my-md">
          {{ product.description }}
        </q-item-section>
        <div class="price-area row q-ml-sm">
          <div class="price col-4 text-red">От {{ product.price }} Р</div>
          <div class="old-price col-4 text-grey" v-if="product.old_price">
            От {{ product.old_price }} Р
          </div>
        </div>
        <div class="buttons-area row q-ml-sm q-my-lg">
          <q-btn icon="compare_arrows" flat class="col-2 text-grey" />
          <q-btn icon="search" flat class="col-2 text-grey" />
          <!-- <q-btn
            :class="{
              'text-primary': getClass(product.id),
              'text-grey': !getClass(product.id),
            }"
            @click="useFavorite(product.id, $event)"
            icon="favorite"
            flat
            class="col-2"
          /> -->
          <q-btn
            @click="useCart(product.id)"
            flat
            class="col-6 btn-tocart"
            label="В корзину"
          />
        </div>
      </div>
    </q-item>
  </q-list>
</template>

<script setup>
import { computed, inject, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

// const favorite = computed(() => store.getters["user/CURRENT_USER"].favorites);

const products = inject("products");

// const getClass = (id) => {
//   return favorite.value === id;
// };

const useFavorite = async (id, event) => {
  try {
    await store.dispatch("user/UPDATE_FAVORITES", id);
  } catch (error) {
    console.log(error);
  }
};

const useCart = (id) => {
  //добавление в базу данных
};

onMounted(() => {
  console.log(products);
});
</script>

<style lang="sass" scoped>
.wrapper
  background: #F6F9FF
  border-radius: 26px
.product
  min-height: 504px
  margin-bottom: 56px
.price-area
  display: flex
  font-size: 16px
  .old-price
    text-decoration: line-through
.btn-tocart
  background: #feb302
  color: white
  text-transform: none
  border-radius: 13px
</style>
