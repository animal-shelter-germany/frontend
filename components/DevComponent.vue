<template>
    <div class="dev center-center" v-if="show()">
        <div class="content tile-b logon-wrapper">
            <h2>Du bist Entwickler?</h2>
            <div class="logon">
                <UiInput label="Passwort">
                    <input type="password" v-model="password">
                </UiInput>
                <UiButton icon="arrow_circle_right" @click="() => logon()"></UiButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const password = ref("");

function show(): boolean {
    const loggedOn = useCookie('pawparadise24-logon');
    return useRequestURL().host.startsWith('dev.') && loggedOn.value == null;
}

const x = useRequestURL().host;

onMounted(() => {
    console.log(x);
});

function logon() {
    if(password.value == 'dev-pawparadise') {
        const loggedOn = useCookie('pawparadise24-logon', {
            maxAge: 60*60*24
        });
        loggedOn.value = "true";
    }
};
</script>

<style scoped>
.dev {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
}
.logon {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: flex-end;
    gap: 0.5rem;
}
.logon-wrapper {
    width: min(380px, 100%);
}
</style>