<template>
  <q-layout view="lHh Lpr lFf">
    <mainHeader />

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay=""
      bordered
      class="relative-position"
    >
      <VNavLinks />

      <div class="absolute">
        <q-btn
          dense
          round
          unelevated
          color="primary"
          icon="chevron_right"
          @click="rightDrawerOpen = false"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive :key="$route.fullPath">
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
