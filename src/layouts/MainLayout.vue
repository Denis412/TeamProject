<template>
  <q-layout view="lHh Lpr lFf">
    <mainHeader />

    <!-- <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay=""
      show-if-above
      bordered
    >
      <VNavLinks />
    </q-drawer> -->

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { provide, ref } from "vue";
import mainHeader from "../components/mainHeader.vue";

const rightDrawerOpen = ref(false);

provide("toggleRightDrawer", () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
});
</script>

<style lang="scss">
.max-site {
  max-width: $max-size-site;
}
</style>
