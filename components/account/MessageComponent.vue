<template>
    <div v-if="message.sender && user" class="tile pointer message" :class="{ own: user.id === message.sender.id }">
        <h3>{{ message.sender.firstName }} {{ message.sender.lastName }}</h3>
        <p>{{ message.text }}</p>
    </div>
</template>

<script setup lang="ts">
import type { Message } from '~/classes/Message';

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
}
</style>