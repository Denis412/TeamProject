<template>
  <q-page>
    <div class="flex justify-end q-mt-md">
      <router-link :to="{ name: 'AddItem' }" class="link link-btn text-black">
        <q-btn> Добавить товар </q-btn>
      </router-link>
    </div>
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
