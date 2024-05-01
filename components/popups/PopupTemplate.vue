<template>
    <div class="popup center-center" v-if="visible">
        <div class="popup__content content">
            <header class="popup__header space-between-center">
                <h2>{{ heading }}</h2>
                <p><UiIcon class="styled">close</UiIcon></p>
            </header>
            <div class="popup__body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    heading: string
}>();

const visible = ref(false);

function open() {
    visible.value = true;
}

function close() {
    visible.value = false;
}

defineExpose({
    open, close
});
</script>

<style scoped>
.popup {
    position: fixed;
    padding: 1rem;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #00000042;
}
.popup__content {
    background-color: white;
    width: min(100%, 540px);
    padding: 1rem;
    border-radius: 0.5rem;
}
</style>