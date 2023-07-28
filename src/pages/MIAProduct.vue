<template>
  <div class="text-h3 text-center q-mt-lg">
    {{ product?.title }}
  </div>
  <div class="row wrap q-pa-lg">
    <div class="col-sm-3 col-xs-12 q-pa-lg categories-area">
      <div class="q-pa-md" style="font-weight: 700">Категории</div>
      <q-list>
        <q-item
          class="q-pa-md"
          :class="{ 'active-category': getCategory(category?.name) }"
          v-for="category in categories"
          :key="category?.name"
        >
          {{ category?.name }}
        </q-item>
      </q-list>
    </div>
    <div class="col-sm-8 col-xs-12 offset-md-1 row wrap product-information">
      <div class="col-md-5 col-sm-12 col-xs-12 q-mb-lg">
        <q-img :src="product?.image" />
      </div>
      <div
        class="col-md-6 col-xs-12 offset-md-1 col-sm-12 relative-position text-information"
      >
        <p>
          {{ product?.description }}
        </p>
        <div class="buy-area text-h4 absolute-bottom text-red text-weight-bold">
          <div>{{ product?.price }} Р</div>
          <q-btn
            @click="useCart(product?.id)"
            flat
            class="btn-tocart q-mt-xl"
            label="В корзину"
          />
        </div>

        <div>
          <q-btn
            flat
            no-caps
            class="text-body1 chat-btn"
            label="Написать продавцу"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="text-center text-h3">Похожие товары</div>
  <div class="q-pa-lg">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
    >
      <q-carousel-slide
        :name="index + 1"
        class="column no-wrap"
        v-for="(items, index) in sl"
        :key="items[index]"
      >
        <div
          class="row justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          v-if="items"
        >
          <div class="col-sm-3 col-6" v-for="item in items" :key="item.id">
            <router-link
              class="block"
              :to="{ name: 'Product', params: { id: item.id } }"
            >
              <div class="img-container">
                <q-img class="rounded-borders img" :src="item.image" />
              </div>
            </router-link>
            <div class="q-mt-md text-weight-bold">
              <router-link
                class="product__title"
                :to="{ name: 'Product', params: { id: item.id } }"
              >
                {{ item.title }}
              </router-link>
            </div>
            <div>
              {{ item.description }}
            </div>
            <div class="price-area row q-ml-sm">
              <div class="price col-4 text-red">От {{ item.price }} Р</div>
              <div class="old-price col-4 text-grey" v-if="item.old_price">
                От {{ item.old_price }} Р
              </div>
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import {
  useQuery,
  useMutation,
  provideApolloClient,
} from "@vue/apollo-composable";
import { addProductInCart } from "src/graphql-operations/mutations";
import {
  getProductsById,
  getCategories,
  getByCategory,
  getCarts,
  checkCart,
} from "src/graphql-operations/queries";
import { useQuasar } from "quasar";
import {
  getObjectByIdDocumentNode,
  getPaginateObjectsDocumentNode,
} from "src/graphql-operations";
import * as _ from "lodash";
import apolloClient from "src/apollo/apollo-client";

provideApolloClient(apolloClient);

const $q = useQuasar();
const slide = ref(1);

const { refetch: cartRefetch } = useQuery(getCarts);
const { mutate: addProductCart } = useMutation(addProductInCart);

const useCart = async (id) => {
  const { result: Cart, refetch: check } = useQuery(
    getPaginateObjectsDocumentNode(
      "carts",
      `{
    id
    product {
      id
    }
  }`
    ),
    {
      where: {
        column: "product->id",
        operator: "EQ",
        value: `${id}`,
      },
    }
  );
  const { data: cart } = await check();

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
  check();
};

// import SimilarProduct from "src/components/ProductPage/MIASimilarProduct.vue";

const queryCategories = useQuery(
  getPaginateObjectsDocumentNode("categories", `{ id name }`)
);
const categories = computed(
  () => queryCategories.result.value?.categories ?? []
);

const route = useRoute();
const id = ref({ id: +route.params.id });

const queryProduct = useQuery(
  getObjectByIdDocumentNode(
    "product",
    `{
    id
    title
    description
    image
    price
    old_price
    category {
      id
      name
    }
  }`
  ),
  id
);

const product = computed(() => queryProduct.result.value?.product);

const getCategory = (name) => {
  return name === product.value?.category.name;
};

const products = computed(
  () =>
    useQuery(
      getPaginateObjectsDocumentNode(
        "products",
        `{ id image title description price old_price }`
      ),
      {
        where: {
          column: "category->id",
          operator: "EQ",
          value: `${product.value?.category.id}`,
        },
      }
    ).result.value?.products ?? []
);
const sl = ref([]);

if (products.value) {
  sl.value = _.chunk(products.value, 3);
}

watch(products, (value) => {
  if (!value) return;

  sl.value = _.chunk(value, 3);
});

const getSlides = () => {
  let i;
  document.body.clientWidth > 600 ? (i = 4) : (i = 2);
  let arr = [];
  let arrItem = [];
  products.value.forEach((element, index) => {
    arrItem.push(element);
    if ((index + 1) % i == 0) {
      arr.push(arrItem);
      arrItem = [];
    }
  });
  return arr;
};
</script>

<style lang="sass" scoped>
.chat-btn
  border-radius: 8px
  background-color: blue
  color: #fff

.q-item
  min-height: 40px
  line-height: 28px
  border-radius: 20px
.categories-area
  background: #F6F9FF
  border-radius: 26px
  height: min-content
.active-category
  background: #feb302
  color: #fff
.product-information
  min-height: 70vh
.text-information
  min-height: 30vh
.btn-tocart
  background: #feb302
  color: white
  text-transform: none
  border-radius: 13px
  width: 50%
  height: 50px

.price-area
  display: flex
  font-size: 16px
.old-price
    text-decoration: line-through
.img-container
  height: 200px
  width: 100%
.img
  height: 100%
  width: 100%
a
  text-decoration: none
  color: black
</style>
