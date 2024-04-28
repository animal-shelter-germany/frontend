<template>
    <div class="narrow content">
        <h2>Tiere</h2>
        <div class="listing-container">
            <ListingComponent v-for="listing in listings" :listing="listing"></ListingComponent>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getAllListings } from '@/requests/listing'
import type { Listing } from '~/classes/Listing';
import ListingComponent from '~/components/listing/ListingComponent.vue';

const listings: Ref<Listing[] | undefined> = ref(undefined);

onMounted(() => {
    getAllListings((_listings: Listing[]) => {
        listings.value = _listings;
    }, () => {});
});
</script>

<style scoped>
.listing-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
}
</style>