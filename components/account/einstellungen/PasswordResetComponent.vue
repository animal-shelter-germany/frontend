<template>
    <Section heading="Passwort Ändern">
    <form class="content tile" @submit.prevent="() => changePassword()">
        <div class="col-2">
            <UiInput label="Neues Passwort">
                <input type="password" v-model="password">
            </UiInput>
            <UiInput label="Neues Passwort Wiederholen">
                <input type="password" v-model="passwordRepeat">
            </UiInput>
        </div>
        <div class=center-center>
            <UiButton>Passwört Ändern</UiButton>
        </div>
    </form>
</Section>
</template>

<script setup lang="ts">
import { setPassword } from '~/requests/account';

const password = ref("");
const passwordRepeat = ref("");

function changePassword() {
    if(password.value === passwordRepeat.value) {
        if(password.value.length > 0) {
            setPassword(password.value, () => {
                password.value = "";
                passwordRepeat.value = "";
            }, () => {});
        }
    }
}
</script>