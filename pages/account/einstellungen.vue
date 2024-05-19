<template>
    <ScrollComponent>
        <h1>Einstellungen</h1>
        <Section heading="Allgemein" v-if="user && update">
            <form class="content tile" @submit.prevent="() => updateAcc()">
                <div class="col-2">
                    <UiInput label="Vorname">
                        <input type="text" v-model="update.firstName">
                    </UiInput>
                    <UiInput label="Nachname">
                        <input type="text" v-model="update.lastName">
                    </UiInput>
                </div>
                <div class="col-2">
                    <UiInput label="E-Mail">
                        <input type="text" v-model="update.email">
                    </UiInput>
                    <UiInput label="Kontotyp">
                        <select name="" id="">
                            <option value="">Privat</option>
                            <option value="">Organisation</option>
                        </select>
                    </UiInput>
                </div>
                <div class=center-center>
                    <UiButton>Update</UiButton>
                </div>
            </form>
        </Section>
        <PasswordResetComponent></PasswordResetComponent>
    </ScrollComponent>
</template>


<script setup lang="ts">
import { AccountUpdate } from '~/classes/AccountUpdate';
import ScrollComponent from '~/components/ScrollComponent.vue';
import PasswordResetComponent from '~/components/account/einstellungen/PasswordResetComponent.vue';
import { updateAccount } from '~/requests/account';

const user = ref(computed(() => useUserStore().getAccount()));

const update: Ref<AccountUpdate | undefined> = ref(undefined);

onMounted(() => {
    init()
})

function init() {
    const _account = structuredClone(toRaw(useUserStore().getAccount()));
    if(_account) {
        const _update = new AccountUpdate();
        _update.email = _account.email;
        _update.firstName = _account.firstName;
        _update.lastName = _account.lastName;
        update.value = _update;
    }
}

function updateAcc() {
    if(update.value) {
        updateAccount(update.value, () => {
            const _account = structuredClone(toRaw(useUserStore().getAccount()));
            if(update.value && _account) {
                _account.email = update.value.email;
                _account.firstName = update.value.firstName;
                _account.lastName = update.value.lastName;
                useUserStore().setUser(_account);
            }
        }, () => {});
    }
}
</script>