<template>
      <q-list class="col-sm-10 col-12 q-mt-xl products row bg-white">
        <q-btn class="offset-sm-11 offset-10" icon="close" size="30px" flat round dense v-close-popup />


    <div v-if="loading">Загрузка...</div>
    <div v-else-if="!result?.products.length&&!loading" style="margin: 0 auto;" class="q-pb-xl flex-center text-h5">
      Список товаров пуст
    </div>
    <q-item
      v-else
      class="product q-pa-lg q-mb-lg row col-lg-12 col-12 wrap"
      v-for="product in result?.products"
      :key="product.id"
    >
      <q-item-section class="col-sm-4 col-12">
        <q-img :src="product.image" />
      </q-item-section>
      <div class="col-sm-8 col-12 relative-position q-pl-lg">
        <q-item-section class="product__title text-h5 q-mt-md text-weight-bold">
          {{ product.title }}
        </q-item-section>
        <q-item-section class="q-my-md">
          {{ product.description }}
        </q-item-section>
        <div class="price-area row q-ml-sm">
          <div class="price col-4 text-h5 text-red">
            От {{ product.price }} Р
          </div>
          <div
            class="old-price text-h6 col-4 text-grey"
            v-if="product.old_price"
          >
            От {{ product.old_price }} Р
          </div>
        </div>
        <div class="absolute-bottom flex justify-end row q-ml-lg">
          <q-btn
            @click="deleteFromProducts(product.id)"
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
import { getProductsByUser,getSearchedItem } from "src/graphql-operations/queries";
import { useQuery,useMutation } from "@vue/apollo-composable";
import { removeProductFromProducts } from "src/graphql-operations/mutations";
import { defineProps,ref } from "vue";

const { user } = defineProps({
  user:Object,
})

const { refetch:refetchProducts } = useQuery(getSearchedItem("Все"), {
    searchData: `%%`,
  });

const id = ref({id:user.id})

const { result, loading, error, refetch } = useQuery(getProductsByUser,id);

const { mutate: deleteProduct} = useMutation(removeProductFromProducts)

const deleteFromProducts = async(id) =>{
  const user = window.Clerk.user;
  if (!user) return;
  const { data } = await deleteProduct({
    id: id,
  });
  refetch();
  refetchProducts();
}
</script>

<style lang="sass" scoped>
.q-dialog__inner--minimized > div
  width: 80%
.no-wrap
  flex-wrap: wrap
</style>
