<template>
    <ScrollComponent>
        <div class="content">
            <h1>Listings</h1>
            <div class="col-4">
                <ListingOwnerComponent v-for="listing in listings" :listing="listing" @delete="() => { deleteListingPopup.open() }"></ListingOwnerComponent>
            </div>
        </div>
        <DeleteListingPopup ref="deleteListingPopup"></DeleteListingPopup>
    </ScrollComponent>
</template>

<script setup lang="ts">
import type { Listing } from '~/classes/Listing';
import ScrollComponent from '~/components/ScrollComponent.vue';
import { getAllListingsByAccount } from '~/requests/listing';
import ListingOwnerComponent from '~/components/listing/ListingOwnerComponent.vue';
import DeleteListingPopup from '~/components/popups/DeleteListingPopup.vue';

const deleteListingPopup = ref();

const listings: Ref<Listing[] | undefined> = ref(undefined);

onMounted(() => {
    getAllListingsByAccount((_listings: Listing[]) => {
        listings.value = _listings;
    }, () => {});
});
</script>