<template>
  <footer class="main-footer">
    <q-form class="flex no-wrap" @submit="sendMessage">
      <q-input
        ref="mainInput"
        outlined
        v-model="message"
        class="main-input"
        placeholder="Введите ваше сообщение"
      />
      <q-btn flat class="text-grey" icon="send" type="submit" />
    </q-form>
  </footer>
</template>

<script setup>
import { computed, ref } from "vue";
import {
  provideApolloClient,
  useMutation,
  useQuery,
} from "@vue/apollo-composable";
import apolloClient from "src/apollo/apollo-client";
import {
  getCreateObjectDocumentNode,
  getObjectByIdDocumentNode,
} from "src/graphql-operations";
import { useRoute } from "vue-router";
import socket from "src/lib/socketIO";

provideApolloClient(apolloClient);

const route = useRoute();

const chatQuery = useQuery(
  getObjectByIdDocumentNode(
    "chat",
    `{ id buyer { id first_name } saller { id first_name } }`
  ),
  {
    id: parseInt(route.params.id),
  }
);

const chat = computed(() => chatQuery.result.value?.chat);

const messageMutation = useMutation(
  getCreateObjectDocumentNode("message", `{ id }`)
);

const mainInput = ref(null);
const message = ref("");

const sendMessage = async () => {
  if (!message.value || !message.value.trim()) return;

  const [recipient, sender] =
    localStorage.getItem("user_id") === chat.value.buyer.id
      ? [chat.value.saller, chat.value.buyer]
      : [chat.value.buyer, chat.value.saller];

  mainInput.value.focus();

  socket.emit("newMessage", {
    text: message.value,
    sender: {
      id: parseInt(localStorage.getItem("user_id")),
      first_name: sender.first_name,
    },
    recipient: {
      id: parseInt(recipient.id),
      first_name: recipient.first_name,
    },
    chat: {
      id: parseInt(route.params.id),
    },
  });

  message.value = "";
};
</script>

<style scoped lang="scss">
.main-footer {
  background-color: #fff;
}

.main-input {
  width: 100%;
}
</style>
