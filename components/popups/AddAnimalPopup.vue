<template>
    <PopupTemplate heading="Tier hinzufügen" ref="basePopup">
        <div class="content" v-if="animal">
            <UiInput label="Name">
                <input type="text" v-model="animal.name">
            </UiInput>
            <div class="content" v-if="animal.birthday">
                <UiInput label="Geburtsjahr">
                    <input type="number" v-model="animal.birthday.year">
                </UiInput>
                <UiInput label="Geburtsmonat">
                    <input type="number" v-model="animal.birthday.month">
                </UiInput>
                <UiInput label="Geburtstag">
                    <input type="number" v-model="animal.birthday.day">
                </UiInput>
            </div>
            <UiInput label="Name">
                <input type="text" v-model="animal.name">
            </UiInput>
            <div class="col-2">
                <UiInput label="Geschlecht">
                    <UiRadio :active="animal.sex" @select="(payload: string) => setSex(animal, payload)" label="Männlich" code="m"></UiRadio>
                    <UiRadio :active="animal.sex" @select="(payload: string) => setSex(animal, payload)" label="Weiblich" code="f"></UiRadio>
                    <UiRadio :active="animal.sex" @select="(payload: string) => setSex(animal, payload)" label="Unbekannt" code="u"></UiRadio>
                </UiInput>
                <UiInput label="Reproduktionstatus">
                    <UiCheckbox label="Sterilisiert/Kastriert" :checked="animal.steril" @click="() => setSteril(animal)"></UiCheckbox>
                </UiInput>
            </div>
            
            <UiButton class="self-center" @click="() => close(animal)">Hinzufügen</UiButton>
        </div>
    </PopupTemplate>
</template>

<script setup lang="ts">
import PopupTemplate from './PopupTemplate.vue';
import { Birthday } from '~/classes/Birthday';
import dayjs from 'dayjs';
import { AnimalCreation } from '~/classes/AnimalCreation';
import UiCheckbox from '../ui/UiCheckbox.vue';

const basePopup = ref();

const animal: Ref<AnimalCreation | undefined> = ref(undefined);

function setSex(animal: AnimalCreation | undefined, sex: string) {
    if(animal) {
        animal.sex = sex;
    } 
}  
function setSteril(animal: AnimalCreation | undefined) {
    if(animal) {
        animal.steril = !animal.steril;
    }
}

function open() {
    animal.value = new AnimalCreation();
    animal.value.birthday = new Birthday(dayjs().year(), dayjs().month(), dayjs().date());
    basePopup.value.open();
}

const emits = defineEmits<{
    (e: 'export', payload: AnimalCreation): void
}>();

function close(_animal: AnimalCreation | undefined) {
    if(_animal) {
        emits('export', _animal);
    }
    basePopup.value.close();
}

defineExpose({
    open, close
});
</script>