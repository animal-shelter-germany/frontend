<template>
    <div class="narrow m content">
        <LoginComponent :on-login="() => useRouter().push('/account')"></LoginComponent>
    </div>
</template>

<script setup lang="ts">
import LoginComponent from '~/components/LoginComponent.vue';
</script>