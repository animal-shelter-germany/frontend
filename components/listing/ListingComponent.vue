<template>
    <div class="tile listing" @click="() => useRouter().push('/tiere/' + listing.id)">
        <img v-if="listing.files && listing.files.length > 0" class="listing__image" :src="useRuntimeConfig().public.baseUrl + '/files/' + listing.files.at(0)" alt="">
        <div class="listing__body">
            <p>{{ animalTypes.get(listing.type) }}</p>
            <p v-if="listing.address && listing.address.city && listing.address.zip">{{ listing.address.zip + " " + listing.address.city }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Listing } from '~/classes/listing/Listing';
import { animalTypes } from '~/util/animal';

defineProps<{
    listing: Listing
}>()
</script>

<style scoped>
.listing {
    padding: 0;
    overflow: hidden;
}
.listing__image {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
}
.listing__body {
    padding: 0.5rem;
}
</style>