<template>
    <ScrollComponent>
        <h1>Nachrichten</h1>
        <div class="message-page">
            <div class="content">
                <div class="tile pointer" v-for="chat in chats">
                    <p v-if="chat.user">{{ chat.user.firstName }} {{ chat.user.lastName }}</p>
                </div>
            </div>
            <div>
                <div>
                    <div v-for="message in messages">
                        <p>{{ message.text }}</p>
                    </div>
                </div>
                <div>
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

const chats = ref([new Chat(new Account("492804", "test@gmail.com", "Test", "Account"))]);

const messages = ref([new Message("Hallo!")]);
</script>

<style scoped>
.message-page {
    display: grid;
    grid-template-columns: min(10rem) 1fr;
    gap: 1rem;
    height: 100%;
}
</style>