<template>
  <q-item class="product block col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="wrapper q-pa-sm">
      <MIAHeader :image="product.image" :title="product.title" />
      <MIAMainContent
        :description="product.description"
        :price="product.price"
        :old_price="product.old_price"
      />
      <MIAFooter :product="product" />
    </div>
  </q-item>
</template>

<script setup>
import MIAHeader from "../components/PreviewProduct/MIAHeader.vue";
import MIAMainContent from "../components/PreviewProduct/MIAMainContent.vue";
import MIAFooter from "../components/PreviewProduct/MIAFooter.vue";

const { product } = defineProps({
  product: Object,
});
</script>

<style lang="sass" scoped>
.wrapper
  background: #F6F9FF
  border-radius: 26px
.product
  min-height: 504px
  margin-bottom: 56px
</style>
