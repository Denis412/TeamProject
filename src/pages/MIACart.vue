<template>
  <div class="row">
    <q-list class="q-mt-xl products row col-12 col-sm-8">
      <div v-if="loading">Загрузка...</div>
      <div v-else-if="!loading&&!result?.carts.length" class="absolute-center text-h4">
        Корзина пуста
      </div>
      <q-item
        v-else
        class="product q-pa-lg q-mb-lg row offset-lg-2 col-lg-8 col-12"
        v-for="product in result?.carts"
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
          <div class="price-area q-ml-sm">
            <div class="price text-h5 text-red">
              От {{ product.product.price }} Р
            </div>
          </div>
          <q-btn
            @click="deleteFromCarts(product.id)"
            flat
            class="btn-tocart bg-primary"
            label="Удалить"
          />
        </div>
      </q-item>
    </q-list>
    <div v-if="result?.carts.length" class="cart-information col-sm-4 col-12 q-mt-xl q-px-md">
      <div class="quantity text-h5">
        Количество товаров: {{ result?.carts.length }}
      </div>
      <div class="text-red text-h6">
        Общая цена: {{ calcPrice() }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCarts } from "../graphql-operations/queries";
import { removeProductFromCarts } from "src/graphql-operations/mutations";
import { useQuery,useMutation } from "@vue/apollo-composable";

const { result, loading, error, refetch:cartRefetch } = useQuery(getCarts);

const { mutate: deleteCartItem} = useMutation(removeProductFromCarts)

const deleteFromCarts = async(id) =>{
  const user = window.Clerk.user;
  if (!user) return;
  const { data } = await deleteCartItem({
    id: id,
  });
  cartRefetch();
}

const calcPrice = ()=>{
  let count = 0;
  result.value?.carts.forEach(element => {
    count+=element.product.price
  });
  return count
}
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
@media (max-width: 600px)
  .cart-information
    order: -1
</style>
