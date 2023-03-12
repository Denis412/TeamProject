<template>
  <q-list>
    <q-item-label header> Доступные страницы </q-item-label>

    <VNavItem v-for="link in pagesLinks" :key="link.title" v-bind="link" />
  </q-list>
</template>

<script setup>
import VNavItem from "../components/VNavItem.vue";

const pagesLinks = [
  {
    title: "Home",
    caption: "quasar.dev",
    icon: "home",
    link: "https://quasar.dev",
  },
];
</script>
