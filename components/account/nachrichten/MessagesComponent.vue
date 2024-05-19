<template>
    <div>
        <div v-if="chat" class="full-height">
            <div v-if="messages" class="grid-rows__1fr-auto">
                <div class="content">
                    <MessageComponent v-for="message in messages" :message="message"></MessageComponent>
                </div>
                <form class="send-message tile" @submit.prevent="() => sendMessage(chat)">
                    <UiInput>
                        <textarea v-model="message.message"></textarea>
                    </UiInput>
                    <UiButton icon="mail" reverse :loading="loading">Senden</UiButton>
                </form>
            </div>
            <div v-if="!messages">
                <LoadingComponent></LoadingComponent>
            </div>
        </div>
        <div v-if="!chat" class="full-height">
            <p class="no-chat">Kein Chat ausgewählt</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Chat } from '~/classes/Chat';
import MessageComponent from '../MessageComponent.vue';
import { Message } from '~/classes/Message';
import { createMessage, getAllMessagesByUser } from '~/requests/message';
import { MessageCreation } from '~/classes/MessageCreation';

const chat: Ref<Chat | undefined> = ref(undefined);
const messages: Ref<Message[] | undefined> = ref(undefined);

function setChat(_chat: Chat) {
    chat.value = _chat;
    if(_chat.user && _chat.user.id) {
        messages.value = undefined;
        getAllMessagesByUser(_chat.user.id, (_messages:  Message[]) => {
            messages.value = _messages;
        }, () => {});
    }
}

const message = ref(new MessageCreation());
const loading = ref(false);

function sendMessage(chat: Chat | undefined) {
    if(chat && chat.user && chat.user.id) {
        loading.value = true;
        createMessage(chat.user.id, message.value, (_message: Message) => {
            if(messages.value) {
                messages.value.push(_message);
                loading.value = false;
                message.value.message = "";
            }
        }, () => {
            loading.value = false;
        });
    }
}

defineExpose({
    setChat
});
</script>

<style scoped>
.send-message {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.5rem;
}
.no-chat {
    text-align: center;
    padding: 2rem;
}
</style>