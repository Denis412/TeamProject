<template>
  <q-page>
    <Assortment />
  </q-page>
</template>

<script setup>
import Assortment from "components/Home/MIAAssortment.vue";
</script>

<style lang="scss">
.photo_uploader {
  min-height: 200px;
  background-color: $primary;
  outline: dashed gray;
  border-radius: 6px;

  &:hover {
    background-color: $primary-hover;
  }
}
</style>
