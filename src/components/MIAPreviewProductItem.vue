<template>
  <q-item class="product block">
    <div class="wrapper q-pa-sm">
      <MIAHeader :image="imageUrl" :title="product.title" />
      <MIAMainContent
        :description="product.description"
        :price="parseFloat(product.price)"
        :old_price="parseFloat(product.old_price)"
      />
      <MIAFooter :product="product" />
    </div>
  </q-item>
</template>

<script setup>
import MIAHeader from "../components/PreviewProduct/MIAHeader.vue";
import MIAMainContent from "../components/Product/MIAMainContent.vue";
import MIAFooter from "../components/PreviewProduct/MIAFooter.vue";

const { product, imageUrl } = defineProps({
  product: Object,
  imageUrl: String,
});
</script>

<style lang="sass" scoped>
.wrapper
  background: #F6F9FF
  border-radius: 26px
  word-break: break-all
.product
  min-height: 504px
  margin-bottom: 56px
  width: 400px
</style>
