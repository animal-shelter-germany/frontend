<template>
    <div class="left-center">
        <p class="key">{{ code }}:</p>
        <p>{{ value }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    code: string,
    value: string | undefined
}>();
</script>

<style scoped>
.key {
    font-weight: 600;
}
</style>