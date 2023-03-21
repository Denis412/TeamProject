<template>
  <q-layout view="lHh Lpr lFf">
    <mainHeader />

    <!-- <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay=""
      show-if-above
      bordered
    >
      <VNavLinks />


    </q-drawer> -->

    <q-page-container class="q-pa-md">
      <router-view v-slot="{ Component }">
        <keep-alive exclude="MIAProduct">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { onMounted, provide, ref } from "vue";
import mainHeader from "components/MIAMainHeader.vue";
import MIAUserProfile from "src/components/UserProfile/MIAUserProfile.vue";
import stompClient from "../lib/stompClient";

const rightDrawerOpen = ref(false);

const messages = ref([]);
provide("messages", messages);

provide("toggleRightDrawer", () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
});

onMounted(() => {
  const onMessage = (message) => {
    const user = window.Clerk.user;

    if (message.headers.to === user?.id)
      messages.value.push(JSON.parse(message.body));
  };

  const onConnect = () => {
    stompClient.subscribe("/queue/Chat", onMessage);
  };

  stompClient.connect("user1", "user1", onConnect, (error) =>
    console.log(error)
  );
});
</script>

<style lang="scss">
.max-site {
  max-width: $max-size-site;
}
</style>
