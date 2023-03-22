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
      @click="useCart"
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
import { addProductInFavorite, addProductInCart } from "../../graphql-operations/mutations";
import { checkFavorites, checkCart, getCarts, getFavorites } from "../../graphql-operations/queries";


const $q = useQuasar();

const product = defineProps({
  product: Object,
});

const classes = ref({
  isFavorite: false,
});

const { mutate: addProduct } = useMutation(addProductInFavorite);
const { mutate: addProductCart } = useMutation(addProductInCart);

const { refetch:cartRefetch } = useQuery(getCarts);
const { refetch:favoritesRefetch } = useQuery(getFavorites);


const { result: Favorites } = useQuery(checkFavorites, {
  productId: product.product.id,
});

const { result: Cart } = useQuery(checkCart, {
  productId: product.product.id,
});

const useFavorite = async () => {
  const user = window.Clerk.user;
  if (!user) return;

  console.log(window.Clerk.user);

  classes.value.isFavorite = !classes.value.isFavorite;

  if (Favorites.value.favorites && Favorites.value.favorites.length) {
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
  favoritesRefetch();
};

const useCart = async()=>{
  const user = window.Clerk.user;
  if (!user) return;
  if (Cart.value.carts && Cart.value.carts.length) {
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
    productId: product.product.id,
  });
  cartRefetch();
}
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
