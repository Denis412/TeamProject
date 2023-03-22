<template>
  <q-layout view="hhh lpR ffr">
    <v-header/>
    <q-drawer v-model="rightDrawerOpen" :width="250" side="right" bordered>
    <v-nav-links :nav-links="navLinks" />

          <router-link style="text-decoration: none; color: black;" :to="{}">
            <q-item class="favorites-mobile" clickable tag="a">
            <q-item-section>Избранное</q-item-section>
          </q-item>
        </router-link>

    <router-link style="text-decoration: none;" :to="{}">
      <q-item class="cart-mobile" clickable tag="a">
        <q-item-section style="flex-direction: row; justify-content: flex-start;" class="items-center">Корзина<span
            style="margin-left: 10px;" class="cartCount">3</span></q-item-section>
      </q-item>
    </router-link>
  </q-drawer>
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