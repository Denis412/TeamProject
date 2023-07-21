<template>
  <q-form
    @submit="
      onSubmit({
        email: form.email.value,
        password: form.password.value,
        accept: form.accept.value,
      })
    "
    @reset="onReset"
    class="q-gutter-md wf-800 bg-blue-1 q-pr-md q-pb-md rounded-borders"
  >
    <div class="text-h4 text-center">Магазинчик</div>
    <div>
      <q-input
        filled
        type="email"
        v-model="form.email.value"
        label="Введите email"
        lazy-rules
        :rules="[required]"
      />

      <q-input
        filled
        type="password"
        v-model="form.password.value"
        label="Введите пароль"
        lazy-rules
        :rules="[required, minLength(8)]"
      />
    </div>

    <q-toggle
      v-if="type === 'signUp'"
      v-model="form.accept.value"
      label="Я принимаю условия пользовательского соглашения"
    />

    <div class="flex column">
      <q-btn
        style="flex-grow: 2"
        :label="labelSubmitButton"
        type="submit"
        color="primary"
      />
      <q-btn
        label="Очистить"
        type="reset"
        color="primary"
        flat
        class="q-mt-sm"
      />
    </div>
  </q-form>
</template>

<script setup>
import { useForm } from "../use/form";
import { useValidators } from "../use/validators";
import { computed } from "vue";

const { required, minLength } = useValidators();

const { type, onSubmit } = defineProps({
  type: {
    type: String,
    required: true,
  },
  onSubmit: {
    type: Function,
    default: () => {},
  },
});

const labelSubmitButton = computed(() =>
  type === "signUp" ? "Регистрация" : "Войти"
);

const form = useForm({
  email: { value: "d.a.malyshev22@gmail.com" },
  password: { value: "mypassword" },
  accept: { value: false },
});

const onReset = () => {
  form.email.value = "";
  form.password.value = "";
  form.accept.value = false;
};
</script>
