<template>
  <main>
    <q-form>
      <q-input
        filled
        type="text"
        v-model="form.old_price"
        hint="Не обязательное поле"
        label="Имя"
        lazy-rules
        :rules="[minValue(0)]"
      />
    </q-form>
  </main>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  firstName,
  lastName,
});
</script>
