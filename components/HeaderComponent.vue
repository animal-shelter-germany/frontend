<template>
    <header class="header center-center">
        <div class="narrow space-between-center">
            <div class="site-ident center-center">
                <img class="site-img" src="/logo.png" alt="">
                <h1>PawParadise</h1>
            </div>
            <nav class="center-center gap-0">
                <NuxtLink to="/tiere">Tiere</NuxtLink>
                <UiButton icon="pets" @click="() => useRouter().push('/account/listings/anlegen')">Inserieren</UiButton>
                <UiButton v-if="!account" class="secondary" icon="login" @click="() => useRouter().push('/login')">Login</UiButton>
                <UiButton v-if="account" class="secondary" icon="account_circle" @click="() => useRouter().push('/account')">Account</UiButton>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import UiButton from './ui/UiButton.vue';

const session = useCookie('animal-session');

const account = ref(computed(() => useUserStore().getAccount()));
</script>

<style scoped>
.header {
    height: 4rem;
    background-color: var(--background-color);
    width: 100%;
}
.site-ident {
    gap: 1rem;
}
.site-img {
    height: 3rem;
    width: 3rem;
}
</style>