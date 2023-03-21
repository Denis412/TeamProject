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
  </main>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";
import userApi from "../../sdk/user";

const $q = useQuasar();

const user = window.Clerk.user;

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
