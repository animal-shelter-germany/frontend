<template>
    <div class="radio left-center" @click="() => emits('select', code)">
        <div class="radio__outer center-center">
            <div class="radio__inner" v-if="active != null && active === code"></div>
        </div>
        <label>{{ label }}</label>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    active: string | undefined,
    label: string,
    code: string | undefined
}>();
const emits = defineEmits<{
    (e: 'select', payload: string | undefined): void
}>();
</script>

<style scoped>
* {
    user-select: none;
}
.radio__outer {
    height: 1.5rem;
    width: 1.5rem;
    background-color: white;
    border: 2px solid black;
    border-radius: 0.75rem;
}
.radio__inner {
    height: 1rem;
    width: 1rem;
    background-color: var(--primary-color);
    border-radius: 0.75rem;
}
</style>