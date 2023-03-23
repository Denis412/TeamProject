<template>
  <q-item-section class="description block q-my-md">
    <div ref="descr_parent" class="description-text relative-position overflow-hidden">
      <p ref="descr" style="z-index: -1;">
      {{ description }}
      <q-btn @click="hideText" class="text-red float-right" flat icon="close" v-show="close"/>
    </p>
    <q-btn @click="moreText" class="more-btn absolute-right z-top text-blue" flat icon="more_horiz" v-show="description.length>40"/>
    </div>
  </q-item-section>
  <div class="price-area row q-ml-sm">
    <div class="price col-4 text-red">От {{ price }} Р</div>
    <div class="old-price col-4 text-grey" v-if="old_price">
      От {{ old_price }} Р
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
const close =ref(false);
const descr_parent = ref();
const descr = ref();
const moreText = ()=>{
  descr_parent.value.classList.remove('overflow-hidden');
  descr.value.className = 'absolute z-max bg-white rounded-borders q-pa-xs border-width';
  close.value=true
}

const hideText = ()=>{
  descr_parent.value.classList.add('overflow-hidden');
  descr.value.className = '';
  close.value=false
}

const { description, price, old_price } = defineProps({
  description: String,
  price: Number,
  old_price: Number,
});
</script>

<style lang="sass" scoped>
.price-area
  display: flex
  font-size: 16px
  .old-price
    text-decoration: line-through
.description
  box-sizing: border-box
  width: 100%
  &>div
    word-break: break-all
    height: 33px
    width: 100%

.more-btn
  background: #F6F9FF
  border: none
.border-width
  border: solid 1px #eeeeee
  width: 100%
</style>
