<template>
  <q-layout view="lHh Lpr lFf">
    <VHeader />

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <VNavLinks />
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { provide, ref } from "vue";
import VNavLinks from "../layouts/VNavLinks.vue";
import VHeader from "./VHeader.vue";

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

provide("toggleLeftDrawer", toggleLeftDrawer);
</script>
