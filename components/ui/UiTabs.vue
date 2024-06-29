<template>
    <div class="tabs base-shape">
        <div class="tab-element base-shape center-center" :class="{ current: current === key }" v-for="[key, value] in tabs" @click="() => { current = key as number }">
            <p>{{ value }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    tabs: Map<Number, String>
}>();
const current = ref(0);
</script>

<style scoped>
.tabs {
    background-color: var(--background-color);
    display: flex;
    cursor: pointer;
}
.tab-element {
    padding: 0 1rem;
}
.tab-element.current {
    background-color: var(--primary-color);
    color: white;
}

.tab-element.current * {
    color: white;
}
</style>