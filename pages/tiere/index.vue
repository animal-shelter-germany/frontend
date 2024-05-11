<template>
    <div class="narrow content full-height listing-wrapper">
        <h2>Tiere</h2>
        <div class="listing-page full-height">
            <form class="tile content">
                <UiInput label="Tier">
                    <select name="" id="" v-model="search.animalType">
                        <option :value="key" v-for="[key, value] in animalTypes">{{ value }}</option>
                    </select>
                </UiInput>
                <UiCheckbox label="Sterilisiert/Kastriert" :checked="search.steril" @click="() => { search.steril = !search.steril }"></UiCheckbox>
                <div class="radius-container">
                    <UiInput label="Umkreis">
                        <select name="" id="" v-model="search.radius">
                            <option value="-1">Unbegrenzt</option>
                            <option value="10">10km</option>
                            <option value="20">20km</option>
                            <option value="50">50km</option>
                            <option value="100">100km</option>
                            <option value="200">200km</option>
                        </select>
                    </UiInput>
                    <UiInput label="Postleitzal">
                        <input type="text" v-model="search.zipCode">
                    </UiInput>
                </div>
                <UiButton class="full secondary" icon="search">Suchen</UiButton>
            </form>
            <div class="listing-container">
                <ListingComponent v-for="listing in listings" :listing="listing"></ListingComponent>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getAllListings } from '@/requests/listing'
import type { Listing } from '~/classes/Listing';
import ListingComponent from '~/components/listing/ListingComponent.vue';
import { animalTypes } from '~/util/animal';
import UiCheckbox from '~/components/ui/UiCheckbox.vue';
import { Search } from '~/classes/Search';

const listings: Ref<Listing[] | undefined> = ref(undefined);

onMounted(() => {
    getAllListings((_listings: Listing[]) => {
        listings.value = _listings;
    }, () => {});
});

const search = ref(new Search());
</script>

<style scoped>
.listing-page {
    display: grid;
    grid-template-columns: min(15rem) 1fr;
    gap: 1rem;
}
.listing-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    align-content: flex-start;
}
.listing-wrapper {
    display: grid;
    grid-template-rows: auto 1fr;
}
.radius-container {
    display: grid;
    grid-template-columns: 5rem 1fr;
    gap: 1rem;
}
</style>