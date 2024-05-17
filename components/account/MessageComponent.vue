<template>
    <div v-if="message.sender && user" class="tile pointer message" :class="{ own: user.id === message.sender.id }">
        <p>{{ message.sender.firstName }} {{ message.sender.lastName }}, {{ dayjs(message.sentAt).format('DD.MM.YYYY HH:mm') + " Uhr" }}</p>
        <p>{{ message.text }}</p>
    </div>
</template>

<script setup lang="ts">
import type { Message } from '~/classes/Message';
import dayjs from 'dayjs';

const user = ref(computed(() => useUserStore().getAccount()));

defineProps<{
    message: Message
}>();
</script>

<style scoped>
.message {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    margin-right: 6rem;
    width: calc(100% - 6rem);
}
.own {
    align-items: flex-end;
    margin: 0;
    margin-left: 6rem;
    width: calc(100% - 6rem);
    background-color: rgb(236, 247, 220);
}
</style>