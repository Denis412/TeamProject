<template>
  <div>
    <router-link
      style="text-decoration: none; color: black"
      :to="{ name: title }"
    >
      <q-item clickable tag="a" target="_blank" :href="link">
        <q-item-section v-if="icon" avatar>
          <q-icon :name="icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ title }}</q-item-label>
          <q-item-label caption>{{ caption }}</q-item-label>
        </q-item-section>
      </q-item>
    </router-link>
  </div>
</template>

<script setup>
const { title, caption, icon, link } = defineProps({
  title: String,
  caption: String,
  icon: String,
  link: String,
});
</script>
