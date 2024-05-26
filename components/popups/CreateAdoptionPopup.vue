<template>
    <PopupTemplate heading="Adoption Anfragen" ref="basePopup" v-if="listing">
        <div class="content">
            <div class="content">
                <AnimalAdoptionComponent v-for="animal in listing.animals" :animal="animal"></AnimalAdoptionComponent>
            </div>
            <div class="center-center">
                <UiButton>Weiter</UiButton>
            </div>
        </div>
    </PopupTemplate>
</template>

<script setup lang="ts">
import type { Listing } from '~/classes/listing/Listing';
import PopupTemplate from './PopupTemplate.vue';
import AnimalAdoptionComponent from '../account/vermittlungen/AnimalAdoptionComponent.vue';

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

</style>