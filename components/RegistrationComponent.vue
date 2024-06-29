<template>
    <div class="content">
        <h2 class="self-center">Registrieren</h2>
        <form class="content tile-l" @submit.prevent="() => registration()">
            <UiInput label="E-Mail">
                <input type="text">
            </UiInput>
            <div class="col-2">
                <UiInput label="Vorname">
                    <input type="text">
                </UiInput>
                <UiInput label="Nachname">
                    <input type="text">
                </UiInput>
            </div>
            <UiInput label="Passwort">
                <input type="password">
            </UiInput>
            <div class="center-center">
                <UiButton icon="login" :loading="loading" class="reverse">Anmelden</UiButton>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">

const loading = ref(false);

const props = defineProps<{
    onRegistration: () => void
}>();

onMounted(() => {

})

function registration() {
   
}
</script>