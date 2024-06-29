<template>
    <div class="radio__outer center-center">
        <div class="radio__inner" v-if="selected"></div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    selected: boolean
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