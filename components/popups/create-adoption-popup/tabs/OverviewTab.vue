<template>
    <div v-if="!user">
        <div v-if="page === 0" class="login-page content">
            <UiButton @click="() => page = 1">Login</UiButton>
            <div class="center-center">
                <p>oder</p>
            </div>
            <UiButton @click="() => page = 2">Registrieren</UiButton>
        </div>
        <div v-if="page === 1">
            <LoginComponent :on-login="() => {}"></LoginComponent>
        </div>
        <div v-if="page === 2">
            <RegistrationComponent :on-registration="() => {}"></RegistrationComponent>
        </div>
    </div>
    <div v-if="user" class="content">
        <h3>Tiere</h3>
        <div>
            <div v-for="animal in adoption.animals" class="tile-m">
                <UiKeyValue code="Name" :value="animal.name"></UiKeyValue>
                <UiKeyValue code="Geschlecht" :value="sexes.get(animal.sex)"></UiKeyValue>
                <UiKeyValue code="Steril/Kastriert" :value="animal.steril === true ? 'Ja' : 'Nein'"></UiKeyValue>
                <UiKeyValue code="Geburtstag" :value="getBirthday(animal.birthday)"></UiKeyValue>
            </div>
        </div>
        <h3>Nachricht</h3>
        <div class="tile-m col-2">
            <div class="content-s">
                <h4>Nachricht</h4>
                <p>{{ adoption.message }}</p>
            </div>
            <div class="content-s">
                <h4>Ort</h4>
                <p>{{ adoption.zipCode + ' ' + adoption.city }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '#imports';
import LoginComponent from '~/components/LoginComponent.vue';
import RegistrationComponent from '~/components/RegistrationComponent.vue';
import { sexes } from '~/util/animal/sex';
import { getBirthday } from '~/util/birthday';

const page = ref(0);

const user = ref(computed(() => useUserStore().getAccount()));

const adoption = ref(computed(() => useAdoptionCreationStore().getAdoption()));
</script>

<style scoped>
.login-page {
    display: grid;
}
</style>