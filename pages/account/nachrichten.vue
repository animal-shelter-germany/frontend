<template>
    <ScrollComponent>
        <h1>Nachrichten</h1>
        <div class="message-page">
            <div class="content m">
                <ChatComponent v-for="chat in chats" :chat="chat" @click="() => messages.setChat(chat)"></ChatComponent>
            </div>
            <MessagesComponent ref="messages"></MessagesComponent>
        </div>
    </ScrollComponent>
</template>

<script setup lang="ts">
import { Chat } from '~/classes/Chat';
import { getAllChats } from '~/requests/chat';
import ChatComponent from '~/components/account/ChatComponent.vue';
import MessagesComponent from '~/components/account/nachrichten/MessagesComponent.vue';

const chats: Ref<Chat[] | undefined> = ref(undefined);

const messages = ref();

onMounted(() => {
    getAllChats((_chats: Chat[]) => {
        chats.value = _chats;
    }, () => {});
})
</script>

<style scoped>
.message-page {
    display: grid;
    grid-template-columns: min(13rem) 1fr;
    gap: 1rem;
    height: 100%;
}
</style>