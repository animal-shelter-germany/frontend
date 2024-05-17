<template>
    <div class="tile pointer">
        <p v-if="chat.user">{{ chat.user.firstName }} {{ chat.user.lastName }}</p>
        <p class="grayed-out">{{ chat.message }}</p>
    </div>
</template>

<script setup lang="ts">
import type { Chat } from '~/classes/Chat';

defineProps<{
    chat: Chat
}>();
</script>