<template>
  <q-header class="header flex justify-center">
    <q-toolbar style="max-width: 1650px;" class="flex justify-between">
      <div class="items-center row">
        <q-toolbar-title>
          <q-img class="header-image" src="../assets/logo.png" />
        </q-toolbar-title>
        <v-nav-links class="header-menu row" :nav-links="navLinks" />
      </div>
      <div class="items-center row">

        <router-link style="text-decoration: none; color: black;" :to="{}">
          <q-item tag="a"
          class="items-center">
            <q-item-section style="padding-right: 5px; min-width: 0px;" avatar>
              <q-icon name="phone" />
            </q-item-section>

            <q-item-section>+7 (900) 232 32-32</q-item-section>
          </q-item>
        </router-link>
          <router-link style="text-decoration: none; color: black;" :to="{}">
            <q-item class="favorites" tag="a">
            <q-item-section>Избранное</q-item-section>
          </q-item>
        </router-link>

        <router-link style="text-decoration: none; color: black;" :to="{}">
          <q-item class="cart" target="_blank" clickable tag="a">
            <q-item-section style="flex-direction: row; justify-content: flex-start;" class="items-center">Корзина<span
                style="margin-left: 10px;" class="cartCount">3</span></q-item-section>
          </q-item>
        </router-link>
        <q-btn class="menu-mobile justify-center items-center" dense flat icon="menu" @click="toggleRightDrawer" />
      </div>

    </q-toolbar>

  </q-header>

  <q-drawer show-if-above v-model="rightDrawerOpen" :width="250" side="right" bordered>
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
</template>

<script>
import { ref } from "vue";
import VNavLinks from "./VNavLinks.vue";

export default {
  components: {
    VNavLinks,
  },
  data() {
    return {
      navLinks: [
        { id: 1, title: 'Главная', icon: '', link: '' },
        { id: 2, title: 'Каталог', icon: '', link: '' },
        { id: 3, title: 'О нас', icon: '', link: '' },
        { id: 4, title: 'О доставке', icon: '', link: '' },
        { id: 5, title: 'Магазины', icon: '', link: '' },
        { id: 6, title: 'Контакты', icon: '', link: '' },
      ]
    }
  },
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

@media (max-width: 1150px) {
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