<template>
  <q-layout view="hHh lpR ffr">
    <v-header/>
    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
    <v-footer/>
  </q-layout>
</template>

<script>
import VHeader from '../layouts/VHeader.vue';
import VFooter from '../layouts/VFooter.vue';

export default {
    components: {
        VHeader, VFooter
    },
};

</script>

<style>

</style>
