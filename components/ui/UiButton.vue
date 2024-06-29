<template>
    <button class="base-shape button pointer center-center" :class="{ loading: loading, reverse: reverse, disabled: disabled }"><UiIcon v-if="icon && !loading">{{ icon }}</UiIcon><UiLoadingIcon v-if="loading"></UiLoadingIcon><slot></slot></button>
</template>

<script setup lang="ts">
import UiIcon from './UiIcon.vue';

defineProps<{
    icon?: string,
    reverse?: boolean,
    loading?: boolean | undefined,
    disabled?: boolean
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
.button.square {
    width: 2.5rem;
}
.button:hover {
    background-color: var(--primary-color-alt);
}
.button * {
    color: white;
}
.button.secondary {
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);
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
.button.disabled {
    background-color: #7a7a7a;
}
.button.hollow {
    background-color: transparent;
    border: 2px solid var(--primary-color);;
    color: var(--primary-color);
}
.button.hollow * {
    color: var(--primary-color);
}
.border.secondary.hollow {
    border: 2px solid var(--secondary-color);;
    color: var(--secondary-color);
}
.reverse {
    flex-direction: row-reverse;
}
</style>