<template>
    <UiIcon class="rotate">progress_activity</UiIcon>
</template>

<script setup lang="ts">
import UiIcon from './UiIcon.vue';
</script>

<style scoped>
.rotate{
  animation: rotate 1s linear infinite;
}
@keyframes rotate{
  to{ transform: rotate(360deg); }
}
</style>