<template>
  <q-list>
    <VNavItem v-for="link in pagesLinks" :key="link.title" v-bind="link" />
  </q-list>
</template>

<script setup>
import VNavItem from "../components/VNavItem.vue";

const pagesLinks = [
  {
    title: "Главная",
    name: "home",
  },
  {
    title: "Каталог",
    name: "catalog",
  },
  {
    title: "О нас",
    name: "about-us",
  },
  {
    title: "О доставке",
    name: "about-shipping",
  },
  {
    title: "Магазины",
    name: "shops",
  },
  {
    title: "Контакты",
    name: "contacts",
  },
];
</script>
