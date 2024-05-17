<template>
    <div class="field">
        <label v-if="label">{{ label }}</label>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label?: string
}>();
</script>

<style scoped>
.field {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}
</style>

<style>
.field input, .field textarea, .field select {
    height: 2.5rem;
    border-radius: 0.25rem;
    background-color: rgb(255, 255, 255);
    width: 100%;

}
.field input:focus, .field textarea:focus, .field select:focus {
    border-color: var(--primary-color);
}
</style>