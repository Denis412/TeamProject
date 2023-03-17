<template>
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
</template>

<script setup>
import {
  provideApolloClient,
  useMutation,
  useSubscription,
} from "@vue/apollo-composable";
import { addProductToFavorites } from "../../graphql-operations/mutations";
import { getProductsInFavorites } from "../../graphql-operations/subscriptions";
import apolloClient from "../../../apollo-client";
import { onMounted } from "vue";

const product = defineProps({
  product: Object,
});

const { mutate, loading, error } = useMutation(addProductToFavorites);

const useFavorite = async () => {
  const user = window.Clerk.user;
  if (!user) return;

  provideApolloClient(apolloClient);

  try {
    const { data } = await mutate({
      user_id: user.id,
      product: JSON.stringify({ id: product.product.id }),
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="sass" scoped>
.btn-tocart
  background: #feb302
  color: white
  text-transform: none
  border-radius: 13px
</style>
