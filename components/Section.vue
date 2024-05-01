<template>
    <div class="section">
        <h2>{{ heading }}</h2>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    heading: string
}>();
</script>

<style scoped>
.section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
</style>