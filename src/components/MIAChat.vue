<template>
  <q-page-conainer>
    <div v-if="loading">Загрузка сообщений...</div>
    <div v-else>
      <div v-for="chat in queryMessages" :key="chat.id">
        <div v-for="message in chat.messages" :key="message.id">
          <q-chat-message
            :text="[message.content]"
            :sent="checkSent(message)"
          />
        </div>
      </div>
    </div>

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
import { inject, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useMutation, useQuery, useSubscription } from "@vue/apollo-composable";
import {
  getProductsById,
  checkChatId,
  getMessagesInChat,
} from "../graphql-operations/queries";
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

const { result: product } = useQuery(getProductsById, {
  id: product_id,
});

const { result: chatId } = useQuery(checkChatId, {
  sender_id: window.Clerk.user.id,
  receiver_id: product.value.products[0].user_id,
  product_id: product.value.products[0].id,
});

const queryMessages = computed(
  () =>
    useQuery(getMessagesInChat, {
      id: chatId.value?.chats[0]?.id,
    }).result.value?.chats
);

const user = window.Clerk.user;
const messages = inject("messages");
const message = ref("");

const sendMessage = async () => {
  const currentProduct = product.value.products[0];
  let currentChatId = chatId.value.chats[0]?.id;

  const messageData = {
    user_id: user.id,
    avatar_url: user.profileImageUrl,
    first_name: user.firstName,
    text: message.value,
  };

  if (currentProduct.user_id === user.id) {
    await stompClient.send(
      "/exchange/chat",
      {
        to: messages.value[0].user_id,
      },
      JSON.stringify(messageData)
    );
  } else {
    await stompClient.send(
      "/exchange/chat",
      {
        to: currentProduct.user_id,
      },
      JSON.stringify(messageData)
    );
  }

  console.log("current", chatId.value);

  if (!currentChatId) {
    const { data } = await createChate({
      receiver_id: currentProduct.user_id,
      product_id: currentProduct.id,
    });

    currentChatId = data.insert_chats_one.id;

    console.log(currentChatId);
  }

  try {
    const res = await createMessagee({
      id: `${uuidv4()}`,
      receiver_id: currentProduct.user_id,
      content: message.value,
      chat_id: currentChatId,
      sender_username: user.firstName,
      sender_avatar_url: user.profileImageUrl,
    });

    console.log(res);
  } catch (error) {
    console.log(error);
  }

  messages.value.push(messageData);

  message.value = "";
};
</script>
