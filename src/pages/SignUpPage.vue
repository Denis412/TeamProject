<template>
  <q-page class="flex flex-center q-pa-md">
    <AuthenticationForm type="signUp" :onSubmit="onSubmit" />
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import AuthenticationForm from "../components/AuthenticationForm.vue";
import userApi from "../sdk/user";

const $q = useQuasar();

const onSubmit = async ({ email, password, accept }) => {
  if (!accept) {
    $q.notify({
      type: "negative",
      message: "Примите условия пользовательского соглашения!",
    });
    return;
  }

  try {
    await userApi.register({ email, password, user_name: "User1" });
  } catch (error) {
    console.log(error);
  }
};
</script>
