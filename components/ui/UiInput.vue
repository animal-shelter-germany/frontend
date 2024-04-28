<template>
    <div class="field">
        <label>{{ label }}</label>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label: string
}>();
</script>

<style scoped>
.field {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}
</style>