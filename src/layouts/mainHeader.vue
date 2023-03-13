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
              <q-item-section style="padding-right: 3px;" avatar>
                <q-icon name="phone" />
              </q-item-section>
  
              <q-item-section>+7 (900) 232 32-32</q-item-section>
            </q-item>
  
            <q-item class="favorites" tag="a">
              <q-item-section>Избранное</q-item-section>
            </q-item>
  
            <q-item class="cart" tag="a">
              <q-item-section class="fit row no-wrap justify-center items-center">Корзина<span class="cartCount">3</span></q-item-section>
            </q-item>
  
            <q-btn
              class="menu-mobile justify-center items-center"
              dense
              flat
              round
              icon="menu"
              @click="toggleRightDrawer"
            />
          </div>
        </q-toolbar>
      </q-header>
  
      <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
        <!-- drawer content -->
        <q-list>
          <q-item class="favorites" clickable tag="a">
            <q-item-section>Избранное</q-item-section>
          </q-item>
          <q-item class="cart" clickable tag="a">
            <q-item-section class="row">Корзина</q-item-section>
          </q-item>
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
        </q-list>
      </q-drawer>
  
      <q-footer class="footer">
        <q-toolbar> </q-toolbar>
  
        <q-toolbar> </q-toolbar>
      </q-footer>
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
    background: rgba(83, 141, 255, 0.05);
  }
  .header-image {
    width: 155px;
    height: 58px;
  }
  .cart {
    background: rgba(254, 179, 2, 0.45);
    color: #fff;
    border-radius: 13px;
  }
  .cartCount {
    display: block;
    background: #fff;
    color: black;
    padding: 5px 10px;
    border-radius: 10px;
  }
  .menu-mobile {
    display: none;
    padding: 0;
  }
  .footer {
    background: #e5e5e5;
  }
  
  @media (max-width: 1100px) {
    .header-image {
    width: 76px;
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
  </style>