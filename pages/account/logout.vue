<template>
    <ScrollComponent>
        <h1>Logout</h1>
        <UiButton @click="() => useUserStore().logout(() => { useRouter().push('/login') })">Logout</UiButton>
    </ScrollComponent>
</template>


<script setup lang="ts">
import ScrollComponent from '~/components/ScrollComponent.vue';
</script>