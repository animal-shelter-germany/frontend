<template>
    <button class="base-shape button pointer center-center" :class="{ loading: loading }"><UiIcon v-if="icon && !loading">{{ icon }}</UiIcon><UiLoadingIcon v-if="loading"></UiLoadingIcon><slot></slot></button>
</template>

<script setup lang="ts">
import UiIcon from './UiIcon.vue';

defineProps<{
    icon?: string,
    loading?: boolean | undefined,
    onClick?: () => void
}>();
</script>

<style scoped>
.button {
    background-color: var(--primary-color);
    font-size: 1rem;
    color: white;
    padding: 0 1rem;
    border: none;
    outline: none;
    gap: 0.25rem;
}
.button:hover {
    background-color: var(--primary-color-alt);
}
.button * {
    color: white;
}
.button.secondary {
    background-color: var(--secondary-color);
}
.button:hover.secondary {
    background-color: var(--secondary-color-alt);
}
.button.reverse {
    flex-direction: row-reverse;
}
.button.loading {
    background-color: var(--loading-color);
    cursor: default;
}
</style>