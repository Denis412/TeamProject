<template>
    <q-footer class="footer flex justify-center">
      <q-toolbar style="max-width: 1550px;" class="footer-top flex justify-between">
        <div>
          <v-nav-links class="footer-menu row" :nav-links="navLinks" />
        </div>
        <div class="row">
          <router-link style="text-decoration: none; color: black;" :to="{}">
            <q-item class="favorites" tag="a">
            <q-item-section>Избранное</q-item-section>
          </q-item>
        </router-link>
          
          <router-link style="text-decoration: none;" to="/">
          <q-item class="cart" target="_blank" clickable tag="a">
            <q-item-section style="flex-direction: row; justify-content: flex-start;" class="items-center">Корзина</q-item-section>
          </q-item>
        </router-link>
        </div>
      </q-toolbar>
      <q-toolbar style="max-width: 1600px;" class="justify-between self-start">
          <div class="footer-section self-start">
              <div class="footer-title">Раздел 1</div>
              <v-nav-links :nav-links="navLinks1"/>
          </div>
          <div class="footer-section self-start">
              <div class="footer-title">Раздел 2</div>
              <v-nav-links :nav-links="navLinks2"/>
          </div>
          <div class="footer-section self-start">
              <div class="footer-title">Раздел 3</div>
              <v-nav-links :nav-links="navLinks3"/>
          </div>
          <div class="footer-section footer-contacts self-start">
              <div class="footer-title">Контакты</div>
              <v-nav-links :nav-links="navLinks4"/>
          </div>
      </q-toolbar>
    </q-footer>
  </template>
  
  <script>
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
        ],
        navLinks1: [
          {id: 1, title: 'Сухофрукты', icon: '', link: ''},
          {id: 2, title: 'Орехи', icon: '', link: ''},
          {id: 3, title: 'Ягоды сушеные', icon: '', link: ''},
          {id: 4, title: 'Цукаты', icon: '', link: ''},
          {id: 5, title: 'Экзотические сухофрукты', icon: '', link: ''}
        ],
        navLinks2: [
          {id: 1, title: 'Восточные сладости', icon: '', link: ''},
          {id: 2, title: 'Семена и бобовые', icon: '', link: ''},
          {id: 3, title: 'Снеки', icon: '', link: ''},
          {id: 4, title: 'Бакалея', icon: '', link: ''},
          {id: 5, title: 'Специи', icon: '', link: ''}
        ],
        navLinks3: [
          {id: 1, title: 'Сухофрукты', icon: '', link: ''},
          {id: 2, title: 'Орехи', icon: '', link: ''},
          {id: 3, title: 'Ягоды сушеные', icon: '', link: ''},
          {id: 4, title: 'Цукаты', icon: '', link: ''},
          {id: 5, title: 'Экзотические сухофрукты', icon: '', link: ''}
        ],
        navLinks4: [
          {id: 1, title: '8 993 313 31 33', icon: 'phone', link: ''},
          {id: 2, title: '8 993 313 31 33', icon: 'phone', link: ''},
          {id: 3, title: 'Sychofrycti@gmail.com', icon: 'mail', link: ''},
          {id: 4, title: 'г. Москва улица кубао набережная 56 литер 2', icon: 'map', link: ''},
        ]
      }
    },
  
  }
  </script>
  
  <style>
  .footer {
    background: #fff;
    padding: 50px 0;
  }
  .footer-top {
    padding: 30px 0 80px;
    max-width: 1500px;
  }
  .footer-section {
    max-width: 250px;
  }
  .footer-title {
    color: black;
    font-size: 20px;
    font-weight: 700;
    margin-left: 15px;
    position: relative;
    padding-bottom: 20px;
  }
  .footer-title::after {
    content: '';
    margin-top: 10px;
    position: absolute;
    display: block;
    width: 40px;
    height: 1px;
    background: black;
  }

  @media (max-width: 600px) {
    .footer-section:not(.footer-contacts),
    .footer-top {
    display: none;
  } 
  }
  </style>