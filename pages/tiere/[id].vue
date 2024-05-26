<template>
    <div class="narrow content" v-if="listing && listing.files && listing.files.length > 0">
        <div class="col-2">
            <div class="tile nogap">
                <img class="listing__image" :src="useRuntimeConfig().public.baseUrl + '/files/' + listing?.files?.at(0)" alt="">
            </div>
            <div class="tile content-l">
                <h2>{{ animalTypes.get(listing.type) }}</h2>
                <div class="content-m">
                    <p v-if="listing.animals">{{ listing.animals.length }} Tiere</p>
                    <div v-if="listing.address" class="left-center">
                        <UiIcon>location_on</UiIcon>
                        <p>{{ listing.address.zip }} {{ listing.address.city }}</p>
                    </div>
                </div>
            </div>
        </div>
        <Section heading="Tiere">
            <div class="col-2">
                <div class="tile" v-for="animal in listing.animals">
                    <UiKeyValue code="Name" :value="animal.name"></UiKeyValue>
                    <UiKeyValue code="Geschlecht" :value="sexes.get(animal.sex)"></UiKeyValue>
                    <UiKeyValue code="Steril/Kastriert" :value="animal.steril ? 'Ja' : 'Nein'"></UiKeyValue>
                    <UiKeyValue code="Geburtstag" :value="getBirthday(animal.birthday)"></UiKeyValue>
                </div>
            </div>
        </Section>
        <div class="col-2">
            <Section heading="Betreuung">
                <div class="tile space-between-center">
                    <div>
                        <p>Andreas Dinauer</p>
                        <p>+49 327849098</p>
                    </div>
                    <UiButton>Kontakt Aufnehmen</UiButton>
                </div>
            </Section>
            <Section heading="Adoption Anfragen">
                <div class="tile space-between-center">
                    <p>Adoption eines oder mehrere Tiere hier anfragen.</p>
                    <UiButton @click="() => createAdoptionPopup.open(listing)">Anfragen</UiButton>
                </div>
            </Section>
        </div>
        <CreateAdoptionPopup ref="createAdoptionPopup"></CreateAdoptionPopup>
    </div>
</template>

<script setup lang="ts">
import type { Listing } from '~/classes/listing/Listing';
import { getListingById } from '~/requests/listing';
import Section from '~/components/Section.vue';
import type { Birthday } from '~/classes/Birthday';
import { sexes } from '~/util/animal/sex';
import { animalTypes } from '~/util/animal';
import CreateAdoptionPopup from '~/components/popups/CreateAdoptionPopup.vue';

const listing: Ref<Listing | undefined> = ref(undefined);

onMounted(() => {
    const id = useRoute().params.id as string;
    getListingById(id, (_listing: Listing) => {
        listing.value = _listing;
    }, () => {});
});

function getBirthday(birthday: Birthday | undefined): string {
    if(birthday == null || birthday.year == null) {
        return "Unbekannt";
    }
    if(birthday.month == null) {
        return birthday.year.toString();
    }
    if(birthday.day == null) {
        return birthday.month + "/" + birthday.year;
    }
    return birthday.day + "/" + birthday.month + "/" + birthday.year;
}

const createAdoptionPopup = ref();
</script>

<style scoped>
.listing__image {
    width: 100%;
    aspect-ratio: 16/9;
}
</style>