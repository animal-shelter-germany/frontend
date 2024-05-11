<template>
    <PopupTemplate heading="Inserat Löschen?" ref="basePopup">
        <div class="content" v-if="listing">
            <div class="listing-container">
                <img class="listing__image" v-if="listing.files" :src="useRuntimeConfig().public.baseUrl + '/files/' + listing.files.at(0)" alt="">
                <div class="content s">
                    <p>{{ animalTypes.get(listing.type) }}</p>
                    <p v-if="listing.address">{{ listing.address.zip }} {{ listing.address.city }}</p>
                    <p v-if="listing.animals">Enthält {{ listing.animals.length }} Tiere</p>
                </div>
            </div>
            <div class="center-center gap-0">
                <UiButton>Abbrechen</UiButton>
                <UiButton class="hollow" @click="() => remove(listing)">Löschen</UiButton>
            </div>
        </div>
    </PopupTemplate>
</template>

<script setup lang="ts">
import type { Listing } from '~/classes/Listing';
import PopupTemplate from './PopupTemplate.vue';
import { animalTypes } from '~/util/animal';
import { deleteListing } from '~/requests/listing';

const props = defineProps<{
    onDelete: (listing: Listing) => void
}>();

function remove(listing: Listing | undefined) {
    if(listing && listing.id) {
        deleteListing(listing.id, () => {
            props.onDelete(listing);
            close();
        }, () => {})
    }
}

const basePopup = ref();

const listing: Ref<Listing | undefined> = ref(undefined);

function open(_listing: Listing) {
    listing.value = _listing;
    basePopup.value.open();
}

function close() {
    basePopup.value.close();
}

defineExpose({
    open, close
});
</script>

<style scoped>
.listing-container {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 0.5rem;
}
.listing__image {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 0.25rem;
}
</style>