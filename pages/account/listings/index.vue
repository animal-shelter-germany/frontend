<template>
    <ScrollComponent>
        <div class="content">
            <h1>Listings</h1>
            <div class="col-3">
                <ListingComponent v-for="listing in listings" :listing="listing"></ListingComponent>
            </div>
        </div>
    </ScrollComponent>
</template>

<script setup lang="ts">
import type { Listing } from '~/classes/Listing';
import ScrollComponent from '~/components/ScrollComponent.vue';
import { getAllListingsByAccount } from '~/requests/listing';
import ListingComponent from '~/components/listing/ListingComponent.vue';

const listings: Ref<Listing[] | undefined> = ref(undefined);

onMounted(() => {
    getAllListingsByAccount((_listings: Listing[]) => {
        listings.value = _listings;
    }, () => {});
});
</script>