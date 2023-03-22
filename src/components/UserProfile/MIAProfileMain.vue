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
    <q-dialog class="row" v-model="products">
      <Products :user="user"/>
    </q-dialog>
  </main>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, computed, watch } from "vue";
import Products from "./MIAProfileProducts.vue";
import userApi from "../../sdk/user";

const $q = useQuasar();

const user = window.Clerk.user;

const products = ref(false)

const form = ref({
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.emailAddresses,
  phoneNumber: user.phoneNumbers,
  password: user.password,
});




const updateProfile = () => {
  userApi.updateProfile(form.value);
  $q.notify({
    type: "positive",
    message: "Изменения приняты!",
  });
};
</script>
<style lang="sass" scoped>
.no-wrap
  flex-wrap: wrap
</style>
