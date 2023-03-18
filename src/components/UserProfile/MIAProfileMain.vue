<template>
  <main>
    <q-form>
      <div class="flex row">
        <q-input
          filled
          type="text"
          v-model="form.firstName"
          label="Имя"
          lazy-rules
        />
        <q-input
          filled
          class="q-ml-md"
          type="text"
          v-model="form.lastName"
          label="Фамилия"
          lazy-rules
        />
      </div>
      <q-input
        filled
        class="q-mt-md"
        type="text"
        v-model="form.email"
        label="Email"
        lazy-rules
      />
      <q-input
        filled
        class="q-mt-md"
        type="text"
        v-model="form.phoneNumber"
        label="Мобильный телефон"
        lazy-rules
      />
      <q-input
        filled
        class="q-mt-md"
        type="password"
        v-model="form.password"
        label="Пароль"
        lazy-rules
      />

      <div class="mw-100">
        <q-btn
          class="q-mt-md bg-primary text-white rounded-borders w-100p"
          @click="userApi.updateProfile(form)"
          >Сохранить</q-btn
        >
      </div>
    </q-form>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import userApi from "../../sdk/user";

const user = window.Clerk.user;

const form = reactive({
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.emailAddresses,
  phoneNumber: user.phoneNumbers,
  password: user.password,
});
</script>
