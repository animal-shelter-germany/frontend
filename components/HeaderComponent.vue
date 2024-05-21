<template>
    <header class="header center-center">
        <div class="narrow space-between-center">
            <div class="site-ident center-center" @click="() => useRouter().push('/')">
                <UiIcon class="logo">pets</UiIcon>
                <h1>Paw<span class="colored">Paradise</span></h1>
            </div>
            <nav class="center-center gap-0">
                <NuxtLink to="/tiere">Tiere</NuxtLink>
                <UiButton icon="pets" @click="() => useRouter().push('/account/listings/anlegen')">Inserieren</UiButton>
                <UiButton v-if="!account" class="secondary" icon="login" @click="() => useRouter().push('/login')">Login</UiButton>
                <UiButton v-if="account" class="secondary" icon="account_circle" @click="() => useRouter().push('/account')">{{ account.firstName }} {{ account.lastName }}</UiButton>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import UiButton from './ui/UiButton.vue';

const account = ref(computed(() => useUserStore().getAccount()));
</script>

<style scoped>
.header {
    height: 4rem;
    background-color: var(--background-color);
    width: 100%;
}
.site-ident {
    gap: 0.5rem;
    cursor: pointer;
}
.logo {
    font-size: 2.5rem;
    color: var(--primary-color);
}
.colored {
    color: var(--primary-color);
}
</style>