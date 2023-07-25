<template>
  <q-list class="q-mt-xl products row">
    <div v-if="loading">Загрузка...</div>
    <div
      v-else-if="!loading && !result?.favorites.length"
      style="margin: 0 auto"
      class="text-center text-h4"
    >
      Список избранного пуст
    </div>
    <q-item
      v-else
      class="product q-pa-lg q-mb-lg row offset-lg-2 col-lg-8 col-12"
      v-for="product in result?.favorites"
      :key="product.product.id"
    >
      <q-item-section class="col-sm-4 col-xs-12">
        <q-img :src="product.product.image" />
      </q-item-section>
      <div class="col-sm-8 col-xs-12 relative-position q-pl-lg">
        <q-item-section class="product__title text-h5 q-mt-md text-weight-bold">
          {{ product.product.title }}
        </q-item-section>
        <q-item-section class="q-my-md">
          {{ product.product.description }}
        </q-item-section>
        <div class="price-area row q-ml-sm">
          <div class="price col-4 text-h5 text-red">
            От {{ product.product.price }} Р
          </div>
          <div
            class="old-price text-h6 col-4 text-grey"
            v-if="product.product.old_price"
          >
            От {{ product.product.old_price }} Р
          </div>
        </div>
        <div class="absolute-bottom flex justify-end row q-ml-lg">
          <q-btn
            @click="useCart(product.product.id)"
            flat
            class="col-5 offset-1 btn-tocart bg-primary"
            label="В корзину"
          />
          <q-btn
            @click="deleteFromFavorites(product.id)"
            flat
            class="col-5 offset-1 btn-tocart bg-primary"
            label="Удалить"
          />
        </div>
      </div>
    </q-item>
  </q-list>
</template>

<script setup>
import { getFavorites } from "../graphql-operations/queries";
import {
  useMutation,
  useQuery,
  provideApolloClient,
} from "@vue/apollo-composable";
import {
  addProductInCart,
  removeProductFromFavorites,
} from "src/graphql-operations/mutations";
import { checkCart, getCarts } from "../graphql-operations/queries";
import ApolloClient from "src/apollo/apollo-client.js";
import { useQuasar } from "quasar";

provideApolloClient(ApolloClient);
const $q = useQuasar();

const { result, loading, error, refetch } = useQuery(getFavorites);
const { refetch: cartRefetch } = useQuery(getCarts);

const { mutate: addProductCart } = useMutation(addProductInCart);

const { mutate: deleteFavorite } = useMutation(removeProductFromFavorites);

const deleteFromFavorites = async (id) => {
  const { data } = await deleteFavorite({
    id: id,
  });
  refetch();
};

const useCart = async (id) => {
  const { result: Cart, refetch } = useQuery(checkCart, {
    where: {
      column: "product->id",
      operator: "EQ",
      value: `${id}`,
    },
  });

  const { data: cart } = await refetch();

  if (cart?.carts && cart?.carts.length) {
    $q.notify({
      type: "warning",
      message: "Товар уже есть в корзине!",
    });

    return;
  }

  $q.notify({
    type: "positive",
    message: "Товар добавлен в корзину!",
  });

  const { data } = await addProductCart({
    input: {
      product: {
        id,
      },
      user: {
        id: parseInt(localStorage.getItem("user_id")),
      },
    },
  });
  cartRefetch();
};
</script>

<style lang="sass" scoped>
.product
  min-height: 300px
  background: #F6F9FF
  flex-wrap: wrap !important
.wrapper
  background: #F6F9FF
  border-radius: 26px
.btns-area
  border-radius: 20px

.btn-tocart
  background: #feb302
  color: white
  text-transform: none
  border-radius: 13px
  margin-top: 10px
.price-area
  margin-bottom: 80px
  .old-price
    text-decoration: line-through
</style>
