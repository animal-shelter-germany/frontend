<template>
    <div class="dropdown tile">
        <div class="dropdown__header space-between-center"  @click="() => open = !open">
            <p>{{ label }}</p>
            <div clasS="center-center">
                <UiIcon v-if="open">chevron_right</UiIcon>
                <UiIcon v-if="!open">keyboard_arrow_down</UiIcon>
            </div>
        </div>
        <div class="dropdown__footer" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

const open = ref(false);

defineProps<{
    label: string
}>();
</script>

<style scoped>
.dropdown {
    padding: 0;
}
.dropdown__footer {
    border-top: 1px solid lightgray;
    padding: 1rem;
}
.dropdown__header {
    padding: 1rem;
}
</style>