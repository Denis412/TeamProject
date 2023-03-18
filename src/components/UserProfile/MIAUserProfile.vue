<template>
  <q-card>
    <q-linear-progress :value="1" color="primary" />

    <q-card-section class="items-center no-wrap">
      <MIAProfileHeader />
      <MIAProfileMain />
      <MIAProfileFooter />
    </q-card-section>
  </q-card>
</template>

<script setup>
import MIAProfileHeader from "./MIAProfileHeader.vue";
import MIAProfileMain from "./MIAProfileMain.vue";
import MIAProfileFooter from "./MIAProfileFooter.vue";
</script>

<style></style>
