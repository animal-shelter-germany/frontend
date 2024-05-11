<template>
    <ScrollComponent>
        <Section heading="Allgemein">
            <div class="col-2 tile">
                <UiInput label="Tierart">
                    <select name="" id="" v-model="listing.type">
                        <option :value="key" v-for="[key, value] in animalTypes">{{ value }}</option>
                    </select>
                </UiInput>
                <UiInput label="Abgabegrund">
                    <select name="" id="">
                        <option :value="key" v-for="[key, value] in reason">{{ value }}</option>
                    </select>
                </UiInput>
            </div>
        </Section>
        <Section heading="Adresse">
            <div class="col-2 tile">
                <UiInput label="Postleitzahl">
                    <input type="text" v-model="listing.address.zip">
                </UiInput>
                <UiInput label="Ort">
                    <input type="text" v-model="listing.address.city">
                </UiInput>
            </div>
        </Section>
        <Section heading="Tiere">
            <div class="col-2 animal-container">
                <div class="tile" v-for="animal in listing.animals">
                    <UiKeyValue code="Name" :value="animal.name"></UiKeyValue>
                    <UiKeyValue code="Geburtsdatum" :value="getBirthday(animal.birthday)"></UiKeyValue>
                    <UiKeyValue code="Geschlecht" :value="sexes.get(animal.sex)"></UiKeyValue>
                    <UiKeyValue code="Sterilisiert/Kastriert" :value="animal.steril ? 'Ja' : 'Nein'"></UiKeyValue>
                </div>
                <div class="add-animal tile center-center">
                    <UiButton icon="add" @click="() => addAnimalPopup.open()">Hinzufügen</UiButton>
                </div>
            </div>
        </Section>
        <Section :heading="'Bilder (' + listing.files.length + '/9)'" v-if="listing.files">
            <div class="image-container">
                <img class="tile listing__image" :src="file" alt="" v-for="file in listing.files">
                <div class="tile center-center">
                    <UiButton icon="add" @click="addFile()"></UiButton>
                </div>
            </div>
        </Section>
        <div class="center-center">
            <UiButton @click="() => submit(listing)">Anlegen</UiButton>
        </div>
    </ScrollComponent>
    <AddAnimalPopup ref="addAnimalPopup" @export="(animal: AnimalCreation) => { if(listing.animals) { listing.animals.push(animal) } }"></AddAnimalPopup>
</template>

<script setup lang="ts">
import type { AnimalCreation } from '~/classes/AnimalCreation';
import { ListingCreation } from '~/classes/ListingCreation';
import AddAnimalPopup from '~/components/popups/AddAnimalPopup.vue';
import { createListing } from '~/requests/listing';
import { extractFilesToBase64 } from '~/util/files';
import { getBirthday } from '~/util/birthday'
import { sexes, reason } from '~/util/animal/sex';
import { animalTypes } from '~/util/animal';

const addAnimalPopup = ref();

const listing: Ref<ListingCreation> = ref(new ListingCreation());

function addFile() {
    extractFilesToBase64(listing.value.files);
}

function submit(listing: ListingCreation) {
    createListing(listing, () => {

    }, () => {});
}
</script>

<style scoped>
.animal-container > * {
    height: 6rem;
}
.image-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5rem;
}
.image-container > * {
    aspect-ratio: 4/3;
}
.listing__image {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    padding: 0;
}
</style>