<template>
  <q-page class="flex column">
    <router-link
      class="link link-btn text-black q-mt-md text-center"
      :to="{ name: 'home' }"
    >
      <q-btn>Вернуться на главную</q-btn>
    </router-link>

    <q-page-container class="flex justify-around">
      <div>
        <div class="text-h5 text-center">Превью карточки товара</div>
        <MIAPreviewProductItem :product="product" />
      </div>

      <div class="q-pa-md" style="max-width: 500px; width: 500px">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div>
            <!-- <q-uploader
              url="https://qgczlcboewmzhjxdbzhb.supabase.co/storage/v1/object/public/images/"
              label="Загрузить картинку"
              color="primary"
              multiple
              max-files="4"
              class="w-100p"
            /> -->
            <MIAUploadAvatar @updateUrl="uploadPhoto" />
          </div>
          <q-input
            filled
            v-model="form.title"
            label="Название продукта"
            lazy-rules
            :rules="[required]"
          />

          <q-select
            filled
            v-model="form.category"
            :options="categoriesNames"
            label="Категория товара"
            :rules="[required]"
          />

          <div class="flex justify-between">
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
              class="q-ml-md"
              label="Старая цена"
              lazy-rules
              :rules="[minValue(0)]"
            />
          </div>

          <q-input
            filled
            v-model="form.description"
            label="Описание продукта"
            lazy-rules
            :rules="[required]"
          />

          <div>
            <q-btn
              class="block"
              label="Добавить товар"
              type="submit"
              color="primary"
              style="margin: 0 auto"
            />
          </div>
        </q-form>
      </div>
    </q-page-container>
  </q-page>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useQuasar } from "quasar";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { getCategories } from "src/graphql-operations/queries";
import { addProductToCatalog } from "../graphql-operations/mutations";
import { useValidators } from "src/use/validators";
import MIAPreviewProductItem from "src/components/MIAPreviewProductItem.vue";
import MIAUploadAvatar from "src/components/MIAUploadAvatar.vue";
import supabase from "src/lib/supabaseClient";

const $q = useQuasar();

const queryCategories = useQuery(getCategories);
const { mutate: addProduct } = useMutation(addProductToCatalog);

const categories = computed(
  () => queryCategories.result.value?.categories ?? []
);
const categoriesNames = computed(() =>
  categories.value.map((category) => category.category_name)
);

const image_url = ref("");
const { required, minValue, isNumber } = useValidators();

const uploadPhoto = (imageUrl) => {
  image_url.value = imageUrl;
};

const form = ref({
  title: "",
  price: 0,
  old_price: 0,
  description: "",
  image: "product.png",
  category: "",
  quantity: 1,
});

const product = reactive(form.value);

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
      image: image_url.value,
    });

    form.value.title = "";
    form.value.description = "";
    form.value.price = 0;
    form.value.old_price = 0;
    form.value.quantity = 0;
    form.value.category = "";
    form.value.image = "";

    $q.notify({
      type: "positive",
      message: "Товар добавлен",
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  max-width: 800px;
  margin: 0 auto;
}
</style>
