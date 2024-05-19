<template>
    <ScrollComponent>
        <h1>Einstellungen</h1>
        <Section heading="Allgemein" v-if="user">
            <div class="content tile">
                <div class="col-2">
                    <UiInput label="Vorname">
                        <input type="text" v-model="user.firstName">
                    </UiInput>
                    <UiInput label="Nachname">
                        <input type="text" v-model="user.lastName">
                    </UiInput>
                </div>
                <div class="col-2">
                    <UiInput label="E-Mail">
                        <input type="text">
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
            </div>
        </Section>
        <PasswordResetComponent></PasswordResetComponent>
    </ScrollComponent>
</template>


<script setup lang="ts">
import ScrollComponent from '~/components/ScrollComponent.vue';
import PasswordResetComponent from '~/components/account/einstellungen/PasswordResetComponent.vue';

const user = ref(computed(() => useUserStore().getAccount()));
</script>