<template>
    <button class="button pointer center-center"><UiIcon v-if="icon">{{ icon }}</UiIcon><slot></slot></button>
</template>

<script setup lang="ts">
import UiIcon from './UiIcon.vue';

defineProps({
    icon: String
})
</script>

<style scoped>
.button {
    background-color: var(--primary-color);
    height: 2rem;
    font-size: 1rem;
    border-radius: 1rem;
    color: white;
    padding: 0 0.75rem;
    border: none;
    outline: none;
    gap: 0.25rem;
}
.button * {
    color: white;
}
.button.secondary {
    background-color: var(--secondary-color);
}
</style>