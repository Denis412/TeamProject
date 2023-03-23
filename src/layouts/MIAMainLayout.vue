<template>
  <q-layout view="lHh Lpr lFf">
    <mainHeader />

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay=""
      bordered
    >
      <VNavLinks />


    </q-drawer>

    <q-page-container class="q-pa-md">
      <router-view v-slot="{ Component }">
        <keep-alive exclude="MIAProduct">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { provide, ref } from "vue";
import mainHeader from "components/MIAMainHeader.vue";
import MIAUserProfile from "src/components/UserProfile/MIAUserProfile.vue";
import VNavLinks from "src/components/MIANavLinks.vue";

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
