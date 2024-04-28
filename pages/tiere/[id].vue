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
        <div class="tile content">
            <h2>Betreuung</h2>
            <div class="space-between-center">
                <div>
                    <p>Andreas Dinauer</p>
                    <p>+49 327849098</p>
                </div>
                <UiButton>Kontakt Aufnehmen</UiButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Listing } from '~/classes/Listing';
import { getListingById } from '~/requests/listing';

const listing: Ref<Listing | undefined> = ref(undefined);

onMounted(() => {
    const id = useRoute().params.id as string;
    getListingById(id, (_listing: Listing) => {
        listing.value = _listing;
    }, () => {});
});
</script>

<style scoped>
.listing__image {
    width: 100%;
    aspect-ratio: 16/9;
}
</style>