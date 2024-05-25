<template>
    <ScrollComponent>
        <div class="grid-rows__auto-1fr gap-0">
            <div class="space-between-center">
                <h1>Listings</h1>
                <UiButton class="secondary" @click="() => useRouter().push('/account/listings/anlegen')">Anlegen</UiButton>
            </div>
            <div class="col-4" v-if="listings">
                <ListingOwnerComponent v-for="listing in listings" :listing="listing" @delete="() => { deleteListingPopup.open(listing) }"></ListingOwnerComponent>
            </div>
            <LoadingComponent v-if="!listings"></LoadingComponent>
        </div>
        <DeleteListingPopup ref="deleteListingPopup" :on-delete="remove"></DeleteListingPopup>
    </ScrollComponent>
</template>

<script setup lang="ts">
import type { Listing } from '~/classes/listing/Listing';
import ScrollComponent from '~/components/ScrollComponent.vue';
import { getAllListingsByAccount } from '~/requests/listing';
import ListingOwnerComponent from '~/components/listing/ListingOwnerComponent.vue';
import DeleteListingPopup from '~/components/popups/DeleteListingPopup.vue';

const deleteListingPopup = ref();

const listings: Ref<Listing[] | undefined> = ref(undefined);

function remove(listing: Listing) {
    const _listings = listings.value;
    if(_listings) {
        const result = _listings.findIndex(item => item.id === listing.id);
        if(result > -1) {
            _listings.splice(result, 1);
        }
    }
}

onMounted(() => {
    getAllListingsByAccount((_listings: Listing[]) => {
        listings.value = _listings;
    }, () => {});
});
</script>