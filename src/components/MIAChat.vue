<template>
  <q-page-conainer>
    <div v-for="message in messages" :key="message.id">
      <q-chat-message
        :avatar="message.avatar_url"
        :name="message.first_name"
        :text="[message.text]"
        :sent="checkSent(message)"
      />
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
import { inject, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useMutation, useQuery } from "@vue/apollo-composable";
import { getProductsById } from "../graphql-operations/queries";
import { createChat, createMessage } from "../graphql-operations/mutations";
import stompClient from "src/lib/stompClient";
import { v4 as uuidv4 } from "uuid";

const route = useRoute();
const product_id = ref(+route.params.productId);

const { mutate: createChate } = useMutation(createChat);
const { mutate: createMessagee } = useMutation(createMessage);

const checkSent = (message) => {
  console.log("checkSent", message);
  return message.user_id === user.id;
};

const {
  result: product,
  loading: getiingProduct,
  error,
} = useQuery(getProductsById, {
  id: product_id,
});

const user = window.Clerk.user;
//let stompClient = null;
const messages = inject("messages");
const message = ref("");

/*const queryMessages = computed(
  () =>
    useQuery(getMessagesInChat, {
      id: +route.params.productId,
    }).result.value?.messages
);*/

// const { result: queryMessages, loading } = useQuery(getMessagesInChat, {
//   id: +route.params.productId,
// });

// const { mutate: createChate } = useMutation(createChat);
// const { mutate: createMessagee } = useMutation(createMessage);

const sendMessage = async () => {
  const currentProduct = product.value.products[0];

  const messageData = {
    user_id: user.id,
    avatar_url: user.profileImageUrl,
    first_name: user.firstName,
    text: message.value,
  };

  if (currentProduct.user_id === user.id) {
    stompClient.send(
      "/exchange/chat",
      {
        to: messages.value[0].user_id,
      },
      JSON.stringify(messageData)
    );
  } else {
    stompClient.send(
      "/exchange/chat",
      {
        to: currentProduct.user_id,
      },
      JSON.stringify(messageData)
    );
  }

  const { data } = await createChate({
    receiver_id: currentProduct.user_id,
    product_id: currentProduct.id,
  });

  const { data: res } = await createMessagee({
    id: `${uuidv4()}`,
    receiver_id: currentProduct.user_id,
    content: message.value,
    chat_id: data.insert_chats_one.id,
  });

  messages.value.push(messageData);

  message.value = "";
};

onMounted(() => {
  //amqp://guest:guest@172.24.96.1:5672
  // const socket = new WebSocket("ws://192.168.77.1:15674/ws");
  // stompClient = Stomp.over(socket);
  // stompClient.connect("user1", "user1", onConnect, (error) =>
  //   console.log(error)
  // );
  // console.log("query", queryMessages.value);
  // messages.value = queryMessages.value?.messages;
});
</script>

<style></style>
