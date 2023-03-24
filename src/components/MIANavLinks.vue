<template>
  <q-list>
    <VNavItem v-for="link in pagesLinks" :key="link.title" v-bind="link" />
  </q-list>
</template>

<script setup>
import VNavItem from "./MIANavItem.vue";

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
    title: "Корзина",
    name: "cart",
  },
  {
    title: "Избранное",
    name: "favorites",
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
