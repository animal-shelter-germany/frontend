<template>
    <div class="checkbox-container left-center">
        <div class="checkbox" :class="{ active: checked }">
            <UiIcon v-if="checked">check</UiIcon>
        </div>
        <label>{{ label }}</label>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label: string,
    checked: boolean | undefined
}>();
</script>

<style scoped>
* {
    user-select: none;
}
.checkbox {
    height: 1.5rem;
    width: 1.5rem;
    border: 2px solid black;
    border-radius: 0.25rem;
}
.active {
    background-color: var(--primary-color);
}
.active * {
    color: white;
}
</style>