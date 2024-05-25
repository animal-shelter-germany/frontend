<template>
    <div class="content">
        <div class="tile content">
            <UiInput label="Name">
                <input type="text" v-model="animal.name">
            </UiInput>
            <div class="col-3" v-if="animal.birthday">
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
            <UiCheckbox label="Sterilisiert/Kastriert" :checked="true"></UiCheckbox>
            <UiInput label="Geschlecht">
                <UiRadio :code="key" :label="value" :active="animal.sex" v-for="[key, value] in sexes" @select="(sex: string | undefined) => animal.sex = sex"></UiRadio>
            </UiInput>
        </div>
        <div class="center-center">
            <UiButton class="hollow" icon="delete" reverse @click="() => del(animal)">Löschen</UiButton>
            <UiButton icon="save" reverse>Speichern</UiButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Animal } from '~/classes/animal/Animal';
import type { AnimalUpdate } from '~/classes/animal/AnimalUpdate';
import { deleteAnimal } from '~/requests/animal';
import { sexes } from '~/util/animal/sex';

defineProps<{
    animal: AnimalUpdate
}>();

function del(animal: AnimalUpdate) {
    if(animal.id) {
        deleteAnimal(animal.id, () => {
            emits('remove', animal);
        }, () => {});
    }
}

const emits = defineEmits<{
    (e: 'remove', payload: AnimalUpdate): void
}>();
</script>