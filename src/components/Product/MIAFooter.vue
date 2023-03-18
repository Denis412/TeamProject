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
import { useMutation, useQuery } from "@vue/apollo-composable";
import { useQuasar } from "quasar";
import { ref } from "vue";
import { addProductInFavorite } from "../../graphql-operations/mutations";
import { checkProduct } from "../../graphql-operations/queries";

const $q = useQuasar();

const product = defineProps({
  product: Object,
});

const classes = ref({
  isFavorite: false,
});

const { mutate: addProduct } = useMutation(addProductInFavorite);

const { result } = useQuery(checkProduct, {
  productId: product.product.id,
});

const useFavorite = async () => {
  const user = window.Clerk.user;
  if (!user) return;

  console.log(window.Clerk.user);

  classes.value.isFavorite = !classes.value.isFavorite;

  if (result.value.favorites && result.value.favorites.length) {
    $q.notify({
      type: "warning",
      message: "Товар уже есть в избранном!",
    });

    return;
  }

  try {
    const { data } = await addProduct({
      productId: product.product.id,
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
