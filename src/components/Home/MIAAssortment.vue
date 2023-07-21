<template>
  <div>
    <div class="text-h3 text-center">Наш ассортимент</div>
    <ProductFilter @useFilter="useFilter" />
    <div class="row">
      <div class="col-12 col-sm-6 row">
        <q-select
          class="col-6"
          filled
          v-model="date"
          :options="['Сначала новое', 'Сначала старое']"
          use-chips
          stack-label
          label="Сортировать по дате:"
          @update:model-value="dateSort"
        />
        <q-select
          class="col-6"
          filled
          v-model="price"
          :options="['Сначала дорогое', 'Сначала дешевое']"
          use-chips
          stack-label
          label="Сортировать цене:"
          @update:model-value="priceSort"
        />
      </div>

      <div class="col-12 col-sm-6 relative-position">
        <q-input
          @keyup.enter="searchRequest"
          filled
          bottom-slots
          v-model="searchData"
          label="Поиск"
        >
          <template v-slot:append>
            <q-btn @click.stop="searchRequest" icon="add" />
          </template>
        </q-input>
        <div class="search-menu absolute" v-show="searchData.length > 2">
          <div v-show="!search().length" style="margin-bottom: 16px">
            Ничего не найдено
          </div>
          <div v-for="product in search()" :key="product.id">
            <router-link
              class="block"
              :to="{ name: 'Product', params: { id: product.id } }"
            >
              {{ product.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Products :products="products" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import ProductFilter from "./MIAProductFilter.vue";
import Products from "./MIAProducts.vue";
import { useQuery, provideApolloClient } from "@vue/apollo-composable";
import apolloClient from "src/apollo/apollo-client.js";
import {
  filtredProduct,
  getProductByDateDesc,
  getProductByPriceDesc,
  getProductByPriceAsc,
  getSearchedItem,
} from "../../graphql-operations/queries";

provideApolloClient(apolloClient);

//ОПРЕДЕЛЕНИЕ ФИЛЬТРУЕМОЙ КАТЕГОРИИ

const category = ref({ text: "Все" });
let products = computed(
  () =>
    useQuery(getSearchedItem(category.value.text), {
      // where: {
      //   column: "title",
      //   operator: "_eq",
      //   value: searchBuffer.value,
      // },
    }).result.value?.products ?? []
);

const useFilter = (categoryName) => {
  console.log("hi", category.value);
  category.value.text = categoryName;
  const queryProducts = useQuery(filtredProduct(category.value.text), {
    where: {
      column: "category->name",
      operator: "_eq",
      value: category.value.text,
    },
  });

  products = computed(() => {
    console.log("result", queryProducts.result.value);
    return queryProducts.result.value?.products ?? [];
  });

  searchBuffer.value = "";
};

//БЛОК СОРТИРОВКИ ПО ДАТЕ И ЦЕНЕ

const date = ref();
const price = ref();

const dateSort = () => {
  if (date.value === "Сначала новое") {
    const queryProducts = useQuery(getProductByDateDesc(category.value.text), {
      orderBy: {
        column: "created_at",
        order: "desc",
      },
    });
    products = computed(() => queryProducts.result.value?.products ?? []);
  } else {
    const queryProducts = useQuery(filtredProduct(category.value.text), {
      orderBy: {
        column: "created_at",
        order: "asc",
      },
    });
    products = computed(() => queryProducts.result.value?.products ?? []);
  }
  price.value = null;
};

const priceSort = () => {
  if (price.value === "Сначала дорогое") {
    const queryProducts = useQuery(getProductByPriceDesc(category.value.text), {
      orderBy: {
        column: "price",
        order: "desc",
      },
    });
    products = computed(() => queryProducts.result.value?.products ?? []);
  } else if (price.value === "Сначала дешевое") {
    const queryProducts = useQuery(getProductByPriceAsc(category.value.text), {
      orderBy: {
        column: "price",
        order: "asc",
      },
    });
    products = computed(() => queryProducts.result.value?.products ?? []);
  } else {
    const queryProducts = useQuery(filtredProduct(category.value.text), {
      where: {
        column: "category->name",
        operator: "_eq",
        value: category.value.text,
      },
    });
    products = computed(() => queryProducts.result.value?.products ?? []);
  }
  date.value = null;
};

//БЛОК ПОИСКА

const searchData = ref("");
const searchBuffer = ref("");

const search = () => {
  return products.value.filter((e) =>
    e.title.toLowerCase().includes(searchData.value.toLowerCase())
  );
};

const searchRequest = () => {
  searchBuffer.value = searchData.value;
  products = computed(
    () =>
      useQuery(getSearchedItem(category.value.text), {
        where: {
          column: "title",
          operator: "_eq",
          value: searchBuffer.value,
        },
      }).result.value?.products ?? []
  );
  searchData.value = "";
};
</script>

<style lang="scss" scoped>
.search-menu {
  width: 100%;
  background: #fff;
  border: solid 1px grey;
  border-radius: 0 0 20px 20px;
  top: 56px;
  z-index: 1;
  padding: 16px 16px 0;
}
a {
  text-decoration: none;
  color: #000;
  margin-bottom: 16px;
  &:hover {
    color: grey;
  }
}
</style>
