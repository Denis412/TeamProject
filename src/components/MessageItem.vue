<template>
  <q-chat-message
    :text="[text]"
    :name="message.sender.first_name"
    :sent="isSent"
  />
</template>

<script setup>
import { computed } from "vue";

const { message } = defineProps({
  message: Object,
});

const text = computed(() => message.text);
const isSent = computed(
  () => message.sender.id === parseInt(localStorage.getItem("user_id"))
);
</script>

<style scoped lang="scss"></style>
