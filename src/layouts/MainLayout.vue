<template>
  <q-layout view="lHh Lpr lFf">
    <mainHeader />

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
import mainHeader from "../components/mainHeader.vue";

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

provide("toggleLeftDrawer", toggleLeftDrawer);
</script>
