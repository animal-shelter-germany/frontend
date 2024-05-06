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
                <UiButton>Login</UiButton>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { Login } from '~/classes/Login';
import { getSession } from '~/requests/session';

const session = ref(new Login());

function login(login: Login) {
    getSession(login, (token: string) => {
        const session = useCookie('animal-token');
        session.value = token;
        useUserStore().initByToken(token, () => {
            useRouter().push('/account');
        });
    }, () => {});
}
</script>