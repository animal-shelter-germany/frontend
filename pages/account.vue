<template>
    <div class="account-layout narrow" v-if="token">
        <nav class="nav tile">
            <NuxtLink class="base-shape" to="/account">Home</NuxtLink>
            <NuxtLink class="base-shape" to="/account/listings" :class="{ active: useRoute().fullPath.startsWith('/account/listings') }">Listings</NuxtLink>
            <NuxtLink class="base-shape" to="/account/einstellungen">Einstellungen</NuxtLink>
            <NuxtLink class="base-shape" to="/account/logout">Logout</NuxtLink>
        </nav>
         <div>
            <NuxtPage></NuxtPage>
         </div>
    </div>
    <div class="narrow m" v-if="!token">
        <LoginComponent></LoginComponent>
    </div>
</template>

<script setup lang="ts">
const token = useCookie(tokenLabel);
import LoginComponent from '~/components/LoginComponent.vue';
import { tokenLabel } from '~/util/auth';
</script>

<style scoped>
.account-layout {
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100%;
}

.nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
}

.nav > * {
    display: flex;
    align-items: center;
    padding: 0 1rem;
}

.nav > *.router-link-exact-active, .nav > *.active {
    background-color: var(--primary-color);
    color: white;
}
</style>