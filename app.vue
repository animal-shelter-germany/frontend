<template>
    <HeaderComponent></HeaderComponent>
    <NuxtPage></NuxtPage>
    <FooterComponent></FooterComponent>
    <DevComponent></DevComponent>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import DevComponent from './components/DevComponent.vue';

useHead({
    title: "PawParadise"
});

await useUserStore().init();
</script>