<template>
    <ScrollComponent>
        <h1>Nachrichten</h1>
        <div class="message-page">
            <div class="content m">
                <ChatComponent v-for="chat in chats" :chat="chat" @click="() => loadMessages(chat.user)"></ChatComponent>
            </div>
            <div>
                <div class="content m" v-if="messages">
                    <MessageComponent v-for="message in messages" :message="message"></MessageComponent>
                    <div class="tile send-message">
                        <UiInput>
                            <input type="text">
                        </UiInput>
                        <UiButton>Senden</UiButton>
                    </div>
                </div>
                <div v-if="!messages">
                    <p>Kein Chat ausgewählt</p>
                </div>
            </div>
        </div>
    </ScrollComponent>
</template>

<script setup lang="ts">
import { Account } from '~/classes/Account';
import { Chat } from '~/classes/Chat';
import { Message } from '~/classes/Message';
import { getAllChats } from '~/requests/chat';
import ChatComponent from '~/components/account/ChatComponent.vue';
import { getAllMessagesByUser } from '~/requests/message';
import MessageComponent from '~/components/account/MessageComponent.vue';

const chats: Ref<Chat[] | undefined> = ref(undefined);

const messages: Ref<Message[] | undefined> = ref(undefined);

onMounted(() => {
    getAllChats((_chats: Chat[]) => {
        chats.value = _chats;
    }, () => {});
})

function loadMessages(user: Account | undefined) {
    if(user != null && user.id != null) {
        messages.value = undefined;
        getAllMessagesByUser(user.id, (_messages: Message[]) => {
            messages.value = _messages;
        }, () => {});
    }
    
}
</script>

<style scoped>
.message-page {
    display: grid;
    grid-template-columns: min(10rem) 1fr;
    gap: 1rem;
    height: 100%;
}
.send-message {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.5rem;
}
</style>