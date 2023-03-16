<template>
  <div class="q-pa-md" style="max-width: 400px;margin: 0 auto;">

<q-form
  @submit="onSubmit"
  class="q-gutter-md"
>
  <q-input
    filled
    v-model="form.name"
    label="Название продукта"
    lazy-rules
    :rules="[text]"
  />

  <q-select
  filled
  v-model="form.category"
  :options="getName()"
  label="Категория товара"
  :rules="[select]"
  />

  <q-input
    filled
    type="number"
    v-model="form.price"
    label="Текущая цена"
    lazy-rules
    :rules="[
      price,
      minPrice
    ]"
  />


  <q-input
    filled
    v-model="form.description"
    label="Описание продукта"
    lazy-rules
    :rules="[text]"
  />

      <q-file outlined v-model="form.img" accept=".jpg, image/*">
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>

      <div>
        <q-btn
          class="block"
          label="Submit"
          type="submit"
          color="primary"
          style="margin: 0 auto"
        />
      </div>
    </q-form>
    <router-link :to="{ name: 'Home' }">поехали</router-link>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import { useQuery } from "@vue/apollo-composable";
import { getCategories } from "src/queries/queries";
import { textValidator,selectValidator,priceValidator } from "../use/validators";

const queryCategories = useQuery(getCategories);
const categories = computed(
  () => queryCategories.result.value?.categories ?? []
);

const store = useStore();

const $q = useQuasar();

const getName=()=>{
  return categories.value.map((el)=>el.category_name)
}

const {text} = textValidator();
const {select} = selectValidator();
const {price,minPrice} = priceValidator();

//заполнение обьекта тестовое помимо значений по умолчанию будет добавлен динамический id и что-то надо придумать с картинкой уже потом видно будет

const form = ref({
  id: 6,
  name: "DFGG",
  price: 0,
  description:'SDGF',
  img: 'product.png',
  category: null
})

const onSubmit = async () => {
  try {
    await store.dispatch("products/FETCH_PRODUCTS", form.value);
    $q.notify({
      type: "positive",
      message: "Товар добавлен",
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
