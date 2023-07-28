<template>
  <q-page>
    <main-chat v-if="!loading" :chat="chat" />
  </q-page>
</template>

<script setup>
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import apolloClient from "src/apollo/apollo-client";
import MainChat from "src/components/MainChat.vue";
import { getObjectByIdDocumentNode } from "src/graphql-operations";
import { computed } from "vue";
import { useRoute } from "vue-router";

provideApolloClient(apolloClient);

const route = useRoute();

const chatQuery = useQuery(
  getObjectByIdDocumentNode(
    "chat",
    `{
      id
      name
      buyer {
        id
        first_name
      }
      saller {
        id
        first_name
      }
    }`
  ),
  {
    id: parseInt(route.params.id),
  }
);

const loading = computed(() => chatQuery.loading.value);
const chat = computed(() => chatQuery.result.value?.chat);
</script>

<style scoped lang="scss"></style>
