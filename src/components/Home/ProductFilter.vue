<template>
  <q-list class="row wrap justify-center btn-group">
    <q-item v-for="(btn,index) in filterBtns"
    :key="btn.id">
      <button ref="button" @click="useFilter(index,btn.name)" class="btn-group__item no-border">
      {{btn.name }}
    </button>
    </q-item>
  </q-list>
</template>

<script setup>
import { computed, ref, defineEmits } from "vue";
import { useStore } from "vuex";

const emit = defineEmits(['useFilter']);

const store = useStore();

const filterBtns = computed(() => store.getters["filter/PRODUCT_FILTER"]);

const button=ref();

const useFilter = (index,categoryName)=>{
  button.value.forEach(el => {
    el.classList.remove('active');
  });
  emit('useFilter',categoryName);
  button.value[index].classList.add('active');
}

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
