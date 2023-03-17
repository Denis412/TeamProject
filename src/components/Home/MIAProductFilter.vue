<template>
  <q-list class="row wrap justify-center btn-group">
    <q-item>
      <button
        ref="button"
        @click="useFilter(0, 'Все')"
        class="active btn-group__item no-border"
      >
        Все
      </button>
    </q-item>
    <q-item v-for="(btn, index) in categories" :key="btn.category_name">
      <button
        ref="button"
        @click="useFilter(index + 1, btn.category_name)"
        class="btn-group__item no-border"
      >
        {{ btn.category_name }}
      </button>
    </q-item>
  </q-list>
</template>

<script setup>
import { computed, defineEmits } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getCategories } from "src/graphql-operations/queries";

const queryCategories = useQuery(getCategories);
const categories = computed(
  () => queryCategories.result.value?.categories ?? []
);

const emit = defineEmits(["useFilter"]);

const button = computed(() => document.querySelectorAll(".btn-group__item"));

const useFilter = (index, categoryName) => {
  button.value.forEach((el) => {
    el.classList.remove("active");
  });
  emit("useFilter", categoryName);
  button.value[index].classList.add("active");
};
</script>

<style lang="sass" scoped>
.btn-group
  margin: 0 auto
  width: 90%
  &__item
    background: none
    border-radius: 10px
    &:hover
      color:#feb302
    &.active
      color: #fff
      background-color: #feb302
</style>
