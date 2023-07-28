<template>
  <q-page>
    <div class="flex justify-end q-mt-md q-gutter-x-md">
      <router-link :to="{ name: 'AddItem' }" class="link link-btn text-black">
        <q-btn> Добавить товар </q-btn>
      </router-link>

      <q-btn label="Написать администратору" @click="redirectToChat" />
    </div>
    <Assortment />
  </q-page>
</template>

<script setup>
import { useMutation, useQuery } from "@vue/apollo-composable";
import Assortment from "components/Home/MIAAssortment.vue";
import { useRouter } from "vue-router";
import {
  getCreateObjectDocumentNode,
  getPaginateObjectsDocumentNode,
} from "src/graphql-operations";
import { computed } from "vue";

const router = useRouter();

const chatsQuery = useQuery(getPaginateObjectsDocumentNode("chats", `{ id }`), {
  where: {
    column: "saller->id",
    operator: "EQ",
    value: localStorage.getItem("user_id"),
  },
});

const chat = computed(() => chatsQuery.result.value?.chats[0]);

const createChatMutation = useMutation(
  getCreateObjectDocumentNode("chat", `{ id }`)
);

const redirectToChat = async () => {
  await chatsQuery.refetch();

  if (chat.value) {
    await router.push({
      name: "chat",
      params: { id: chat.value.id },
    });
    return;
  }

  const { data: ch } = await createChatMutation.mutate({
    input: {
      name: "Администратор",
      buyer: {
        id: 5,
      },
      saller: {
        id: parseInt(localStorage.getItem("user_id")),
      },
    },
  });

  await router.push({
    name: "chat",
    params: { id: ch.createChat.id },
  });
};
</script>

<style lang="scss">
.photo_uploader {
  min-height: 200px;
  background-color: $primary;
  outline: dashed gray;
  border-radius: 6px;

  &:hover {
    background-color: $primary-hover;
  }
}
</style>
