<template>
  <q-page>
    <!-- <HeaderPage /> -->
    <!-- <p class="text-center">{{ currentUser.user_name }}</p> -->
    <Assortment />
  </q-page>
</template>

<script setup>
import Assortment from "components/Home/MIAAssortment.vue";
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
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
