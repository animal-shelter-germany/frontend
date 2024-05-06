<template>
    <button class="base-shape button pointer center-center"><UiIcon v-if="icon">{{ icon }}</UiIcon><slot></slot></button>
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
</style>