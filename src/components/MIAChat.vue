<template>
  <q-page-conainer>
    <div v-for="message in messages" :key="message.id">
      {{ message.first_name }}: {{ message.text }}
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
import { computed, onMounted, ref } from "vue";
import Stomp from "stompjs";
import { useRoute } from "vue-router";
import { useMutation, useQuery } from "@vue/apollo-composable";
import {
  getProductsById,
  getMessagesInChat,
} from "../graphql-operations/queries";
import { createChat, createMessage } from "../graphql-operations/mutations";
import { v4 as uuidv4 } from "uuid";

const route = useRoute();
const product_id = ref(+route.params.productId);

const {
  result: product,
  loading: getiingProduct,
  error,
} = useQuery(getProductsById, {
  id: product_id,
});

const user = window.Clerk.user;
let stompClient = null;
const messages = ref([]);
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

const onConnect = () => {
  stompClient.subscribe("/queue/Chat", onMessage);
};

const onMessage = (message) => {
  console.log(message);
  if (message.headers.to === user.id)
    messages.value.push(JSON.parse(message.body));
};

const sendMessage = async () => {
  const currentProduct = product.value.products[0];
  console.log("product", currentProduct.id);

  // const { data } = await createChate({
  //   id: currentProduct.id,
  //   receiver_id: currentProduct.user_id,
  // });

  // console.log("data", data);

  console.log(currentProduct.id);

  stompClient.send(
    "/exchange/chat",
    {
      to: user.id,
    },
    JSON.stringify({
      user_id: user.id,
      first_name: user.firstName,
      text: message.value,
    })
  );

  // const { data: res } = createMessagee({
  //   id: `${uuidv4()}`,
  //   sender_id: user.id,
  //   receiver_id: currentProduct.user_id,
  //   content: message.value,
  //   chat_id: currentProduct.id,
  // });

  // console.log("res", res);

  message.value = "";
};

onMounted(() => {
  const socket = new WebSocket("ws://localhost:15674/ws");

  stompClient = Stomp.over(socket);
  stompClient.connect("guest", "guest", onConnect, (error) =>
    console.log(error)
  );

  // console.log("query", queryMessages.value);

  // messages.value = queryMessages.value?.messages;
});
</script>

<style></style>
