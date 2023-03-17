<template>
  <q-header class="header">
    <q-toolbar class="flex justify-between">
      <div class="items-center row">
        <q-toolbar-title>
          <q-img class="header-image" src="../assets/logo.png" />
        </q-toolbar-title>

        <VNavLinks class="header-menu row" />
      </div>

      <div class="items-center row">
        <q-item tag="a" class="items-center">
          <q-item-section style="padding-right: 5px; min-width: 0px" avatar>
            <q-icon name="phone" />
          </q-item-section>

          <q-item-section class="link">+7 (900) 232 32-32</q-item-section>
        </q-item>

        <VNavItem class="favorites" title="Избранное" name="favorites" />

        <q-item clickable class="cart" tag="a">
          <q-item-section
            style="flex-direction: row"
            class="fit justify-center items-center"
          >
            Корзина
            <span style="margin-left: 10px" class="cartCount">3</span>
          </q-item-section>
        </q-item>

        <q-item id="auth-links">
          <q-btn @click="userApi.login"> Войти </q-btn>
        </q-item>

        <q-item id="user-button"></q-item>

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
</template>

<script setup>
import VNavLinks from "./MIANavLinks.vue";
import VNavItem from "./MIANavItem.vue";
import { inject } from "vue";
import userApi from "../sdk/user";

const toggleRightDrawer = inject("toggleRightDrawer");
</script>

<style lang="scss">
.header {
  color: black;
  padding: 30px 0;
  font-size: 18px;
  background: #f6f9ff;

  &-image {
    width: 155px;
    height: 58px;
  }
}

.cart {
  border-radius: 13px;
  background: rgba(254, 179, 2, 0.45);
  color: #fff;

  &:hover {
    background-color: $primary;
  }
}

.cartCount {
  display: block;
  background: #fff;
  color: black;
  padding: 5px 10px;
  border-radius: 10px;
}
.menu-mobile {
  color: #feb302;
  display: none;
}

@media (max-width: 1400px) {
  .header {
    font-size: 14px;
  }
}

@media (max-width: 1145px) {
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
    font-size: 16px;
  }
}

@media (max-width: 550px) {
  .header {
    padding: 5px 0;
    font-size: 12px;

    &-image {
      width: 78px;
      height: 26px;
    }
  }
}
</style>
