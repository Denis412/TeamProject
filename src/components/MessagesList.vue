<template>
  <q-list>
    <message-item
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
  </q-list>
</template>

<script setup>
import MessageItem from "./MessageItem.vue";

const { messages } = defineProps({
  messages: Array,
});
</script>

<style scoped lang="scss"></style>
