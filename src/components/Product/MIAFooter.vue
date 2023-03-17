<template>
  <div class="buttons-area row q-ml-sm q-my-lg">
    <q-btn icon="compare_arrows" flat class="col-2 text-grey" />
    <q-btn icon="search" flat class="col-2 text-grey" />
    <q-btn
      @click="useFavorite"
      :class="classes"
      icon="favorite"
      flat
      class="col-2"
    />
    <q-btn
      @click="useCart(product.id)"
      flat
      class="col-6 btn-tocart"
      label="В корзину"
    />
  </div>
</template>

<script setup>
import { provideApolloClient, useMutation } from "@vue/apollo-composable";
import { reactive, ref } from "vue";
import {
  addProductToFavorites,
  removeProductFromFavorites,
} from "../../graphql-operations/mutations";
const product = defineProps({
  product: Object,
});

const classes = ref({
  isFavorite: false,
});

const { mutate, loading, error } = useMutation(addProductToFavorites);
const {
  mutate: deleteProduct,
  loading: _loading,
  error: _error,
} = useMutation(removeProductFromFavorites);

const useFavorite = async () => {
  const user = window.Clerk.user;
  if (!user) return;

  classes.value.isFavorite = !classes.value.isFavorite;

  if (!classes.value.isFavorite) {
    const { data, loading, errors } = await deleteProduct({
      id: 169,
    });

    return;
  }

  try {
    const { data, loading, errors } = await mutate({
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

.isFavorite
  color: #feb302
</style>
