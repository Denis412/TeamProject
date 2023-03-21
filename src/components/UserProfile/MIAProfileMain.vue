<template>
  <main>
    <q-form>
      <div class="flex row">
        <q-input filled type="text" v-model="form.firstName" label="Имя" />
        <q-input
          filled
          class="q-ml-md"
          type="text"
          v-model="form.lastName"
          label="Фамилия"
        />
      </div>
      <q-input
        filled
        class="q-mt-md"
        type="email"
        v-model="form.email"
        label="Email"
      />
      <q-input
        filled
        class="q-mt-md"
        type="text"
        v-model="form.phoneNumber"
        label="Мобильный телефон"
      />
      <q-input
        filled
        class="q-mt-md"
        type="password"
        v-model="form.password"
        label="Пароль"
      />

      <q-btn
          class="q-mt-md bg-positive text-white rounded-borders w-100p"
          @click="products=true"
          >Мои продукты</q-btn
        >
      <div class="mw-100">
        <q-btn
          class="q-mt-md bg-primary text-white rounded-borders w-100p"
          @click="updateProfile"
          >Сохранить</q-btn
        >
        <q-btn
          class="q-mt-md bg-negative text-white rounded-borders w-100p"
          @click="userApi.logout"
          >Выйти</q-btn
        >
      </div>
    </q-form>
    <q-dialog v-model="products">
      <q-list style="width: 80%;" class="q-mt-xl products row bg-white">
    <div v-if="loading">Загрузка...</div>
    <q-item
      v-else
      class="product q-pa-lg q-mb-lg row offset-lg-2 col-lg-8 col-12"
      v-for="product in result?.products"
      :key="product.id"
    >
      <q-item-section class="col-sm-4 col-xs-12">
        <q-img :src="product.image" />
      </q-item-section>
      <div class="col-sm-8 col-xs-12 relative-position q-pl-lg">
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
    </q-dialog>
  </main>
</template>

<script setup>
import { getProductsByUser } from "src/graphql-operations/queries";
import { useQuery,useMutation } from "@vue/apollo-composable";
import { removeProductFromProducts } from "src/graphql-operations/mutations";
import { useQuasar } from "quasar";
import { ref, computed, watch } from "vue";
import userApi from "../../sdk/user";

const $q = useQuasar();

const user = window.Clerk.user;
const products = ref(false)
const id = ref({id:user.id})

const { result, loading, error, refetch } = useQuery(getProductsByUser,id);


const form = ref({
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.emailAddresses,
  phoneNumber: user.phoneNumbers,
  password: user.password,
});

const { mutate: deleteProduct} = useMutation(removeProductFromProducts)

const deleteFromProducts = async(id) =>{
  const user = window.Clerk.user;
  if (!user) return;
  const { data } = await deleteProduct({
    id: id,
  });
  refetch();
}

const updateProfile = () => {
  userApi.updateProfile(form.value);
  $q.notify({
    type: "positive",
    message: "Изменения приняты!",
  });
};
</script>
