<template>
    <div class="tile-m content-m">
        <div class="left-center">
            <UiRadioCircle :selected="useAdoptionCreationStore().isSelected(animal)" @click="() => useAdoptionCreationStore().toggle(animal)"></UiRadioCircle>
            <h3>{{ animal.name }}</h3>
        </div>
        <div>
            <UiKeyValue code="Name" :value="animal.name"></UiKeyValue>
            <UiKeyValue code="Geschlecht" :value="sexes.get(animal.sex)"></UiKeyValue>
            <UiKeyValue code="Steril/Kastriert" :value="animal.steril === true ? 'Ja' : 'Nein'"></UiKeyValue>
            <UiKeyValue code="Geburtstag" :value="getBirthday(animal.birthday)"></UiKeyValue>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import type { Animal } from '~/classes/animal/Animal';
import { useAdoptionCreationStore } from '~/stores/AdoptionCreationStore';
import { sexes } from '~/util/animal/sex';
import { getBirthday } from '~/util/birthday';

defineProps<{
    animal: Animal
}>();
</script>