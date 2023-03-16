<template>
  <q-item clickable>
    <router-link
      style="text-decoration: none; color: black"
      class="flex items-center"
      :to="{ name: name }"
    >
      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
      </q-item-section>
    </router-link>
  </q-item>
</template>

<script setup>
const { title, name } = defineProps({
  title: String,
  name: String,
});
</script>

<style lang="scss"></style>
