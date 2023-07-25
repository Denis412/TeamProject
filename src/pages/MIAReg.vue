<template>
  <q-page class="flex flex-center">
    <q-form class="column q-gutter-y-md" @submit.prevent="sign">
      <q-input placeholder="Ввведите имя" v-model="first_name" />
      <q-input placeholder="Ввведите фамилию" v-model="last_name" />
      <q-input placeholder="Ввведите почту" v-model="email" />

      <q-input
        placeholder="Ввведите пароль"
        type="password"
        v-model="password"
      />

      <q-btn type="submit" label="Зарегистрироваться" />
    </q-form>
  </q-page>
</template>

<script setup>
import { useMutation } from "@vue/apollo-composable";
import { ref } from "vue";
import { signUp } from "src/graphql-operations/mutations";
import { useRouter } from "vue-router";

const router = useRouter();

const first_name = ref("");
const last_name = ref("");
const email = ref("");
const password = ref("");

const { mutate: signUpProcess } = useMutation(signUp);

const sign = async () => {
  const { data: res } = await signUpProcess({
    input: {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value,
    },
  });

  await router.push({
    name: "login",
  });
};
</script>

<style scoped lang="scss"></style>
