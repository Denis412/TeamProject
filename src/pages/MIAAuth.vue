<template>
  <q-page class="flex flex-center">
    <q-form class="column q-gutter-y-md" @submit.prevent="sign">
      <q-input placeholder="Ввведите почту" v-model="email" />
      <q-input
        placeholder="Ввведите пароль"
        type="password"
        v-model="password"
      />

      <q-btn type="submit" label="Войти" />
    </q-form>
  </q-page>
</template>

<script setup>
import { useMutation } from "@vue/apollo-composable";
import { ref } from "vue";
import { signIn } from "src/graphql-operations/mutations";
import { useRouter } from "vue-router";
import { Cookies } from "quasar";

const router = useRouter();

const email = ref("");
const password = ref("");

const { mutate: signInProcess } = useMutation(signIn);

const sign = async () => {
  const { data: res } = await signInProcess({
    input: {
      email: email.value,
      password: password.value,
    },
  });

  localStorage.setItem("token", res.SignIn.access_token);
  localStorage.setItem("user_id", res.SignIn.user_id);

  Cookies.set("Authrization", `Bearer ${res.SignIn.refresh_token}`, {
    httpOnly: true,
    domain: "http://localhost:3000",
    path: "/graphql",
  });

  await router.push({
    name: "home",
  });
};
</script>

<style scoped lang="scss"></style>
