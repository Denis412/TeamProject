<template>
    <router-link
    style="text-decoration: none; color: black;"
      class="flex items-center"
      :to="{ name: name }"
    >
    <q-item clickable style="width: 100%;">

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
      </q-item-section>
    </q-item>

    </router-link>
</template>

<script setup>
const { title, name } = defineProps({
  title: String,
  name: String,
});
</script>

<style lang="scss"></style>
