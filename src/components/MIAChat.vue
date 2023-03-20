<template>
  <q-page-conainer>
    <div v-for="message in messages" :key="message.id">
      {{ message.user }}: {{ message.text }}
    </div>

    <q-form @submit="sendMessage">
      <q-input
        type="text"
        v-model="message"
        placeholder="Введите сообщение..."
      />
      <button type="submit">Отправить сообщение</button>
    </q-form>
  </q-page-conainer>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Stomp from "stompjs";

const user = window.Clerk.user;
let stompClient = null;
const messages = ref([]);
const message = ref("");

const onConnect = () => {
  stompClient.subscribe("/queue/Chat", onMessage);
};

const onMessage = (message) => {
  if (message.headers.to === user.id)
    messages.value.push(JSON.parse(message.body));
};

const sendMessage = () => {
  stompClient.send(
    "/exchange/chat",
    {
      to: user.id,
    },
    JSON.stringify({
      user: user.id,
      text: message.value,
    })
  );

  message.value = "";
};

onMounted(() => {
  const socket = new WebSocket("ws://localhost:15674/ws");

  stompClient = Stomp.over(socket);
  stompClient.connect("guest", "guest", onConnect, (error) =>
    console.log(error)
  );
});
</script>

<style></style>
