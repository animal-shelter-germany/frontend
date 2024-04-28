<template>
    <HeaderComponent></HeaderComponent>
    <NuxtPage></NuxtPage>
    <FooterComponent></FooterComponent>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

await useUserStore().init();
</script>