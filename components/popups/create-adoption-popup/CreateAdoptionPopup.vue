<template>
    <PopupTemplate heading="Adoption Anfragen" ref="basePopup" v-if="listing">
        <div class="content" v-if="page === 0">
            <div class="content">
                <AnimalAdoptionComponent v-for="animal in listing.animals" :animal="animal"></AnimalAdoptionComponent>
            </div>
            <div class="center-center">
                <UiButton @click="() => page++" :disabled="useAdoptionCreationStore().getSelected().length === 0">Weiter</UiButton>
            </div>
        </div>
        <div v-if="page === 1" class="content">
            <MessageTab></MessageTab>
            <div class="center-center">
                <UiButton class="hollow" @click="() => page--">Zurück</UiButton>
                <UiButton @click="() => page += 1">Zur Übersicht</UiButton>
            </div>
        </div>
        <div v-if="page === 2" class="content">
            <OverviewTab></OverviewTab>
            <div class="center-center">
                <UiButton class="hollow" @click="() => page--">Zurück</UiButton>
                <UiButton v-if="user">Anfrage senden</UiButton>
            </div>
        </div>
    </PopupTemplate>
</template>

<script setup lang="ts">
import { Listing } from '~/classes/listing/Listing';
import PopupTemplate from '@/components/popups/PopupTemplate.vue';
import AnimalAdoptionComponent from '@/components/account/vermittlungen/AnimalAdoptionComponent.vue';
import OverviewTab from './tabs/OverviewTab.vue';
import MessageTab from './tabs/MessageTab.vue';

const page = ref(0);

const basePopup = ref();

const listing: Ref<Listing | undefined> = ref(undefined);

const user = computed(() => useUserStore().getAccount());

function open(_listing: Listing) {
    listing.value = _listing;
    useAdoptionCreationStore().init();
    basePopup.value.open();
}

function close() {
    basePopup.value.close();
}

defineExpose({
    open, close
});
</script>