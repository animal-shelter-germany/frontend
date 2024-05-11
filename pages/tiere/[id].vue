<template>
    <div class="narrow content" v-if="listing && listing.files && listing.files.length > 0">
        <div class="col-2">
            <div class="tile nogap">
                <img class="listing__image" :src="useRuntimeConfig().public.baseUrl + '/files/' + listing?.files?.at(0)" alt="">
            </div>
            <div class="tile">
                <h2>{{ listing.type }}</h2>
                <p v-if="listing.animals">{{ listing.animals.length }} Tiere</p>
                <p v-for="animal in listing.animals">{{ animal.name }}, {{ animal.birthday }}</p>
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
        <Section heading="Betreuung">
            <div class="tile space-between-center">
                <div>
                    <p>Andreas Dinauer</p>
                    <p>+49 327849098</p>
                </div>
                <UiButton>Kontakt Aufnehmen</UiButton>
            </div>
        </Section>
        
    </div>
</template>

<script setup lang="ts">
import type { Listing } from '~/classes/Listing';
import { getListingById } from '~/requests/listing';
import Section from '~/components/Section.vue';
import type { Birthday } from '~/classes/Birthday';
import { sexes } from '~/util/animal/sex';

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
</script>

<style scoped>
.listing__image {
    width: 100%;
    aspect-ratio: 16/9;
}
</style>