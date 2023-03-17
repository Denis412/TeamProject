<template>
  <div class="q-pa-md" style="max-width: 400px; margin: 0 auto">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="form.title"
        label="Название продукта"
        lazy-rules
        :rules="[textValidator]"
      />

      <q-select
        filled
        v-model="form.category"
        :options="getName()"
        label="Категория товара"
        :rules="[required]"
      />

      <q-input
        filled
        type="number"
        v-model="form.price"
        label="Текущая цена"
        lazy-rules
        :rules="[required, isNumber, minValue(0)]"
      />

      <q-input
        filled
        type="number"
        v-model="form.old_price"
        hint="Не обязательное поле"
        label="Старая цена"
        lazy-rules
        :rules="[minValue(0)]"
      />

      <q-input
        filled
        v-model="form.description"
        label="Описание продукта"
        lazy-rules
        :rules="[textValidator]"
      />

      <!-- <q-file outlined v-model="form.img" accept=".jpg, image/*">
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file> -->

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
    <router-link :to="{ name: 'home' }">Вернуться на главную</router-link>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { getCategories } from "src/graphql-operations/queries";
import { addProductToCatalog } from "../graphql-operations/mutations";
import { useValidators } from "src/use/validators";

const { required, minValue, isNumber } = useValidators();

const queryCategories = useQuery(getCategories);
const categories = computed(
  () => queryCategories.result.value?.categories ?? []
);

const store = useStore();
const $q = useQuasar();

const {
  mutate: addProduct,
  loading: isProductLoading,
  error: iseProductAddedError,
} = useMutation(addProductToCatalog);

const getName = () => {
  return categories.value.map((category) => category.category_name);
};

const textValidator = (val) =>
  (val && val.length > 0) || "Пожалуйста напишите что-нибудь";
const selectValidator = (val) =>
  ((val) => val && val.length > 0) || "Пожалуйста выберите категорию";

const form = ref({
  title: "",
  price: 0,
  old_price: 0,
  description: "",
  image: "product.png",
  category: "",
});

const onSubmit = async () => {
  try {
    console.log(form);
    const { data } = await addProduct({
      title: form.value.title,
      description: form.value.description,
      price: form.value.price,
      old_price: form.value.old_price,
      quantity: form.value.quantity,
      category: form.value.category,
      image: form.value.image,
      quantity: 1,
    });

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
