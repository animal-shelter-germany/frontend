<template>
    <div class="section">
        <h2 v-if="heading">{{ heading }}</h2>
        <slot name="header"></slot>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    heading?: string
}>();
</script>

<style scoped>
.section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
</style>