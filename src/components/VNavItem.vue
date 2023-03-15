<template>
  <div>
    <router-link
    style="text-decoration: none; color: black"
    to="/"
  >
    <q-item clickable tag="a" target="_blank" :href=navLink.link>
      <q-item-section v-show="navLink.icon" style="padding-right: 5px; min-width: 0px;" avatar>
        <q-icon :name=navLink.icon />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ navLink.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </router-link>
  </div>
</template>

<script>
export default {
  props: {
      type: Array,
      required: true
  }
}
</script>
