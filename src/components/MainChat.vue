<template>
  <div class="main-chat__wrapper">
    <div class="main-chat__header">
      <h4 class="q-ma-none">
        {{ chat.saller.first_name }} {{ chat.saller.last_name }}
      </h4>
    </div>

    <div class="main-chat__content">
      <div class="main-chat__content_inner">
        <messages-list :messages="messages" />
      </div>
    </div>

    <main-footer />
  </div>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import MessagesList from "./MessagesList.vue";
import { getPaginateObjectsDocumentNode } from "src/graphql-operations";
import { computed, onMounted, ref, watch } from "vue";
import MainFooter from "./MainFooter.vue";
import socket from "src/lib/socketIO";

const { chat } = defineProps({
  chat: Object,
});

const messagesQuery = useQuery(
  getPaginateObjectsDocumentNode(
    "messages",
    `{
  id
  text
  sender {
    id
    first_name
    last_name
  }
  recipient {
    id
    first_name
    last_name
  }
}`
  ),
  {
    where: {
      column: "chat->id",
      operator: "EQ",
      value: `${chat.id}`,
    },
  },
  { fetchPolicy: "network-only" }
);

const messages = ref([]);

watch(messagesQuery.result, (value) => {
  if (!value) return;

  messages.value = [...value.messages];
});

onMounted(() => {
  socket.on("message", (data) => {
    if (data.chat.id === chat.id) messages.value.push(data);
  });
});
</script>

<style scoped lang="scss">
.main-chat__wrapper {
  display: flex;
  flex-direction: column;
  min-height: inherit;
}

.main-chat__header {
  padding: 8px 16px;
  background-color: lightgray;
}

.main-chat__content {
  position: relative;
  flex: 1;
}
.main-chat__content_inner {
  display: flex;

  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  flex-direction: column-reverse;

  overflow-y: auto;
  padding: 8px 24px;
}
</style>
