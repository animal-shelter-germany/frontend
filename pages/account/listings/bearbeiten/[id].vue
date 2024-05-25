<template>
    <ScrollComponent>
        <h1>Bearbeiten</h1>
        <div v-if="listing" class="content">
            <Section heading="Allgemein">
                <div class="content" v-if="listing">
                    <div class="col-2 tile">
                        <UiInput label="Tierart">
                            <select name="" id="" v-model="listing.type">
                                <option :value="key" v-for="[key, value] in animalTypes">{{ value }}</option>
                            </select>
                        </UiInput>
                        <UiInput label="Status">
                            <select name="" id="" v-model="listing.status">
                                <option value="ACTIVE">Aktiv</option>
                                <option value="INACTIVE">Inaktiv</option>
                                <option value="CONVEYED">Vermittelt</option>
                                <option value="CONVEYED">Teils vermittelt</option>
                            </select>
                        </UiInput>
                    </div>
                    <div class="center-center">
                        <UiButton icon="save" reverse @click="update(listing)">Speichern</UiButton>
                    </div>
                </div>
            </Section>
            <Section>
                <template #header>
                    <div class="left-center">
                        <h2>Tiere</h2>
                        <UiButton @click="() => addAnimalPopup.open()" icon="add" class="secondary square"></UiButton>
                    </div>
                </template>
                <div class="col-2">
                    <EditAnimalComponent v-for="animal in animals" :animal="animal" @remove="(payload: AnimalUpdate) => removeAnimal(payload)"></EditAnimalComponent>
                </div>
            </Section>
        </div>
        <LoadingComponent v-if="!listing"></LoadingComponent>
    </ScrollComponent>
    <AddAnimalPopup ref="addAnimalPopup" @export="(animal: AnimalCreation) => addAnimal(animal)"></AddAnimalPopup>
</template>

<script setup lang="ts">
import { AnimalUpdate } from '~/classes/animal/AnimalUpdate';
import { Listing } from '~/classes/listing/Listing';
import { ListingUpdate } from '~/classes/listing/ListingUpdate';
import { getListingById } from '~/requests/listing';
import { animalTypes } from '~/util/animal';
import EditAnimalComponent from '~/components/account/inserate/EditAnimalComponent.vue';
import { updateListing } from '~/requests/listing';
import AddAnimalPopup from '~/components/popups/AddAnimalPopup.vue';
import type { AnimalCreation } from '~/classes/animal/AnimalCreation';
import { createAnimal } from '~/requests/animal';
import type { Animal } from '~/classes/animal/Animal';

const addAnimalPopup = ref();

const listing: Ref<ListingUpdate | undefined> = ref(undefined);
const animals: Ref<AnimalUpdate[] | undefined> = ref(undefined);

onMounted(() => {
    const id = useRoute().params.id as string;
    getListingById(id, (_listing: Listing) => {
        listing.value = new ListingUpdate(_listing.type, _listing.status);
        if(_listing.animals) {
            animals.value = [];
            _listing.animals.forEach((item) => {
                if(animals.value) {
                    animals.value.push(animalToUpdate(item));
                }
            });
        }
    }, () => {});
});

function update(listing: ListingUpdate | undefined) {
    if(listing) {
        const id = useRoute().params.id as string;
        updateListing(id, listing, () => {
            useRouter().push('/account/listings');
        }, () => {});
    }
}

function addAnimal(animal: AnimalCreation) {
    const listingId = useRoute().params.id as string;
    createAnimal(listingId, animal, (animal: Animal) => {
        if(animals.value) {
            animals.value.push(animalToUpdate(animal));
        }
    }, () => {});
}

function animalToUpdate(animal: Animal): AnimalUpdate {
    return new AnimalUpdate(animal.id, animal.name, animal.sex, animal.birthday);
}

function removeAnimal(animal: AnimalUpdate) {
    if(animals.value) {
        const index = animals.value.findIndex(item => item.id === animal.id);
        animals.value.splice(1, index);
    }
}
</script>