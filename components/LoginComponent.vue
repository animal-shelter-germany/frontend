<template>
    <div class="content">
        <h2 class="self-center">Login</h2>
        <form class="content tile b" @submit.prevent="() => login(session)">
            <UiInput label="E-Mail">
                <input type="text" v-model="session.email">
            </UiInput>
            <UiInput label="Passwort">
                <input type="password" v-model="session.password">
            </UiInput>
            <div class="center-center">
                <UiButton icon="login" :loading="loading" class="reverse">Login</UiButton>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { Login } from '~/classes/Login';
import { getSession } from '~/requests/session';

const session = ref(new Login());
const loading = ref(false);

function login(login: Login) {
    loading.value = true;
    getSession(login, (token: string) => {
        const session = useCookie('animal-token');
        session.value = token;
        useUserStore().initByToken(token, () => {
            useRouter().push('/account');
            loading.value = false;
        });
    }, () => {
        loading.value = false;
    });
}
</script>