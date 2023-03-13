<template>
  <q-page class="flex flex-center q-pa-md">
    <AuthenticationForm type="signIn" :onSubmit="onSubmit" />
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import AuthenticationForm from "../components/AuthenticationForm.vue";
import userApi from "../sdk/user";
import { useRouter } from "vue-router";

const $q = useQuasar();
const router = useRouter();

const onSubmit = async ({ email, password, accept }) => {
  try {
    await userApi.login({ email, password });

    router.push({
      name: "Home",
    });

    $q.notify({
      type: "positive",
      message: "Вы вошли!",
    });
  } catch (error) {
    console.log(error);
  }
};
</script>
