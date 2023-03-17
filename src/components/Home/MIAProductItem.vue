<template>
  <q-item class="product block col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="wrapper q-pa-sm">
      <router-link
        class="block"
        :to="{ name: 'Product', params: { id: product.id } }"
      >
        <q-item-section>
          <q-img :src="require('../../assets/img/' + product.image)" />
        </q-item-section>
      </router-link>
      <q-item-section class="q-mt-md text-weight-bold">
        <router-link
          class="product__title"
          :to="{ name: 'Product', params: { id: product.id } }"
        >
          {{ product.title }}
        </router-link>
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
        <q-btn @click="useFavorite" icon="favorite" flat class="col-2" />
        <q-btn
          @click="useCart(product.id)"
          flat
          class="col-6 btn-tocart"
          label="В корзину"
        />
      </div>
    </div>
  </q-item>
</template>

<script setup>
import { provideApolloClient, useMutation } from "@vue/apollo-composable";
import { addProductToFavorites } from "../../queries/mutations";
import apolloClient from "../../../apollo-client";

const { product } = defineProps({
  product: Object,
});

const { mutate, loading, error } = useMutation(addProductToFavorites);

const useFavorite = async () => {
  const user = window.Clerk.user;

  provideApolloClient(apolloClient);

  try {
    const { data } = await mutate({
      user_id: user.id,
      product: JSON.stringify({ id: product.id }),
    });
  } catch (error) {
    console.log(error);
  }
};
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
.product__title
  text-decoration: none
  color: black
</style>
