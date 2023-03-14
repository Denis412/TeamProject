<template>
  <q-layout view="hHh lpR fff">
    <q-header class="header">
      <q-toolbar class="flex justify-between">
        <div class="items-center row">
          <q-toolbar-title>
            <q-img class="header-image" src="../assets/logo.png" />
          </q-toolbar-title>

          <q-list class="header-menu row">
            <q-item clickable tag="a">
              <q-item-section>Главная</q-item-section>
            </q-item>
            <q-item clickable tag="a">
              <q-item-section>Каталог</q-item-section>
            </q-item>
            <q-item clickable tag="a">
              <q-item-section>О нас</q-item-section>
            </q-item>
            <q-item clickable tag="a">
              <q-item-section>О доставке</q-item-section>
            </q-item>
            <q-item clickable tag="a">
              <q-item-section>Магазины</q-item-section>
            </q-item>
            <q-item clickable tag="a">
              <q-item-section>Контакты</q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="items-center row">
          <q-item tag="a"
          class="items-center">
            <q-item-section style="padding-right: 5px; min-width: 0px;" avatar>
              <q-icon name="phone" />
            </q-item-section>

            <q-item-section>+7 (900) 232 32-32</q-item-section>
          </q-item>

          <q-item class="favorites" tag="a">
            <q-item-section>Избранное</q-item-section>
          </q-item>

          <q-item class="cart" tag="a">
            <q-item-section style="flex-direction: row;" class="fit justify-center items-center">Корзина<span style="margin-left: 10px;" class="cartCount">3</span></q-item-section>
          </q-item>

          <q-btn
            class="menu-mobile justify-center items-center"
            dense
            flat
            icon="menu"
            @click="toggleRightDrawer"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" :width="250" side="right" overlay bordered>
      <!-- drawer content -->
      <q-list>
        <q-item>
          <q-item-section>Главная</q-item-section>
        </q-item>
        <q-item>
          <q-item-section>Каталог</q-item-section>
        </q-item>
        <q-item>
          <q-item-section>О нас</q-item-section>
        </q-item>
        <q-item>
          <q-item-section>О доставке</q-item-section>
        </q-item>
        <q-item>
          <q-item-section>Магазины</q-item-section>
        </q-item>
        <q-item>
          <q-item-section>Контакты</q-item-section>
        </q-item>
        <q-item class="favorites-mobile" clickable tag="a">
          <q-item-section>Избранное</q-item-section>
        </q-item>
        <q-item class="cart-mobile" clickable tag="a">
          <q-item-section style="flex-direction: row; justify-content: flex-start;" class="items-center">Корзина<span style="margin-left: 10px;" class="cartCount">3</span></q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>

<style>
.header {
  color: black;
  padding: 30px 0;
  font-size: 18px;
  background: rgba(83, 141, 255, 0.05);
}
.header-image {
  width: 155px;
  height: 58px;
}
.cart {
  border-radius: 13px;
}
.cart,
.cart-mobile {
  background: rgba(254, 179, 2, 0.45);
  color: #fff;
}
.cartCount {
  display: block;
  background: #fff;
  color: black;
  padding: 5px 10px;
  border-radius: 10px;
}
.menu-mobile {
  color: #FEB302;
  display: none;
}

@media (max-width: 1400px) {
  .header {
    font-size: 14px;
  }
}

@media (max-width: 1130px) {
  .header-image {
  width: 78px;
  height: 26px;
  }

  .menu-mobile {
    display: block;
  }

  .header-menu,
  .cart,
  .favorites {
    display: none;
  }
}

@media (max-width: 800px) {
  .header {
    padding: 5px 0;
    font-size: 12px;
  }
}
</style>