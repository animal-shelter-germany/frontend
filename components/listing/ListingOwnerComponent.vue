<template>
    <div class="tile listing">
        <img v-if="listing.files && listing.files.length > 0" class="listing__image" :src="useRuntimeConfig().public.baseUrl + '/files/' + listing.files.at(0)" alt="">
        <div class="listing__body">
            <p>{{ animalTypes.get(listing.type) }}</p>
            <div class="col-2 actions">
                <UiButton @click="() => useRouter().push('/account/listings/bearbeiten/' + listing.id)">Bearbeiten</UiButton>
                <UiButton @click="() => emits('delete')">Löschen</UiButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Listing } from '~/classes/listing/Listing';
import { animalTypes } from '~/util/animal';

const emits = defineEmits<{
    (e: 'delete'): void
}>();

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
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.actions {
    gap: 0.5rem;
}
</style>