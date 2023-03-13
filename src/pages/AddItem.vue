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
    :rules="[val => val && val.length > 0 || 'Пожалуйста напишите что-нибудь']"
  />

  <q-select
  filled
  v-model="form.category"
  :options="getName()"
  label="Категория товара"
  :rules="[val => val && val.length > 0 || 'Пожалуйста выберите категорию']"
  />

  <q-input
    filled
    type="number"
    v-model="form.price"
    label="Текущая цена"
    lazy-rules
    :rules="[
      val => val !== null && val !== '' || 'Пожалуйста введите цену',
      val => val >= 0 || 'Пожалуйста введите реальную цену'
    ]"
  />

  <q-input
    filled
    type="number"
    v-model="form.old_price"
    hint="Не обязательное поле"
    label="Старая цена"
    lazy-rules
    :rules="[
      val => val >= 0 || 'Пожалуйста введите реальную цену'
    ]"
  />

  <q-input
    filled
    v-model="form.description"
    label="Описание продукта"
    lazy-rules
    :rules="[val => val && val.length > 0 || 'Пожалуйста напишите что-нибудь']"
  />

  <q-file outlined v-model="form.img" accept=".jpg, image/*">
      <template v-slot:prepend>
        <q-icon name="attach_file" />
      </template>
  </q-file>

  <div>
    <q-btn class="block" label="Submit" type="submit" color="primary" style="margin: 0 auto;"/>
  </div>
</q-form>
<router-link :to="{ name: 'Home' }">поехали</router-link>

</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const categories = computed(() => store.getters["filter/PRODUCT_FILTER"]);

const getName=()=>{
  return categories.value.map((el)=>el.name)
}

//заполнение обьекта тестовое помимо значений по умолчанию будет добавлен динамический id и что-то надо придумать с картинкой уже потом видно будет

const form = ref({
  id: 6,
  name: "DFGG",
  price: 0,
  old_price: null,
  description:'SDGF',
  img: 'product.png',
  category: 'SFGD'
})

const onSubmit = async () => {
  try {
    console.log(store.getters["products/PRODUCTS"])
    await store.dispatch("products/FETCH_PRODUCTS",form.value);
    console.log(store.getters["products/PRODUCTS"])
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
