<template>
    <div class="account-layout narrow">
        <nav class="nav tile">
            <NuxtLink to="/account">Home</NuxtLink>
            <NuxtLink to="/account/listings">Listings</NuxtLink>
            <NuxtLink to="/account/einstellungen">Einstellungen</NuxtLink>
            <NuxtLink to="/account/logout">Logout</NuxtLink>
        </nav>
         <div>
            <NuxtPage></NuxtPage>
         </div>
    </div>
</template>

<style scoped>
.account-layout {
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100%;
}

.nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1.5rem;
}

.nav > * {
    height: 2rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-radius: 1rem;
}

.nav > *.router-link-exact-active {
    background-color: var(--primary-color);
    color: white;
}
</style>